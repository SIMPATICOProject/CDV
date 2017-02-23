package it.eng.opsi.cdv.pdatarepository.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

import static com.mongodb.client.model.Filters.*;

import it.eng.opsi.cdv.pdatarepository.connection.MongoDBConnection;
import it.eng.opsi.cdv.pdatarepository.model.AccountPData;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatarepository.model.PDataRepositoryException;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.model.PDataValueAlreadyPresentException;
import it.eng.opsi.cdv.pdatarepository.model.PDataWriteMode;
import it.eng.opsi.cdv.pdatarepository.utils.DAOUtils;

public class PDataDAO {

	private String collectionName;

	public PDataDAO(String collectionName) {
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

		if (result.size() != 0)
			return result;
		else
			throw new PDataNotFoundException("No PData were found for the Account Id: " + accountId);

	}

	public PDataEntry getPData(String conceptId, String accountId)
			throws PDataRepositoryException, PDataNotFoundException, PDataUtilsException {
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

		Document d = output.first();
		if (d != null)
			return DAOUtils.json2Obj(((Document) (d.get("pData"))).toJson(), PDataEntry.class);
		else
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
		 * db.getCollection('pDataValues').aggregate([ {$match:
		 * {'pData.conceptId': "identity_first_name"}}, { $project: { 'pData': {
		 * $filter:{ input: '$pData', as: 'item', cond: { $or:[
		 * {$eq:["$$item.conceptId", "identity_first_name"]},
		 * {$eq:["$$item.conceptId", "identity_last_name"]} ] } } } } },
		 * {$unwind: "$pData"} ])
		 * 
		 */

		/*
		 * Create an aggregate query with filtered projection, in order to get
		 * ONLY the matched elements in Pdata array
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

		return result;
	}

	public PDataEntry storePData(String accountId, PDataEntry entry, PDataWriteMode mode)
			throws PDataRepositoryException {

		try {
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
					 * If WriteMode is APPEND and there is a matching
					 * PDataEntry, the values in the input PDataEntry are pushed
					 * into the stored values array
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
						 * If WriteMode is APPEND and there is a matching
						 * PDataEntry, the values in the input PDataEntry are
						 * pushed into the stored values array
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

	/*
	 * TEST
	 */
	// public static void main(String[] args) {
	//
	// PDataEntry value = new PDataEntry();
	// value.setConceptId("1");
	// value.setName("address");
	// value.setTimestamp(ZonedDateTime.ofInstant(Instant.now(),
	// ZoneId.of("Z")));
	// ArrayList<String> values = new ArrayList<String>();
	// values.add("via Libertà");
	// value.setValues(values);
	// value.setAccountId("user");
	//
	// PDataEntry value1 = new PDataEntry();
	// value1.setConceptId("1");
	// value1.setName("address");
	// value1.setTimestamp(ZonedDateTime.ofInstant(Instant.now(),
	// ZoneId.of("Z")));
	// ArrayList<String> values1 = new ArrayList<String>();
	// values1.add("via Libertà");
	// value1.setValues(values1);
	// value1.setAccountId("user");
	//
	//
	//
	// PDataDAO dao = new PDataDAO("pDataValues");
	// try {
	// dao.storePData(value, PDataWriteMode.APPEND);
	//
	// dao.storePData(value1, PDataWriteMode.APPEND);
	//
	// System.out.println(dao.getPData(Arrays.asList("1", "2"),
	// "user").toString());
	// dao.deleteAllPData("user");
	// } catch (PDataNotFoundException e) {
	// e.printStackTrace();
	// } catch (PDataRepositoryException e) {
	// e.printStackTrace();
	// }
	// }

	public void finalizeDAO() {
		MongoDBConnection.onFinalize();
	}
}
