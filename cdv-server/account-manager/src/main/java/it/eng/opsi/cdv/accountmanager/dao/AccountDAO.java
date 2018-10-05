package it.eng.opsi.cdv.accountmanager.dao;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.slf4j.LoggerFactory;

import com.google.gson.reflect.TypeToken;
import com.mongodb.MongoWriteException;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.FindOneAndUpdateOptions;
import com.mongodb.client.model.IndexOptions;
import com.mongodb.client.model.ReturnDocument;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.Logger;

import static com.mongodb.client.model.Filters.*;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import it.eng.opsi.cdv.accountmanager.connection.MongoDBConnection;
import it.eng.opsi.cdv.accountmanager.model.Account;
import it.eng.opsi.cdv.accountmanager.model.AccountAlreadyPresentException;
import it.eng.opsi.cdv.accountmanager.model.AccountNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.AccountUtilsException;
import it.eng.opsi.cdv.accountmanager.model.AccountManagerException;
import it.eng.opsi.cdv.accountmanager.model.Contact;
import it.eng.opsi.cdv.accountmanager.model.ContactNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.Email;
import it.eng.opsi.cdv.accountmanager.model.EmailNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.Particular;
import it.eng.opsi.cdv.accountmanager.model.ParticularNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecord;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusRecord;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.Telephone;
import it.eng.opsi.cdv.accountmanager.model.TelephoneNotFoundException;
import it.eng.opsi.cdv.accountmanager.utils.DAOUtils;
import it.eng.opsi.cdv.accountmanager.utils.JWTUtils;

public class AccountDAO {

	private String collectionName;

	 static Logger root = (Logger) LoggerFactory
	 .getLogger(Logger.ROOT_LOGGER_NAME);
	
	 static {
	 root.setLevel(Level.INFO);
	 }
	

	public AccountDAO(String collectionName) {
		this.collectionName = collectionName;		

	}

	public Account storeAccount(Account account) throws AccountAlreadyPresentException, AccountManagerException {

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);
			
			// Create unique index for username field
		    Document keys = new Document("username", 1);
		    collection.createIndex(keys, new IndexOptions().unique(true));

			account.setCreated(ZonedDateTime.now(ZoneOffset.UTC));
			Document doc = Document.parse(DAOUtils.obj2Json(account, Account.class));

			try {
				collection.insertOne(doc);
			} catch (MongoWriteException e) {
				if (e.getMessage().contains("E11000 duplicate key error collection"))
					throw new AccountAlreadyPresentException(
							"An account with username " + account.getUsername() + " is already present");
				else
					throw e;
			}

			// account.setId(doc.getObjectId("_id").toString());
			account.setId(null);
			account.setPassword(null);
			return account;

		} catch (Exception e) {
			if (e.getClass() == AccountAlreadyPresentException.class)
				throw (AccountAlreadyPresentException) e;
			else {
				throw new AccountManagerException("There was an error while storing the Account");
			}
		}
	}

	public Account updateAccount(Account account) throws AccountNotFoundException, AccountManagerException {

		MongoCollection<Document> collection = null;
		Document result = null;
		Document doc = null;

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			account.setModified(ZonedDateTime.now(ZoneOffset.UTC));

			doc = Document.parse(DAOUtils.obj2Json(account, Account.class));
			ObjectId docId = new ObjectId(doc.remove("_id").toString());

			// try with _id as accountId
			result = collection.findOneAndUpdate(eq("_id", docId), new Document("$set", doc),
					new FindOneAndUpdateOptions().returnDocument(ReturnDocument.AFTER).upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.findOneAndUpdate(eq("username", account.getId()), new Document("$set", doc),
						new FindOneAndUpdateOptions().returnDocument(ReturnDocument.AFTER).upsert(false));

			else
				throw new AccountManagerException("There was an error while updating the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while updating the Account");
		}

		if (result == null)
			throw new AccountNotFoundException("The account with id: " + account.getId() + " was not found");
		else {

			try {
				result.append("_id", result.remove("_id").toString());
				Account updated = DAOUtils.json2Obj(result.toJson(), Account.class);

				updated.setPassword(null);

				return updated;
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException(e.getMessage());
			}

		}
	}

	public void deleteAccount(String accountId) throws AccountNotFoundException, AccountManagerException {

		DeleteResult result = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);
			result = collection.deleteOne(new Document("_id", new ObjectId(accountId)));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.deleteOne(new Document("username", accountId));
			else
				throw new AccountManagerException("There was an error while deleting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while deleting the Account");
		}

		if (result.getDeletedCount() == 0)
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");

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

	// AAC SIMPATICO INTEGRATION
	public Account getAccountByAacUserId(String aacUserId) throws AccountManagerException, AccountNotFoundException {

		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);
		MongoCursor<Document> cursor = null;
		try {

			// try with _id as accountId
			cursor = collection.find(eq("aacUserId", aacUserId)).iterator();

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				cursor = collection.find(eq("aacUserId", aacUserId)).iterator();
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
			throw new AccountNotFoundException("The account with aacUserId: " + aacUserId + " was not found");
	}

	public Telephone addTelephone(Telephone phone, String accountId)
			throws AccountNotFoundException, AccountManagerException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			docToAdd = Document.parse(DAOUtils.obj2Json(phone, Telephone.class));
			docToAdd.put("_id", new ObjectId().toString());
			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$addToSet", new Document("telephones", docToAdd)).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$addToSet", new Document("telephones", docToAdd)).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while adding the Telephone");
		}

		if (result.getModifiedCount() == 0)
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
		else {
			phone.set_id(docToAdd.getString("_id"));
			// Update the account modified date
			// Account a = new Account();
			// a.setId(accountId);
			// updateAccount(a);
		}
		return phone;
	}

	public void deleteTelephone(String telephoneId, String accountId)
			throws AccountManagerException, TelephoneNotFoundException {

		UpdateResult result = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$pull", new Document("telephones", new Document("_id", telephoneId))).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$pull", new Document("telephones", new Document("_id", telephoneId))).append(
								"$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while deleting the Telephone");
		}

		if (result.getModifiedCount() == 0)
			throw new TelephoneNotFoundException(
					"The Telephone with id: " + telephoneId + " for the Account Id: " + accountId + " was not found");

	}

	public Telephone updateTelephone(Telephone phone, String accountId)
			throws AccountManagerException, TelephoneNotFoundException {

		UpdateResult result = null;
		Document doc = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			doc = Document.parse(DAOUtils.obj2Json(phone, Telephone.class));

			ObjectId accountObjId = new ObjectId(accountId);

			result = collection.updateOne(and(eq("_id", accountObjId), eq("telephones._id", doc.get("_id"))),
					new Document("$set",
							new Document("telephones.$", doc).append("modified",
									DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(and(eq("username", accountId), eq("telephones._id", doc.get("_id"))),

						new Document("$set",
								new Document("telephones.$", doc).append("modified",
										DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while updating the Telephone");
		}

		if (result.getMatchedCount() == 0 && result.getModifiedCount() == 0)
			throw new TelephoneNotFoundException("The Telephone with id: " + phone.get_id() + " for the Account Id: "
					+ accountId + " was not found");
		else {
			return phone;
		}

	}

	public Telephone getTelephone(String accountId, String telephoneId)
			throws TelephoneNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$telephones");
			filterFields.append("as", "item").append("cond",
					new Document("$eq", Arrays.asList("$$item._id", telephoneId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("telephones", filter));
			Document unwind = new Document("$unwind", "$telephones");

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
			throw new AccountManagerException("There was an error while getting the Telephone");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("telephones"))).toJson(), Telephone.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Telephone");
			}

		} else
			throw new TelephoneNotFoundException(
					"The Telephone with id: " + telephoneId + " for the Account Id: " + accountId + " was not found");

	}

	public List<Telephone> getTelephones(String accountId) throws TelephoneNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		ArrayList<Telephone> result = new ArrayList<Telephone>();
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			Document unwind = new Document("$unwind", "$telephones");

			try {
				match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				output = collection.aggregate(Arrays.asList(match, unwind));

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
			throw new AccountManagerException("There was an error while getting telephones");
		}

		for (Document d : output) {
			try {
				result.add(DAOUtils.json2Obj(((Document) (d.get("telephones"))).toJson(), Telephone.class));
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Telephone");
			}
		}

		return result;

	}

	public Contact addContact(Contact contact, String accountId)
			throws AccountNotFoundException, AccountManagerException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			docToAdd = Document.parse(DAOUtils.obj2Json(contact, Contact.class));
			docToAdd.put("_id", new ObjectId().toString());
			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$addToSet", new Document("contacts", docToAdd)).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$addToSet", new Document("contacts", docToAdd)).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while adding the Contact");
		}

		if (result.getModifiedCount() == 0)
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
		else
			contact.set_id(docToAdd.getString("_id"));

		return contact;
	}

	public Contact getContact(String accountId, String contactId)
			throws AccountManagerException, ContactNotFoundException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$contacts");
			filterFields.append("as", "item").append("cond",
					new Document("$eq", Arrays.asList("$$item._id", contactId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("contacts", filter));
			Document unwind = new Document("$unwind", "$contacts");

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
			throw new AccountManagerException("There was an error while getting the Contact");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("contacts"))).toJson(), Contact.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Contact");
			}

		} else
			throw new ContactNotFoundException(
					"The Contact with id: " + contactId + " for the Account Id: " + accountId + " was not found");

	}

	public List<Contact> getContacts(String accountId) throws AccountManagerException, ContactNotFoundException {

		AggregateIterable<Document> output = null;
		ArrayList<Contact> result = new ArrayList<Contact>();
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			Document unwind = new Document("$unwind", "$contacts");

			try {
				match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				output = collection.aggregate(Arrays.asList(match, unwind));

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
			throw new AccountManagerException("There was an error while getting contacts");
		}

		for (Document d : output) {
			try {
				result.add(DAOUtils.json2Obj(((Document) (d.get("contacts"))).toJson(), Contact.class));
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the contacts");
			}
		}

		return result;
	}

	public void deleteContact(String contactId, String accountId)
			throws AccountManagerException, ContactNotFoundException {

		UpdateResult result = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$pull", new Document("contacts", new Document("_id", contactId))).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$pull", new Document("contacts", new Document("_id", contactId))).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while deleting the Contact");
		}

		if (result.getModifiedCount() == 0)
			throw new ContactNotFoundException(
					"The Contact with id: " + contactId + " for the Account Id: " + accountId + " was not found");

	}

	public Contact updateContact(Contact contact, String accountId)
			throws AccountManagerException, ContactNotFoundException {

		UpdateResult result = null;
		Document doc = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			doc = Document.parse(DAOUtils.obj2Json(contact, Contact.class));

			ObjectId accountObjId = new ObjectId(accountId);

			result = collection.updateOne(and(eq("_id", accountObjId), eq("contacts._id", doc.get("_id"))),
					new Document("$set",
							new Document("contacts.$", doc).append("modified",
									DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(and(eq("username", accountId), eq("contacts._id", doc.get("_id"))),
						new Document("$set",
								new Document("contacts.$", doc).append("modified",
										DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while updating the Contact");
		}

		if (result.getMatchedCount() == 0 && result.getModifiedCount() == 0)
			throw new ContactNotFoundException("The Contact with id: " + contact.get_id() + " for the Account Id: "
					+ accountId + " was not found");
		else {
			return contact;
		}

	}

	public Email addEmail(Email email, String accountId) throws AccountNotFoundException, AccountManagerException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			docToAdd = Document.parse(DAOUtils.obj2Json(email, Email.class));
			docToAdd.put("_id", new ObjectId().toString());
			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$addToSet", new Document("emails", docToAdd)).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$addToSet", new Document("emails", docToAdd)).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while adding the Email");
		}

		if (result.getModifiedCount() == 0)
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
		else
			email.set_id(docToAdd.getString("_id"));

		return email;

	}

	public Email getEmail(String accountId, String emailId) throws AccountManagerException, EmailNotFoundException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$emails");
			filterFields.append("as", "item").append("cond", new Document("$eq", Arrays.asList("$$item._id", emailId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("emails", filter));
			Document unwind = new Document("$unwind", "$emails");

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
			throw new AccountManagerException("There was an error while getting the Email");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("emails"))).toJson(), Email.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Email");
			}

		} else
			throw new EmailNotFoundException(
					"The Email with id: " + emailId + " for the Account Id: " + accountId + " was not found");

	}

	public List<Email> getEmails(String accountId) throws AccountManagerException, EmailNotFoundException {

		AggregateIterable<Document> output = null;
		ArrayList<Email> result = new ArrayList<Email>();
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			Document unwind = new Document("$unwind", "$emails");

			try {
				match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				output = collection.aggregate(Arrays.asList(match, unwind));

			} catch (IllegalArgumentException e) {

				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match", new Document("username", accountId));
					output = collection.aggregate(Arrays.asList(match, unwind));

				} else
					throw new AccountManagerException("There was an error while getting the Email");

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting emails");
		}

		for (Document d : output) {
			try {
				result.add(DAOUtils.json2Obj(((Document) (d.get("emails"))).toJson(), Email.class));
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Telephone");
			}
		}

		return result;

	}

	public void deleteEmail(String emailId, String accountId) throws AccountManagerException, EmailNotFoundException {

		UpdateResult result = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$pull", new Document("emails", new Document("_id", emailId))).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$pull", new Document("emails", new Document("_id", emailId))).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while deleting the Email");
		}

		if (result.getModifiedCount() == 0)
			throw new EmailNotFoundException(
					"The Email with id: " + emailId + " for the Account Id: " + accountId + " was not found");

	}

	public Email updateEmail(Email email, String accountId) throws AccountManagerException, EmailNotFoundException {

		UpdateResult result = null;
		Document doc = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			doc = Document.parse(DAOUtils.obj2Json(email, Email.class));

			ObjectId accountObjId = new ObjectId(accountId);

			result = collection.updateOne(and(eq("_id", accountObjId), eq("emails._id", doc.get("_id"))),
					new Document("$set",
							new Document("emails.$", doc).append("modified",
									DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(and(eq("username", accountId), eq("emails._id", doc.get("_id"))),
						new Document("$set",
								new Document("emails.$", doc).append("modified",
										DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while updating the Email");
		}

		if (result.getMatchedCount() == 0 && result.getModifiedCount() == 0)
			throw new EmailNotFoundException(
					"The Email with id: " + email.get_id() + " for the Account Id: " + accountId + " was not found");
		else {
			return email;
		}

	}

	public Particular addParticular(Particular particular, String accountId)
			throws AccountNotFoundException, AccountManagerException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			docToAdd = Document.parse(DAOUtils.obj2Json(particular, Particular.class));
			docToAdd.put("_id", new ObjectId().toString());
			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$set", new Document("particular", docToAdd).append(
							"modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$set", new Document("particular", docToAdd).append(
								"modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while adding the Particular");
		}

		if (result.getModifiedCount() == 0)
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
		else
			particular.set_id(docToAdd.getString("_id"));

		return particular;
	}

	public Particular getParticular(String accountId) throws AccountManagerException, ParticularNotFoundException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			// Document filterFields = new Document("input", "$particular");
			// filterFields.append("as", "item").append("cond",
			// new Document("$eq", Arrays.asList("$$item._id", particularId)));

			// Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("particular", "$particular"));
			// Document unwind = new Document("$unwind", "$particular");

			try {

				match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				output = collection.aggregate(Arrays.asList(match, project));
			} catch (IllegalArgumentException e) {

				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {
					match = new Document("$match", new Document("username", accountId));
					output = collection.aggregate(Arrays.asList(match, project));
				} else
					throw new AccountManagerException("There was an error while getting the Account");

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Particular");
		}

		Document d = null;
		if (output != null && (d = output.first()) != null) {

			try {
				return DAOUtils.json2Obj(((Document) (d.get("particular"))).toJson(), Particular.class);

			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Particular");
			}

		} else
			throw new ParticularNotFoundException("The Particular for the Account Id: " + accountId + " was not found");

	}

	// public List<Particular> getParticulars(String accountId)
	// throws AccountManagerException, ParticularNotFoundException {
	//
	// AggregateIterable<Document> output = null;
	// ArrayList<Particular> result = new ArrayList<Particular>();
	// Document match = null;
	// try {
	//
	// MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
	// MongoDatabase db = dbSingleton.getDB();
	// MongoCollection<Document> collection = db.getCollection(collectionName);
	//
	// Document unwind = new Document("$unwind", "$particulars");
	//
	// try {
	// match = new Document("$match", new Document("_id", new
	// ObjectId(accountId)));
	// output = collection.aggregate(Arrays.asList(match, unwind));
	//
	// } catch (IllegalArgumentException e) {
	//
	// // try with username as accountId
	// if (e.getMessage().contains("invalid hexadecimal representation of an
	// ObjectId")) {
	//
	// match = new Document("$match", new Document("username", accountId));
	// output = collection.aggregate(Arrays.asList(match, unwind));
	//
	// } else
	// throw new AccountManagerException("There was an error while getting
	// particulars");
	//
	// }
	//
	// } catch (Exception e) {
	// e.printStackTrace();
	// throw new AccountManagerException("There was an error while getting
	// particulars");
	// }
	//
	// for (Document d : output) {
	// try {
	// result.add(DAOUtils.json2Obj(((Document)
	// (d.get("particulars"))).toJson(), Particular.class));
	// } catch (AccountUtilsException e) {
	// e.printStackTrace();
	// throw new AccountManagerException("There was an error while getting
	// particulars");
	// }
	// }
	//
	// return result;
	// }

	public void deleteParticular(String accountId) throws AccountManagerException, ParticularNotFoundException {

		UpdateResult result = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$unset", new Document("particular", "")).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$unset", new Document("particular", "")).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));
			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while deleting the Particular");
		}

		if (result.getModifiedCount() == 0)
			throw new AccountManagerException("There was an error while deleting the Particular");

	}

	// Viene utilizzato addParticular, essendocene solo uno
	// public Particular updateParticular(Particular particular, String
	// accountId)
	// throws AccountManagerException, ParticularNotFoundException {
	//
	// UpdateResult result = null;
	// Document doc = null;
	// MongoCollection<Document> collection = null;
	// try {
	// MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
	// MongoDatabase db = dbSingleton.getDB();
	// collection = db.getCollection(collectionName);
	//
	// doc = Document.parse(DAOUtils.obj2Json(particular, Particular.class));
	//
	// ObjectId accountObjId = new ObjectId(accountId);
	//
	// result = collection.updateOne(eq("_id", accountObjId),
	// new Document("$set",
	// new Document("particular", doc).append("modified",
	// DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
	// new UpdateOptions().upsert(false));
	//
	// } catch (IllegalArgumentException e) {
	//
	// // try with username as accountId
	// if (e.getMessage().contains("invalid hexadecimal representation of an
	// ObjectId"))
	// result = collection.updateOne(eq("username", accountId),
	// new Document("$set",
	// new Document("particular", doc).append("modified",
	// DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
	// new UpdateOptions().upsert(false));
	// else
	// throw new AccountManagerException("There was an error while getting the
	// Account");
	//
	// } catch (Exception e) {
	// e.printStackTrace();
	// throw new AccountManagerException("There was an error while updating the
	// Particular");
	// }
	//
	// if (result.getMatchedCount() == 0 && result.getModifiedCount() == 0)
	// throw new AccountManagerException("There was an error while updating the
	// Particular");
	// else {
	// return particular;
	// }
	// }

	public ServiceLinkRecord addServiceLinkRecord(String accountId, ServiceLinkRecord record)
			throws AccountManagerException, AccountNotFoundException {

		UpdateResult result = null;
		Document docToAdd = null;
		MongoCollection<Document> collection = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Account a = getAccount(accountId);
			record.setUsername(a.getUsername());
			record.setAccountId(accountId);
			record.setSlrToken(JWTUtils.createJWT(record));
			docToAdd = Document.parse(DAOUtils.obj2Json(record, ServiceLinkRecord.class));
			docToAdd.put("_id", new ObjectId().toString());

			try {
				ObjectId accountDocId = new ObjectId(accountId);

				result = collection.updateOne(eq("_id", accountDocId),
						new Document("$addToSet", new Document("serviceLinkRecords", docToAdd)).append("$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			} catch (IllegalArgumentException e) {
				// try with username

				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					result = collection.updateOne(eq("username", a.getUsername()),
							new Document("$addToSet", new Document("serviceLinkRecords", docToAdd)).append("$set",
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

	public ServiceLinkStatusRecord addServiceLinkStatusRecord(String accountId, String slrId,
			ServiceLinkStatusRecord statusRecord)
			throws AccountManagerException, ServiceLinkRecordNotFoundException, AccountNotFoundException {

		UpdateResult result = null;
		Document docToAdd = null;
		Bson updateQuery = null;
		MongoCollection<Document> collection = null;

		if (existsAccount(accountId)) {

			try {
				MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
				MongoDatabase db = dbSingleton.getDB();
				collection = db.getCollection(collectionName);

				docToAdd = Document.parse(DAOUtils.obj2Json(statusRecord, ServiceLinkStatusRecord.class));
				docToAdd.put("_id", new ObjectId().toString());

				updateQuery = and(eq("serviceLinkRecords._id", slrId), eq("_id", new ObjectId(accountId)));
				result = collection.updateOne(updateQuery,
						new Document("$addToSet",
								new Document("serviceLinkRecords.$.serviceLinkStatusRecords", docToAdd)).append(
										"$set",
										new Document("modified",
												DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			} catch (IllegalArgumentException e) {

				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					updateQuery = and(eq("serviceLinkRecords._id", slrId), eq("username", accountId));
					result = collection.updateOne(updateQuery,
							new Document("$addToSet",
									new Document("serviceLinkRecords.$.serviceLinkStatusRecords", docToAdd)).append(
											"$set",
											new Document("modified",
													DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
							new UpdateOptions().upsert(false));
				} else
					throw new AccountManagerException("There was an error while getting the Account");

			} catch (Exception e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while adding the ServiceLinkStatusRecord");
			}

		} else {
			throw new AccountNotFoundException("The account with id: " + accountId + " was not found");
		}

		if (result.getModifiedCount() == 0)
			throw new ServiceLinkRecordNotFoundException(
					"The ServiceLinkRecord with id: " + slrId + " for the Account Id: " + accountId + " was not found");
		else
			statusRecord.set_id(docToAdd.getString("_id"));

		return statusRecord;

	}

	public ServiceLinkRecord getServiceLinkRecord(String accountId, String slrId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		Document match = null;
		MongoCollection<Document> collection = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$serviceLinkRecords");
			filterFields.append("as", "item").append("cond", new Document("$eq", Arrays.asList("$$item._id", slrId)));

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

		} else
			throw new ServiceLinkRecordNotFoundException("The Service Link Record with id: " + slrId
					+ " for the Account Id: " + accountId + " was not found");

	}

	public boolean existsServiceLinkRecord(String accountId, String serviceId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		MongoCollection<Document> collection = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			return collection
					.count(and(eq("_id", new ObjectId(accountId)), eq("serviceLinkRecords.serviceId", serviceId))) == 1;

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				return collection
						.count(and(eq("username", accountId), eq("serviceLinkRecords.serviceId", serviceId))) == 1;

			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Record");
		}

	}

	public ServiceLinkRecord getServiceLinkRecordBySurrogateId(String surrogateId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document project = new Document("$project", new Document("serviceLinkRecords", "$serviceLinkRecords"));

			Document unwind = new Document("$unwind", "$serviceLinkRecords");

			try {

				match = new Document("$match", new Document("serviceLinkRecords.surrogateId", surrogateId));
				output = collection.aggregate(Arrays.asList(match, project, unwind));

			} catch (IllegalArgumentException e) {
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
			throw new ServiceLinkRecordNotFoundException(
					"The Service Link Record for the User (surrogate) Id: " + surrogateId + " was not found");
		}
	}

	public ServiceLinkRecord getServiceLinkRecordBySurrogateIdAndServiceId(String surrogateId, String serviceId)
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

				match = new Document("$match", new Document("serviceLinkRecords.surrogateId", surrogateId));
				output = collection.aggregate(Arrays.asList(match, project, unwind));

			} catch (IllegalArgumentException e) {
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
					+ " for the User (surrogate) Id: " + surrogateId + " was not found");
		}
	}

	public ServiceLinkRecord getServiceLinkRecordByUsernameAndSurrogateId(String username, String surrogateId)
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
					new Document("$eq", Arrays.asList("$$item.surrogateId", surrogateId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("serviceLinkRecords", filter));

			Document unwind = new Document("$unwind", "$serviceLinkRecords");

			try {

				match = new Document("$match", new Document("username", username));
				output = collection.aggregate(Arrays.asList(match, project, unwind));

			} catch (IllegalArgumentException e) {
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
			throw new ServiceLinkRecordNotFoundException("The Service Link Record with username (Account): " + username
					+ " for the User (surrogate) Id: " + surrogateId + " was not found");
		}
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

	public ServiceLinkRecord getServiceLinkRecordById(String slrId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			Document filterFields = new Document("input", "$serviceLinkRecords");
			filterFields.append("as", "item").append("cond", new Document("$eq", Arrays.asList("$$item._id", slrId)));

			Document filter = new Document("$filter", filterFields);
			Document project = new Document("$project", new Document("serviceLinkRecords", filter));

			Document match = new Document("$match", new Document("serviceLinkRecords._id", slrId));
			Document unwind = new Document("$unwind", "$serviceLinkRecords");

			output = collection.aggregate(Arrays.asList(match, project, unwind));

		} catch (IllegalArgumentException e) {
			throw new ServiceLinkRecordNotFoundException(
					"The Service Link Record with id: " + slrId + " was not found");

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

		} else
			throw new ServiceLinkRecordNotFoundException(
					"The Service Link Record with id: " + slrId + " was not found");

	}

	public List<ServiceLinkRecord> getServiceLinkRecords(String accountId)
			throws ServiceLinkRecordNotFoundException, AccountManagerException {

		AggregateIterable<Document> output = null;
		ArrayList<ServiceLinkRecord> result = new ArrayList<ServiceLinkRecord>();
		MongoCollection<Document> collection = null;
		Document match = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			Document unwind = new Document("$unwind", "$serviceLinkRecords");

			try {

				match = new Document("$match", new Document("_id", new ObjectId(accountId)));
				output = collection.aggregate(Arrays.asList(match, unwind));

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
			throw new AccountManagerException("There was an error while getting Service Link Records");
		}

		for (Document d : output) {
			try {
				result.add(DAOUtils.json2Obj(((Document) (d.get("serviceLinkRecords"))).toJson(),
						ServiceLinkRecord.class));
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Service Link Record");
			}
		}

		if (result.size() != 0)
			return result;
		else
			throw new ServiceLinkRecordNotFoundException(
					"No Service Link Records were found for the Account Id: " + accountId);

	}

	public void deleteServiceLinkRecordById(String accountId, String slrId)
			throws AccountManagerException, ServiceLinkRecordNotFoundException {
		;

		MongoCollection<Document> collection = null;
		UpdateResult result = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);
			ObjectId accountDocId = new ObjectId(accountId);

			result = collection.updateOne(eq("_id", accountDocId),
					new Document("$pull", new Document("serviceLinkRecords", new Document("_id", slrId))).append("$set",
							new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (IllegalArgumentException e) {

			// try with username as accountId
			if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId"))
				result = collection.updateOne(eq("username", accountId),
						new Document("$pull", new Document("serviceLinkRecords", new Document("_id", slrId))).append(
								"$set",
								new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
						new UpdateOptions().upsert(false));

			else
				throw new AccountManagerException("There was an error while getting the Account");

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Record");
		}

		if (result.getModifiedCount() == 0)
			throw new ServiceLinkRecordNotFoundException("The Service Link Record with id: " + slrId
					+ " for the Account Id: " + accountId + " was not found");

	}

	public void deleteServiceLinkRecordBySurrogateIdAndServiceId(String surrogateId, String serviceId)
			throws AccountManagerException, ServiceLinkRecordNotFoundException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		UpdateResult result = null;

		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			result = collection.updateOne(eq("serviceLinkRecords.serviceId", serviceId),
					new Document("$pull", new Document("serviceLinkRecords", new Document("surrogateId", surrogateId)))
							.append("$set",
									new Document("modified", DAOUtils.formatDate(ZonedDateTime.now(ZoneOffset.UTC)))),
					new UpdateOptions().upsert(false));

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while deleting the Service Link Record");
		}

		if (result.getModifiedCount() == 0)
			throw new ServiceLinkRecordNotFoundException("The Service Link Record with Service Id: " + serviceId
					+ " and Surrogate Id: " + surrogateId + " was not found");

	}

	public ServiceLinkStatusRecord getServiceLinkStatusRecord(String accountId, String slrId, String ssrId)
			throws AccountManagerException, ServiceLinkStatusRecordNotFoundException {

		AggregateIterable<Document> output = null;
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			// Document filterFields = new Document("input",
			// "$serviceLinkRecords.serviceLinkStatusRecords");
			// filterFields.append("as", "item").append("cond", new
			// Document("$eq", Arrays.asList("$$item._id", ssrId)));
			//
			// Document filter = new Document("$filter", filterFields);
			// Document project = new Document("$project", new
			// Document("serviceLinkStatusRecords", filter));
			Document unwindSlr = new Document("$unwind", "$serviceLinkRecords");
			Document unwindSsr = new Document("$unwind", "$serviceLinkRecords.serviceLinkStatusRecords");

			try {

				match = new Document("$match",
						new Document("$and",
								Arrays.asList(new Document("_id", new ObjectId(accountId)),
										new Document("serviceLinkRecords._id", slrId), new Document(
												"serviceLinkRecords.serviceLinkStatusRecords._id", ssrId))));

				output = collection.aggregate(Arrays.asList(match, unwindSlr, unwindSsr));

			} catch (IllegalArgumentException e) {

				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match",
							new Document("$and",
									Arrays.asList(new Document("username", accountId),
											new Document("serviceLinkRecords._id", slrId), new Document(
													"serviceLinkRecords.serviceLinkStatusRecords._id", ssrId))));
					output = collection.aggregate(Arrays.asList(match, unwindSlr, unwindSsr));

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
				return DAOUtils.json2Obj(
						((Document) (((Document) d.get("serviceLinkRecords")).get("serviceLinkStatusRecords")))
								.toJson(),
						ServiceLinkStatusRecord.class);
			} catch (AccountUtilsException e) {
				e.printStackTrace();
				throw new AccountManagerException("There was an error while getting the Service Link Record");
			}

		} else
			throw new ServiceLinkStatusRecordNotFoundException(
					"The Service Link Status Record with Id: " + ssrId + " for the Service Link Record with Id: "
							+ slrId + " Account Id: " + accountId + " was not found");

	}

	public List<ServiceLinkStatusRecord> getServiceLinkStatusRecords(String accountId, String slrId)
			throws AccountUtilsException, AccountManagerException, ServiceLinkStatusRecordNotFoundException {

		AggregateIterable<Document> output = null;
		ArrayList<ServiceLinkStatusRecord> result = new ArrayList<ServiceLinkStatusRecord>();
		MongoCollection<Document> collection = null;
		Document match = null;
		try {

			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			collection = db.getCollection(collectionName);

			// Document filterFields = new Document("input",
			// "$serviceLinkRecords");
			// filterFields.append("as", "item").append("cond", new
			// Document("$eq", Arrays.asList("$$item._id", slrId)));
			//
			// Document filter = new Document("$filter", filterFields);
			// Document project = new Document("$project", new
			// Document("serviceLinkRecord", filter));
			Document unwindSlr = new Document("$unwind", "$serviceLinkRecords");
			Document unwindSsr = new Document("$unwind", "$serviceLinkRecords.serviceLinkStatusRecords");

			try {

				match = new Document("$match",
						new Document("$and", Arrays.asList(new Document("_id", new ObjectId(accountId)),
								new Document("serviceLinkRecords._id", slrId))));
				output = collection.aggregate(Arrays.asList(match, unwindSlr, unwindSsr));

			} catch (IllegalArgumentException e) {
				// try with username as accountId
				if (e.getMessage().contains("invalid hexadecimal representation of an ObjectId")) {

					match = new Document("$match",
							new Document("$and", Arrays.asList(new Document("username", accountId),
									new Document("serviceLinkRecords._id", slrId))));
					output = collection.aggregate(Arrays.asList(match, unwindSlr, unwindSsr));

				} else
					throw new AccountManagerException("There was an error while getting the Account");

			}

		} catch (Exception e) {
			e.printStackTrace();
			throw new AccountManagerException("There was an error while getting the Service Link Status Record");
		}

		for (Document d : output) {
			result.add(DAOUtils.json2Obj(
					((Document) ((Document) (d.get("serviceLinkRecords"))).get("serviceLinkStatusRecords")).toJson(),
					new TypeToken<ServiceLinkStatusRecord>() {
					}.getType()));
		}

		if (result.size() != 0)
			return result;
		else
			throw new ServiceLinkStatusRecordNotFoundException(
					"No Service Link Status Records were found for the Account Id: " + accountId
							+ " and Service Link Record with Id: " + slrId);
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

}
