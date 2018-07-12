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
package it.eng.opsi.cdv.pdatarepository.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.slf4j.LoggerFactory;

import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

import static com.mongodb.client.model.Filters.*;

import it.eng.opsi.cdv.pdatarepository.connection.MongoDBConnection;
import it.eng.opsi.cdv.pdatarepository.model.AccountPData;
import it.eng.opsi.cdv.pdatarepository.model.DataSecurityManagerCallException;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatarepository.model.PDataRepositoryException;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.model.PDataValueAlreadyPresentException;
import it.eng.opsi.cdv.pdatarepository.model.PDataWriteMode;
import it.eng.opsi.cdv.pdatarepository.utils.DAOUtils;
import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.Logger;

public class PDataDAO {

	private String collectionName;
	private static Properties props;

	static Logger root = (Logger) LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME);

	static {
		root.setLevel(Level.INFO);
	}

	public PDataDAO(String collectionName, Properties props) {
		this.props = props;
		this.collectionName = collectionName;
	}

	public List<PDataEntry> getAllPData(String accountId)
			throws PDataRepositoryException, PDataNotFoundException, PDataUtilsException {

		AggregateIterable<Document> output = null;
		ArrayList<PDataEntry> result = new ArrayList<PDataEntry>();

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> coll = db.getCollection(collectionName);

			Document match = new Document("$match", new Document("accountId", accountId));
			Document unwind = new Document("$unwind", "$pData");

			output = coll.aggregate(Arrays.asList(match, unwind));

		} catch (IllegalArgumentException e) {
			throw new PDataNotFoundException("No PData were found for the Account Id: " + accountId);

		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while getting PData");
		}

		for (Document d : output) {
			result.add(DAOUtils.json2Obj(((Document) (d.get("pData"))).toJson(), PDataEntry.class));
		}

		if (result.size() != 0) {

			// CALL to Data Security Manager for values decryption
			try {
				return callDecryptPDataList(result, accountId);
			} catch (DataSecurityManagerCallException e) {
				e.printStackTrace();
				throw new PDataRepositoryException("There was an error while decrypting PData");
			}

		} else
			throw new PDataNotFoundException("No PData were found for the Account Id: " + accountId);

	}

	public PDataEntry getPData(String conceptId, String accountId)
			throws PDataRepositoryException, PDataNotFoundException, PDataUtilsException {

		Document d = null;

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> coll = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$pData");
			filterFields.append("as", "item").append("cond",
					new Document("$eq", Arrays.asList("$$item.conceptId", conceptId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("pData", filter));

			Document match = new Document("$match", new Document("accountId", accountId));
			Document unwind = new Document("$unwind", "$pData");

			AggregateIterable<Document> output = coll.aggregate(Arrays.asList(match, project, unwind));

			d = output.first();

		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while getting PData");
		}

		if (d != null) {

			PDataEntry encEntry = DAOUtils.json2Obj(((Document) (d.get("pData"))).toJson(), PDataEntry.class);

			// CALL to Data Security Manager for values decryption
			try {
				return callDecryptPData(encEntry, accountId);
			} catch (DataSecurityManagerCallException e) {
				e.printStackTrace();
				throw new PDataRepositoryException("There was an error while decrypting PData");
			}

		} else
			throw new PDataNotFoundException(
					"There was not found any PDataEntry value for the passed conceptID: " + conceptId);

	}

	public List<PDataEntry> getPData(List<String> conceptIds, String accountId)
			throws PDataRepositoryException, PDataUtilsException {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> coll = db.getCollection(collectionName);
		List<PDataEntry> result = new ArrayList<PDataEntry>();

		// List<Bson> clauses = new ArrayList<Bson>();
		// conceptIds.stream()
		// .forEach(conceptId -> clauses.add(and(eq("pData.conceptId",
		// conceptId), eq("accountId", accountId))));

		// MongoCursor<Document> cursor =
		// coll.find(or(clauses)).sort(Sorts.descending("id")).iterator();
		// if (cursor.hasNext())
		// while (cursor.hasNext()) {
		// Document d = cursor.next();
		// PDataEntry value = DAOUtils.json2Obj(d.toJson(), PDataEntry.class);
		// result.add(value);
		// }

		/*
		 * 
		 * db.getCollection('pDataValues').aggregate([ {$match: {'pData.conceptId':
		 * "identity_first_name"}}, { $project: { 'pData': { $filter:{ input: '$pData',
		 * as: 'item', cond: { $or:[ {$eq:["$$item.conceptId", "identity_first_name"]},
		 * {$eq:["$$item.conceptId", "identity_last_name"]} ] } } } } }, {$unwind:
		 * "$pData"} ])
		 * 
		 */

		/*
		 * Create an aggregate query with filtered projection, in order to get ONLY the
		 * matched elements in Pdata array
		 * 
		 */

		List<Document> conds = conceptIds.stream()
				.map(conceptId -> new Document("$eq", Arrays.asList("$$item.conceptId", conceptId)))
				.collect(Collectors.toList());

		Document filterFields = new Document("input", "$pData");
		filterFields.append("as", "item").append("cond", new Document("$or", conds));

		Document filter = new Document("$filter", filterFields);

		// If conceptIds was empty, return all the PData, by applying filter
		Document project = conds.size() != 0 ? new Document("$project", new Document("pData", filter))
				: new Document("$project", new Document("pData", 1));

		Document match = new Document("$match", new Document("accountId", accountId));
		Document unwind = new Document("$unwind", "$pData");
		AggregateIterable<Document> output = coll.aggregate(Arrays.asList(match, project, unwind));

		for (Document d : output) {
			result.add(DAOUtils.json2Obj(((Document) (d.get("pData"))).toJson(), PDataEntry.class));
		}

		// CALL to Data Security Manager for values decryption
		try {
			return callDecryptPDataList(result, accountId);
		} catch (DataSecurityManagerCallException e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while decrypting PData");
		}

	}

	public PDataEntry storePData(String accountId, PDataEntry entry, PDataWriteMode mode)
			throws PDataRepositoryException {

		try {

			// CALL to Data Security Manager for encryption
			entry = callEncryptPData(entry, accountId);

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);
			Bson updateQuery = and(eq("pData.conceptId", entry.getConceptId()), eq("accountId", accountId));
			// Document updateDocument = new
			// Document("accountId",accountId).append("pData", new
			// Document("$elemMatch", new
			// Document("conceptId",entry.getConceptId())));

			if (existsAccountPData(accountId)) {

				if (existsPData(entry.getConceptId(), accountId)) {
					/*
					 * If WriteMode is APPEND and there is a matching PDataEntry, the values in the
					 * input PDataEntry are pushed into the stored values array
					 */
					if (mode.equals(PDataWriteMode.APPEND)) {
						UpdateResult result = collection.updateOne(updateQuery,
								new Document("$addToSet",
										new Document("pData.$.values", new Document("$each", entry.getValues()))),
								new UpdateOptions().upsert(false));

						// if (result.getModifiedCount() != (long)
						// (value.getValues().size()))
						// throw new PDataValueAlreadyPresentException(
						// " One or more values are already present in PData
						// with conceptId: "
						// + value.getConceptId());

					} else if (mode.equals(PDataWriteMode.OVERWRITE)) {
						collection.updateOne(updateQuery,
								new Document("$set",
										new Document("pData.$",
												Document.parse(DAOUtils.obj2Json(entry, PDataEntry.class)))),
								new UpdateOptions().upsert(false));

					}
				} else {
					collection.updateOne(eq("accountId", accountId),
							new Document("$push",
									new Document("pData", Document.parse(DAOUtils.obj2Json(entry, PDataEntry.class)))),
							new UpdateOptions().upsert(false));

				}

			} else {
				// Create new AccountPData, if the input PDataEntry is the first
				List<PDataEntry> toAdd = new ArrayList<PDataEntry>();
				toAdd.add(entry);
				AccountPData account = new AccountPData(accountId, "", "", toAdd);
				collection.insertOne(Document.parse(DAOUtils.obj2Json(account, AccountPData.class)));

			}

			return entry;

		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while storing the PDataEntry value");
		}

	}

	public List<PDataEntry> storePData(String accountId, List<PDataEntry> entries, PDataWriteMode mode)
			throws PDataRepositoryException {

		try {

			// CALL to Data Security Manager for encryption
			entries = callEncryptPDataList(entries, accountId);

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			for (PDataEntry entry : entries) {
				Bson updateQuery = and(eq("pData.conceptId", entry.getConceptId()), eq("accountId", accountId));
				// Document updateDocument = new
				// Document("accountId",accountId).append("pData", new
				// Document("$elemMatch", new
				// Document("conceptId",entry.getConceptId())));
				if (existsAccountPData(accountId)) {

					if (existsPData(entry.getConceptId(), accountId)) {
						/*
						 * If WriteMode is APPEND and there is a matching PDataEntry, the values in the
						 * input PDataEntry are pushed into the stored values array
						 */
						if (mode.equals(PDataWriteMode.APPEND)) {
							UpdateResult result = collection.updateOne(updateQuery,
									new Document("$addToSet",
											new Document("pData.$.values", new Document("$each", entry.getValues()))),
									new UpdateOptions().upsert(false));

							// if (result.getModifiedCount() != (long)
							// (value.getValues().size()))
							// throw new PDataValueAlreadyPresentException(
							// " One or more values are already present in PData
							// with conceptId: "
							// + value.getConceptId());

						} else if (mode.equals(PDataWriteMode.OVERWRITE)) {
							collection.updateOne(updateQuery,
									new Document("$set",
											new Document("pData.$",
													Document.parse(DAOUtils.obj2Json(entry, PDataEntry.class)))),
									new UpdateOptions().upsert(false));

						}
					} else {
						collection.updateOne(eq("accountId", accountId),
								new Document("$push",
										new Document("pData",
												Document.parse(DAOUtils.obj2Json(entry, PDataEntry.class)))),
								new UpdateOptions().upsert(false));

					}

				} else {
					// Create new AccountPData, if the input PDataEntry is the
					// first
					List<PDataEntry> toAdd = new ArrayList<PDataEntry>();
					toAdd.add(entry);
					AccountPData account = new AccountPData(accountId, "", "", toAdd);
					collection.insertOne(Document.parse(DAOUtils.obj2Json(account, AccountPData.class)));

				}
			}

			return entries;

		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while storing the PDataEntry value");
		}

	}

	// public void storePData(List<PDataEntry> values, PDataWriteMode mode)
	// throws PDataRepositoryException {
	//
	// try {
	// MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
	// MongoDatabase db = dbSingleton.getDB();
	// MongoCollection<Document> collection = db.getCollection(collectionName);
	//
	// for (PDataEntry value : values) {
	// Bson updateQuery = and(eq("pdata.conceptId", value.getConceptId()),
	// eq("accountId", accountId));
	//
	// if (mode.equals(PDataWriteMode.APPEND)) {
	//
	// /*
	// * If WriteMode is APPEND and there is a matching
	// * PDataEntry, the values in the input PDataEntry are pushed
	// * into the stored values array
	// */
	// if (existsPData(value.getConceptId(), value.getAccountId()))
	// collection.updateOne(updateQuery,
	// new Document("$push", new Document("values", new Document("$each",
	// value.getValues()))),
	// new UpdateOptions().upsert(true));
	// else
	// collection.updateOne(updateQuery,
	// new Document("$set", Document.parse(DAOUtils.obj2Json(value,
	// PDataEntry.class))),
	// new UpdateOptions().upsert(true));
	//
	// } else if (mode.equals(PDataWriteMode.OVERWRITE)) {
	//
	// collection.updateOne(updateQuery,
	// new Document("$set", Document.parse(DAOUtils.obj2Json(value,
	// PDataEntry.class))),
	// new UpdateOptions().upsert(true));
	//
	// }
	// }
	//
	// } catch (Exception e) {
	// e.printStackTrace();
	// throw new PDataRepositoryException("There was an error while storing the
	// PDataEntry value");
	// }
	//
	// }
	//

	public void deletePData(String conceptId, String accountId)
			throws PDataNotFoundException, PDataRepositoryException {

		UpdateResult result = null;

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			result = collection.updateOne(eq("accountId", accountId),
					new Document("$pull", new Document("pData", new Document("conceptId", conceptId))),
					new UpdateOptions().upsert(false));

		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while deleting the PDataEntry value");
		}

		if (result != null && result.getModifiedCount() == 0)
			throw new PDataNotFoundException(
					"PData entry not found for conceptID: " + conceptId + " and accountId: " + accountId);

	}

	public void deletePDataValue(String conceptId, String accountId, String value)
			throws PDataNotFoundException, PDataRepositoryException {

		UpdateResult result = null;

		try {

			// CALL to Data Security Manager for encryption
			value = callEncryptValue(value, accountId);

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			result = collection.updateOne(and(eq("accountId", accountId), eq("pData.conceptId", conceptId)),
					new Document("$pull", new Document("pData.$.values", value)), new UpdateOptions().upsert(false));

			if (result != null && result.getModifiedCount() == 0)
				throw new PDataNotFoundException("PData entry not found with value: " + value + " for conceptId "
						+ conceptId + " and accountId: " + accountId);

			// else if (result.getModifiedCount() == 1){
			//
			// Document match = new Document("$match", and(eq("accountId",
			// accountId), eq("pData.conceptId", conceptId)));
			// Document project = new Document("$project", new Document("pData."
			// collection.aggregate(new
			// Document("$group")arg0)count(and(eq("accountId", accountId),
			// eq("pData.conceptId", conceptId)
			//
			//
			//
			// }

		} catch (Exception e) {
			if (e.getClass().equals(PDataNotFoundException.class))
				throw new PDataNotFoundException(e.getMessage());
			else {
				e.printStackTrace();
				throw new PDataRepositoryException("There was an error while deleting the PDataEntry value");
			}

		}

	}

	public void deleteAllPData(String accountId) throws PDataNotFoundException, PDataRepositoryException {

		DeleteResult result = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			result = collection.deleteOne(eq("accountId", accountId));

		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while deleting the PDataEntry values");
		}

		if (result != null && result.getDeletedCount() == 0)
			throw new PDataNotFoundException("PData entries not found for accountId: " + accountId);

	}

	public boolean existsPData(String conceptId, String accountId) throws PDataRepositoryException {

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);
			return collection.count(and(eq("pData.conceptId", conceptId), eq("accountId", accountId))) > 0;
		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while storing the PDataEntry value");
		}
	}

	public boolean existsAccountPData(String accountId) throws PDataRepositoryException {
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);
			return collection.count(eq("accountId", accountId)) > 0;
		} catch (Exception e) {
			e.printStackTrace();
			throw new PDataRepositoryException("There was an error while storing the PDataEntry value");
		}
	}

	private static String callEncryptValue(String value, String accountId) throws DataSecurityManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(props.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/encryptValue");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.TEXT_PLAIN).header("accountId",
					accountId);
			Response response = invocationBuilder.post(Entity.entity(value, MediaType.TEXT_PLAIN));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				return res;

			} else {
				throw new DataSecurityManagerCallException(
						"There was an error while calling the Data Security Manager with Status: " + status
								+ " and Response: " + res);

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new DataSecurityManagerCallException("There was an error while calling the Data Security Manager");
		}

	}

	private static String callDecryptValue(String value, String accountId) throws DataSecurityManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(props.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/decryptValue");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.TEXT_PLAIN).header("accountId",
					accountId);
			Response response = invocationBuilder.post(Entity.entity(value, MediaType.TEXT_PLAIN));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				return res;

			} else {
				throw new DataSecurityManagerCallException(
						"There was an error while calling the Data Security Manager with Status: " + status
								+ " and Response: " + res);

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new DataSecurityManagerCallException("There was an error while calling the Data Security Manager");
		}
	}

	private static PDataEntry callEncryptPData(PDataEntry entry, String accountId)
			throws DataSecurityManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(props.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/encryptPData");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON).header("accountId",
					accountId);
			Response response = invocationBuilder
					.post(Entity.entity(DAOUtils.obj2Json(entry, PDataEntry.class), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				return DAOUtils.json2Obj(res, PDataEntry.class);

			} else {
				throw new DataSecurityManagerCallException(
						"There was an error while calling the Data Security Manager with Status: " + status
								+ " and Response: " + res);
			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new DataSecurityManagerCallException("There was an error while calling the Data Security Manager");
		}

	}

	private static PDataEntry callDecryptPData(PDataEntry entry, String accountId)
			throws DataSecurityManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(props.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/decryptPData");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON).header("accountId",
					accountId);
			Response response = invocationBuilder
					.post(Entity.entity(DAOUtils.obj2Json(entry, PDataEntry.class), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				return DAOUtils.json2Obj(res, PDataEntry.class);

			} else {
				throw new DataSecurityManagerCallException(
						"There was an error while calling the Data Security Manager with Status: " + status
								+ " and Response: " + res);

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new DataSecurityManagerCallException("There was an error while calling the Data Security Manager");
		}

	}

	private static List<PDataEntry> callEncryptPDataList(List<PDataEntry> entries, String accountId)
			throws DataSecurityManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(props.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/encryptPDataList");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON).header("accountId",
					accountId);
			Response response = invocationBuilder
					.post(Entity.entity(DAOUtils.obj2Json(entries, new TypeToken<List<PDataEntry>>() {
					}.getType()), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				return DAOUtils.json2Obj(res, new TypeToken<List<PDataEntry>>() {
				}.getType());

			} else {
				throw new DataSecurityManagerCallException(
						"There was an error while calling the Data Security Manager with Status: " + status
								+ " and Response: " + res);

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new DataSecurityManagerCallException("There was an error while calling the Data Security Manager");
		}

	}

	private static List<PDataEntry> callDecryptPDataList(List<PDataEntry> entries, String accountId)
			throws DataSecurityManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(props.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/decryptPDataList");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON).header("accountId",
					accountId);
			Response response = invocationBuilder
					.post(Entity.entity(DAOUtils.obj2Json(entries, new TypeToken<List<PDataEntry>>() {
					}.getType()), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				return DAOUtils.json2Obj(res, new TypeToken<List<PDataEntry>>() {
				}.getType());

			} else {
				throw new DataSecurityManagerCallException(
						"There was an error while calling the Data Security Manager with Status: " + status
								+ " and Response: " + res);

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new DataSecurityManagerCallException("There was an error while calling the Data Security Manager");
		}

	}

	public void finalizeDAO() {
		MongoDBConnection.onFinalize();
	}
}
