/*******************************************************************************
 * The MIT License (MIT)
 * Copyright (c) 2016, 2018  Engineering Ingegneria Informatica S.p.A
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *******************************************************************************/
package it.eng.opsi.cdv.consentmanager.dao;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;

import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.Document;

import org.bson.types.ObjectId;

import org.slf4j.LoggerFactory;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

import com.mongodb.client.model.IndexOptions;

import com.mongodb.client.model.UpdateOptions;

import com.mongodb.client.result.UpdateResult;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.Logger;
import it.eng.opsi.cdv.consentmanager.connection.MongoDBConnection;
import it.eng.opsi.cdv.consentmanager.model.Account;

import it.eng.opsi.cdv.consentmanager.model.AccountManagerException;
import it.eng.opsi.cdv.consentmanager.model.AccountNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.AccountUtilsException;
import it.eng.opsi.cdv.consentmanager.model.ConsentRecordNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.ServiceLinkRecord;
import it.eng.opsi.cdv.consentmanager.model.ServiceLinkRecordNotFoundException;

import it.eng.opsi.cdv.consentmanager.model.SinkConsentRecordNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.SourceConsentRecordNotFoundException;

import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentForm;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordSink;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordSource;
import it.eng.opsi.cdv.consentmanager.utils.DAOUtils;

import it.eng.opsi.cdv.consentmanager.utils.PropertyManager;
import it.eng.opsi.servicemanager.data.ServiceEntry;

public class AccountDAO {

	private String collectionName;

	static Logger root = (Logger) LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME);

	static {
		root.setLevel(Level.INFO);
	}

	public AccountDAO(String collectionName) {
		this.collectionName = collectionName;

		// Create unique index for username field
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);
		Document keys = new Document("username", 1);
		collection.createIndex(keys, new IndexOptions().unique(true));

	}

	public Account getAccount(String accountId) throws AccountManagerException, AccountNotFoundException {

		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);
		MongoCursor<Document> cursor = null;
		try {

			// try with _id as accountId
			cursor = collection.find(eq("_id", new ObjectId(accountId))).iterator();

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				cursor = collection.find(eq("username", accountId)).iterator();
			else
				throw new AccountManagerException("There was an error while getting the Account");

		}

		if (cursor.hasNext()) {
			Document current = cursor.next();
			// current.append("_id", current.remove("_id").toString());
			current.remove("_id");
			current.remove("password");

			try {
				return DAOUtils.json2Obj(current.toJson(), Account.class);
			} catch (AccountUtilsException e) {
				throw new AccountManagerException("There was an error while getting the Account");
			}

		} else
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
	}

	public ServiceLinkRecord getServiceLinkRecordByServiceId(String accountId, String serviceId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$serviceLinkRecords");
			filterFields.append("as", "item").append("cond",
					new Document("$eq", Arrays.asList("$$item.serviceId", serviceId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("serviceLinkRecords", filter));

			Document unwind = new Document("$unwind", "$serviceLinkRecords");

			try {
				match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				output = collection.aggregate(Arrays.asList(match, project, unwind));

			} catch (IllegalArgumentException e) {
				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match", new Document("username", accountId));
					output = collection.aggregate(Arrays.asList(match, project, unwind));
				} else
					throw new AccountManagerException("There was an error while getting the Account");

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Record");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("serviceLinkRecords"))).toJson(), ServiceLinkRecord.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Service Link Record");
			}

		} else {
			throw new ServiceLinkRecordNotFoundException("The Service Link Record with serviceId: " + serviceId
					+ " for the Account Id: " + accountId + " was not found");
		}
	}

	public ConsentRecordSink getConsentRecordSinkByConsentId(String accountId, String consentRecordId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$sinkConsentRecords");
			filterFields.append("as", "item").append("cond",
					new Document("$eq", Arrays.asList("$$item.common_part.cr_id", consentRecordId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("sinkConsentRecords", filter));

			// Document unwind = new Document("$unwind", "$consentRecordId");
			Document unwind = new Document("$unwind", "$sinkConsentRecords");
			try {
				// match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				match = new Document("$match", new Document("username", accountId));
				output = collection.aggregate(Arrays.asList(match, project, unwind));

			} catch (IllegalArgumentException e) {
				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match", new Document("username", accountId));
					output = collection.aggregate(Arrays.asList(match, project, unwind));
				} else
					throw new AccountManagerException("There was an error while getting the Account");

			}

		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw new ServiceLinkRecordNotFoundException(
					"The Sink Consent Record with id: " + consentRecordId + " was not found");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Record");
		}

		Document d = null;

		MongoCursor<Document> cursor = output.iterator();
		while (cursor.hasNext()) {
			Document next = cursor.next();
		}

		d = output.first();

		if (output != null && d != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("sinkConsentRecords"))).toJson(), ConsentRecordSink.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Sink Consent Record");
			}

		} else
			throw new ServiceLinkRecordNotFoundException(
					"The Sink Consent Record with id: " + consentRecordId + " was not found");

	}

	public ConsentForm addConsentForm(String accountId, String consentForm) {

		// to be implemented
		return null;
	}

	public ConsentRecordSink addSinkConsentRecord(String accountId, ConsentRecordSink record)
			throws AccountManagerException, AccountNotFoundException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Account a = getAccount(accountId);
			docToAdd = Document.parse(DAOUtils.obj2Json(record, ConsentRecordSink.class));
			docToAdd.put("_id", new ObjectId().toString());

			try {
				ObjectId accountDocId = new ObjectId(accountId);

				result = collection.updateOne(eq("_id", accountDocId),
						new Document("$addToSet", new Document("sinkConsentRecords", docToAdd)).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			} catch (IllegalArgumentException e) {
				// try with username

				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					result = collection.updateOne(eq("username", a.getUsername()),
							new Document("$addToSet", new Document("sinkConsentRecords", docToAdd)).append("$set",
									new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
							new UpdateOptions().upsert(false));
				} else
					throw new AccountManagerException("There was an error while getting the Account");
			}

			if (result.getModifiedCount() == 0)
				throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
			else
				record.set_id(docToAdd.getString("_id"));

			return record;

		} catch (Exception e) {

			if (e.getClass().equals(AccountNotFoundException.class)) {
				throw new AccountNotFoundException(e.getMessage());
			} else {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while adding the ServiceLinkRecord");
			}
		}

	}

	public ConsentRecordSource addSourceConsentRecord(String accountId, ConsentRecordSource record)
			throws AccountManagerException, AccountNotFoundException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Account a = getAccount(accountId);
			docToAdd = Document.parse(DAOUtils.obj2Json(record, ConsentRecordSource.class));
			docToAdd.put("_id", new ObjectId().toString());

			try {
				ObjectId accountDocId = new ObjectId(accountId);

				result = collection.updateOne(eq("_id", accountDocId),
						new Document("$addToSet", new Document("sourceConsentRecords", docToAdd)).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			} catch (IllegalArgumentException e) {
				// try with username

				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					result = collection.updateOne(eq("username", a.getUsername()),
							new Document("$addToSet", new Document("sourceConsentRecords", docToAdd)).append("$set",
									new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
							new UpdateOptions().upsert(false));
				} else
					throw new AccountManagerException("There was an error while getting the Account");
			}

			if (result.getModifiedCount() == 0)
				throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
			else
				record.set_id(docToAdd.getString("_id"));

			return record;

		} catch (Exception e) {

			if (e.getClass().equals(AccountNotFoundException.class)) {
				throw new AccountNotFoundException(e.getMessage());
			} else {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while adding the ServiceLinkRecord");
			}
		}

	}

	public ConsentRecordSink updateSinkConsentRecord(String accountId, ConsentRecordSink record)
			throws AccountManagerException, AccountNotFoundException {

		UpdateResult result = null;
		Document docToUpdate = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Account a = getAccount(accountId);
			docToUpdate = Document.parse(DAOUtils.obj2Json(record, ConsentRecordSink.class));
			String crId = record.getCommon_part().getCr_id();
			// docToUpdate.put("_id", new ObjectId().toString());

			try {
				// ObjectId accountDocId = new ObjectId(accountId);
				result = collection.updateOne(
						and(eq("username", accountId), eq("sinkConsentRecords.common_part.cr_id", crId),
								eq("sinkConsentRecords._id", record.get_id())),
						new Document("$set", new Document("sinkConsentRecords.$", docToUpdate)),
						new UpdateOptions().upsert(false));

			} catch (IllegalArgumentException e) {
				// try with username
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {
					result = collection.updateOne(
							and(eq("username", accountId), eq("sinkConsentRecords.common_part.cr_id", crId)),
							new Document("$set", new Document("sinkConsentRecords.$", docToUpdate)).append("$set",
									new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
							new UpdateOptions().upsert(false));
				} else
					throw new AccountManagerException("There was an error while getting the Account");
			}

			if (result.getModifiedCount() == 0)
				throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
			else
				record.set_id(docToUpdate.getString("_id"));

			return record;

		} catch (Exception e) {

			if (e.getClass().equals(AccountNotFoundException.class)) {
				e.printStackTrace();
				throw new AccountNotFoundException(e.getMessage());
			} else {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while adding the ServiceLinkRecord");
			}
		}

	}

	public ConsentRecordSource updateSourceConsentRecord(String accountId, ConsentRecordSource record)
			throws AccountManagerException, AccountNotFoundException {

		UpdateResult result = null;
		Document docToUpdate = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			// Account a = getAccount(accountId);
			docToUpdate = Document.parse(DAOUtils.obj2Json(record, ConsentRecordSource.class));
			docToUpdate.put("_id", new ObjectId().toString());
			String crId = record.getCommon_part().getCr_id();

			try {
				// ObjectId accountDocId = new ObjectId(accountId);
				result = collection.updateOne(
						and(eq("username", accountId), eq("sourceConsentRecords.common_part.cr_id", crId),
								eq("sourceConsentRecords._id", record.get_id())),
						new Document("$set", new Document("sourceConsentRecords.$", docToUpdate)),
						new UpdateOptions().upsert(false));

			} catch (IllegalArgumentException e) {
				// try with username

				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					result = collection.updateOne(
							and(eq("username", accountId), eq("sourceConsentRecords.common_part.cr_id", crId)),
							new Document("$set", new Document("sourceConsentRecords.$", docToUpdate)).append("$set",
									new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
							new UpdateOptions().upsert(false));
				} else
					throw new AccountManagerException("There was an error while getting the Account");
			}

			if (result.getModifiedCount() == 0)
				throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
			else
				record.set_id(docToUpdate.getString("_id"));

			return record;

		} catch (Exception e) {

			if (e.getClass().equals(AccountNotFoundException.class)) {
				throw new AccountNotFoundException(e.getMessage());
			} else {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while adding the ServiceLinkRecord");
			}
		}

	}

	public ConsentRecordSink getConsentRecordSinkByDatasetId(String accountId, String datasetId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		// Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			// Document filterFields = new Document("input", "$sinkConsentRecords");
			// filterFields.append("as", "item").append("cond",
			// new Document("$eq",
			// Arrays.asList("$$item.common_part.rs_description.resource_set.dataset.id",
			// datasetId)));

			// Document filter = new Document("$filter", filterFields);
			// Document project = new Document("$project", new
			// Document("sinkConsentRecords", filter));
			Document match = new Document("$match", new Document("username", accountId));
			// Document unwind = new Document("$unwind", "$consentRecordId");
			Document unwind = new Document("$unwind", "$sinkConsentRecords");
			Document match2 = new Document("$match",
					new Document("sinkConsentRecords.common_part.rs_description.resource_set.dataset.id", datasetId));
			Document sort = new Document("$sort", new Document("sinkConsentRecords.common_part.iat", -1));
			Document limit = new Document("$limit", 1);
			Document project = new Document("$project",
					new Document("_id", 0).append("sinkConsentRecords", "$sinkConsentRecords"));

			// try {
			// match = new Document("$match", new Document("_id", new ObjectId(accountId)));
			output = collection.aggregate(Arrays.asList(match, unwind, match2, sort, limit, project));
			/*
			 * db.accountsCollection.aggregate([{$match: {"username":"jimstewart"}},
			 * {$unwind:"$sinkConsentRecords"},{$match:{
			 * "sinkConsentRecords.common_part.rs_description.resource_set.dataset.id":
			 * "33"}},{$project: {_id: 0, sinkConsentRecords: "$sinkConsentRecords"}}])
			 */

			// } catch (IllegalArgumentException e) {
			// try with username as accountId
			/*
			 * if
			 * (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"
			 * )) {
			 * 
			 * match = new Document("$match", new Document("username", accountId)); output =
			 * collection.aggregate(Arrays.asList(match, project, unwind)); } else throw new
			 * AccountManagerException("There was an error while getting the Account");
			 */
			// throw new IllegalArgumentException("IllegalArgumentException");
			// }

		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw new ServiceLinkRecordNotFoundException(
					"The Sink Consent Record with id: " + datasetId + " was not found");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Record");
		}

		Document d = null;

		MongoCursor<Document> cursor = output.iterator();
		while (cursor.hasNext()) {
			Document next = cursor.next();

		}

		d = output.first();

		if (output != null && d != null) {
			try {
				return DAOUtils.json2Obj(((Document) (d.get("sinkConsentRecords"))).toJson(), ConsentRecordSink.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Sink Consent Record");
			}
		} else {
			/*
			 * throw new ServiceLinkRecordNotFoundException(
			 * "The Sink Consent Record with id: " + datasetId + " was not found");
			 */
			return null;
		}
	}

	public List<Object> getConsentRecordsByServicendDatasetId(String accountId, String sinkId, String sourceId,
			String datasetId) throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> outputSinkCR = null;
		AggregateIterable<Document> outputSourceCR = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document matchAccountId = new Document("$match", new Document("username", accountId));
			Document unwind = new Document("$unwind", "$sinkConsentRecords");
			Document match_datasetId = new Document("$match",
					new Document("$and",
							Arrays.asList(new Document(
									"sinkConsentRecords.common_part.rs_description.resource_set.dataset.id", datasetId),
									new Document("sinkConsentRecords.common_part.subject_id", sinkId))));

			Document sort = new Document("$sort", new Document("sinkConsentRecords.common_part.iat", -1));
			Document limit = new Document("$limit", 1);
			Document project = new Document("$project",
					new Document("_id", 0).append("sinkConsentRecords", "$sinkConsentRecords"));

			outputSinkCR = collection
					.aggregate(Arrays.asList(matchAccountId, unwind, match_datasetId, sort, limit, project));

			unwind = new Document("$unwind", "$sourceConsentRecords");
			match_datasetId = new Document("$match",
					new Document("$and", Arrays.asList(
							new Document("sourceConsentRecords.common_part.rs_description.resource_set.dataset.id",
									datasetId),
							new Document("sourceConsentRecords.common_part.subject_id", sourceId))));

			sort = new Document("$sort", new Document("sourceConsentRecords.common_part.iat", -1));
			limit = new Document("$limit", 1);
			project = new Document("$project",
					new Document("_id", 0).append("sourceConsentRecords", "$sourceConsentRecords"));

			outputSourceCR = collection
					.aggregate(Arrays.asList(matchAccountId, unwind, match_datasetId, sort, limit, project));

		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw new ServiceLinkRecordNotFoundException(
					"The Consents Record with id: " + datasetId + " were not found");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Consent Record");
		}

		Document documentSink = null;
		Document documentSource = null;

		documentSink = outputSinkCR.first();
		documentSource = outputSourceCR.first();

		List<Object> consentRecords = new ArrayList<Object>();

		if (outputSinkCR != null && documentSink != null && outputSourceCR != null && documentSource != null) {
			try {

				consentRecords.add(DAOUtils.json2Obj(((Document) documentSink.get("sinkConsentRecords")).toJson(),
						ConsentRecordSink.class));
				consentRecords.add(DAOUtils.json2Obj(((Document) documentSource.get("sourceConsentRecords")).toJson(),
						ConsentRecordSource.class));
				return consentRecords;

			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Sink Consent Record");
			}
		} else {
			/*
			 * throw new ServiceLinkRecordNotFoundException(
			 * "The Sink Consent Record with id: " + datasetId + " was not found");
			 */
			return null;
		}
	}

	public ConsentRecordSource getConsentRecordSourceByDatasetId(String accountId, String datasetId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		// Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			// Document filterFields = new Document("input", "$sinkConsentRecords");
			// filterFields.append("as", "item").append("cond",
			// new Document("$eq",
			// Arrays.asList("$$item.common_part.rs_description.resource_set.dataset.id",
			// datasetId)));

			// Document filter = new Document("$filter", filterFields);
			// Document project = new Document("$project", new
			// Document("sinkConsentRecords", filter));
			Document match = new Document("$match", new Document("username", accountId));
			// Document unwind = new Document("$unwind", "$consentRecordId");
			Document unwind = new Document("$unwind", "$sourceConsentRecords");
			Document match2 = new Document("$match",
					new Document("sourceConsentRecords.common_part.rs_description.resource_set.dataset.id", datasetId));
			Document sort = new Document("$sort", new Document("sourceConsentRecords.common_part.iat", -1));
			Document limit = new Document("$limit", 1);
			Document project = new Document("$project",
					new Document("_id", 0).append("sourceConsentRecords", "$sourceConsentRecords"));

			// try {
			// match = new Document("$match", new Document("_id", new ObjectId(accountId)));
			output = collection.aggregate(Arrays.asList(match, unwind, match2, sort, limit, project));
			/*
			 * db.accountsCollection.aggregate([{$match: {"username":"jimstewart"}},
			 * {$unwind:"$sinkConsentRecords"},{$match:{
			 * "sinkConsentRecords.common_part.rs_description.resource_set.dataset.id":
			 * "33"}},{$project: {_id: 0, sinkConsentRecords: "$sinkConsentRecords"}}])
			 */

			// } catch (IllegalArgumentException e) {
			// try with username as accountId
			/*
			 * if
			 * (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"
			 * )) {
			 * 
			 * match = new Document("$match", new Document("username", accountId)); output =
			 * collection.aggregate(Arrays.asList(match, project, unwind)); } else throw new
			 * AccountManagerException("There was an error while getting the Account");
			 */
			// throw new IllegalArgumentException("IllegalArgumentException");
			// }

		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw new ServiceLinkRecordNotFoundException(
					"The Source Consent Record with id: " + datasetId + " was not found");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Record");
		}

		Document d = null;

		MongoCursor<Document> cursor = output.iterator();
		while (cursor.hasNext()) {
			Document next = cursor.next();

		}

		d = output.first();

		if (output != null && d != null) {
			try {
				return DAOUtils.json2Obj(((Document) (d.get("sourceConsentRecords"))).toJson(),
						ConsentRecordSource.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Source Consent Record");
			}
		} else {
			/*
			 * throw new ServiceLinkRecordNotFoundException(
			 * "The Sink Consent Record with id: " + datasetId + " was not found");
			 */
			return null;
		}
	}

	public List<ConsentRecordSink> getSinkConsentRecords(String accountId)
			throws SinkConsentRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		ArrayList<ConsentRecordSink> result = new ArrayList<ConsentRecordSink>();
		MongoCollection<Document> collection = null;
		Document match = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document unwind = new Document("$unwind", "$sinkConsentRecords");

			try {
				match = new Document("$match", Arrays.asList(new Document("_id", new ObjectId(accountId))));

				output = collection.aggregate(Arrays.asList(match, unwind));

				// match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				// output = collection.aggregate(Arrays.asList(match, unwind));

			} catch (IllegalArgumentException e) {
				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match", new Document("username", accountId));
					output = collection.aggregate(Arrays.asList(match, unwind));
				} else
					throw new AccountManagerException("There was an error while getting the Account");

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting Consent Sink Records");
		}

		for (Document d : output) {
			try {
				result.add(DAOUtils.json2Obj(((Document) (d.get("sinkConsentRecords"))).toJson(),
						ConsentRecordSink.class));
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Consent Sink Records");
			}
		}

		// if (result.size() != 0)
		// return result;
		// else
		// throw new SinkConsentRecordNotFoundException(
		// "No Consent Sink Records were found for the Account Id: " + accountId);
		return result;
	}

	public List<ConsentRecordSource> getSourceConsentRecords(String accountId)
			throws SourceConsentRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		ArrayList<ConsentRecordSource> result = new ArrayList<ConsentRecordSource>();
		MongoCollection<Document> collection = null;
		Document match = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document unwind = new Document("$unwind", "$sourceConsentRecords");

			try {
				match = new Document("$match", Arrays.asList(new Document("_id", new ObjectId(accountId))));

				output = collection.aggregate(Arrays.asList(match, unwind));

				// match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				// output = collection.aggregate(Arrays.asList(match, unwind));

			} catch (IllegalArgumentException e) {
				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match", new Document("username", accountId));
					output = collection.aggregate(Arrays.asList(match, unwind));
				} else
					throw new AccountManagerException("There was an error while getting the Account");

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting Consent Source Records");
		}

		for (Document d : output) {
			try {
				result.add(DAOUtils.json2Obj(((Document) (d.get("sourceConsentRecords"))).toJson(),
						ConsentRecordSource.class));
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Consent Source Records");
			}
		}

		if (result.size() != 0)
			return result;
		else
			throw new SourceConsentRecordNotFoundException(
					"No Consent Source Records were found for the Account Id: " + accountId);
	}

	public ConsentRecordSource findSourceConsentRecordByRes_id(String rs_id, String accountId) throws Exception {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			try {

				// Document filter = new Document("$filter", filterFields);
				// Document project = new Document("$project", new
				// Document("sinkConsentRecords", filter));
				Document match = new Document("$match", new Document("username", accountId));
				// Document unwind = new Document("$unwind", "$consentRecordId");
				Document unwind = new Document("$unwind", "$sourceConsentRecords");
				Document match2 = new Document("$match",
						new Document("sourceConsentRecords.common_part.rs_description.resource_set.rs_id", rs_id));
				Document sort = new Document("$sort", new Document("sourceConsentRecords.common_part.iat", -1));
				// Document limit = new Document("$limit", 1);
				Document project = new Document("$project",
						new Document("_id", 0).append("sourceConsentRecords", "$sourceConsentRecords"));

				output = collection.aggregate(Arrays.asList(match, unwind, match2, sort, project));

			} catch (IllegalArgumentException e) {

				e.printStackTrace();
			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new SourceConsentRecordNotFoundException(
					"There was an error while getting the Consent Source Record by res_id");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("sourceConsentRecords"))).toJson(),
						ConsentRecordSource.class);
			} catch (Exception e) {
				e.printStackTrace();
				throw new Exception("There was an error while transforming Consent source recod in object");
			}

		} else
			throw new SourceConsentRecordNotFoundException(
					"The consent source record with res_id: " + rs_id + " was not found");
	}

	public ConsentRecordSink findSinkConsentRecordByRes_id(String rs_id, String accountId) throws Exception {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			try {

				// Document filter = new Document("$filter", filterFields);
				// Document project = new Document("$project", new
				// Document("sinkConsentRecords", filter));
				Document match = new Document("$match", new Document("username", accountId));
				// Document unwind = new Document("$unwind", "$consentRecordId");
				Document unwind = new Document("$unwind", "$sinkConsentRecords");
				Document match2 = new Document("$match",
						new Document("sinkConsentRecords.common_part.rs_description.resource_set.rs_id", rs_id));
				Document sort = new Document("$sort", new Document("sinkConsentRecords.common_part.iat", -1));
				// Document limit = new Document("$limit", 1);
				Document project = new Document("$project",
						new Document("_id", 0).append("sinkConsentRecords", "$sinkConsentRecords"));

				output = collection.aggregate(Arrays.asList(match, unwind, match2, sort, project));

			} catch (IllegalArgumentException e) {

				e.printStackTrace();
			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new SinkConsentRecordNotFoundException(
					"There was an error while getting the Consent Source Record by res_id");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("sinkConsentRecords"))).toJson(), ConsentRecordSink.class);
			} catch (Exception e) {
				e.printStackTrace();
				throw new Exception("There was an error while transforming Consent source record in object");
			}

		} else
			throw new SourceConsentRecordNotFoundException(
					"The consent sink record with res_id: " + rs_id + " was not found");
	}

	public boolean existsAccount(String id) throws AccountManagerException {

		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);
		try {
			return collection.count(eq("_id", new ObjectId(id))) > 0;
		} catch (IllegalArgumentException e) {
			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				return collection.count(eq("username", id)) > 0;
			else
				throw new AccountManagerException("There was an error while getting the Account");
		}
	}

	public ServiceEntry findServiceById(String id) throws Exception {
		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client
				.target(PropertyManager.getProperty("SERVICEMANAGER_HOST") + "/api/v1/services/" + id);

		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.get();

		int status = response.getStatus();
		String res = response.readEntity(String.class);
		response.close();

		if (status == 200) {
			// JSONObject resJson = new JSONObject(res);
			try {
				return DAOUtils.json2Obj(res, ServiceEntry.class);
			} catch (Exception e) {
				throw new Exception("There was an error while transforming the Service");
			}

		} else
			throw new Exception("There was an error while getting the Service");

	}
	

}
