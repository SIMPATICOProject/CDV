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
package it.eng.opsi.cdv.auditlogmanager.dao;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.slf4j.LoggerFactory;
import static com.mongodb.client.model.Sorts.*;
import static com.mongodb.client.model.Filters.*;

import com.google.gson.reflect.TypeToken;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoWriteException;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.FindIterable;
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
import java.util.Iterator;
import java.util.List;

import it.eng.opsi.cdv.auditlogmanager.connection.MongoDBConnection;
import it.eng.opsi.cdv.auditlogmanager.model.AuditLog;
import it.eng.opsi.cdv.auditlogmanager.model.AuditLogException;
import it.eng.opsi.cdv.auditlogmanager.utils.DAOUtils;
import it.eng.opsi.cdv.auditlogmanager.utils.JWTUtils;


public class AuditLogDAO {

	private String collectionName;

	static Logger root = (Logger) LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME);

	static {
		root.setLevel(Level.INFO);
	}

	public AuditLogDAO(String collectionName) {
		this.collectionName = collectionName;
		// Create unique index for username field
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);

	}

	public AuditLog addAuditlog(AuditLog log) throws AuditLogException {

		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			log.setCreated(ZonedDateTime.now(ZoneOffset.UTC));
			Document doc = Document.parse(DAOUtils.obj2Json(log, AuditLog.class));

			try {
				collection.insertOne(doc);
			} catch (MongoWriteException e) {

			}
			return log;

		} catch (Exception e) {
			throw new AuditLogException("There was an error while storing the AuditLog");
		}
	}
	
	
	public void deleteAllAuditLog(String accountId) throws AuditLogException {

		DeleteResult result = null;
		try {
			MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
			MongoDatabase db = dbSingleton.getDB();
			MongoCollection<Document> collection = db.getCollection(collectionName);

			result = collection.deleteMany(eq("username", accountId));

		} catch (Exception e) {
			e.printStackTrace();
			throw new AuditLogException("There was an error while deleting the AuditLog values");
		}

		if (result != null && result.getDeletedCount() == 0)
			throw new AuditLogException("AuditLog entries not found for accountId: " + accountId);

	}

	public List<AuditLog> getLogs() throws AuditLogException {

		Iterable<Document> output = null;
		ArrayList<AuditLog> result = new ArrayList<AuditLog>();
		Document match = null;
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);
		try {
			FindIterable<Document> docs = collection.find();
			if (docs == null) {

			}
			for (Document doc : docs) {
				// access documents e.g. doc.get()
				AuditLog entry = new AuditLog(doc.getString("username"), doc.getString("type"),
						doc.getString("objectJson"));
				entry.setCreated(ZonedDateTime.parse(doc.getString("created")));
				result.add(entry);
			}

		} catch (IllegalArgumentException e) {
		}

		return result;

	}

	public List<AuditLog> getLogsByType(String type) throws AuditLogException {
		Iterable<Document> output = null;
		ArrayList<AuditLog> result = new ArrayList<AuditLog>();
		Document match = null;
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);

		BasicDBObject whereQuery = new BasicDBObject();
		whereQuery.put("type", type);
		try {
			FindIterable<Document> docs = collection.find(whereQuery);
			;
			if (docs == null) {

			}
			for (Document doc : docs) {
				// access documents e.g. doc.get()
				AuditLog entry = new AuditLog(doc.getString("username"), doc.getString("type"),
						doc.getString("objectJson"));
				entry.setCreated(ZonedDateTime.parse(doc.getString("created")));
				result.add(entry);
			}

		} catch (IllegalArgumentException e) {
		}

		return result;
	}

	public List<AuditLog> getLogsByUsernameAndType(String username, String type) throws AuditLogException {
		Iterable<Document> output = null;
		ArrayList<AuditLog> result = new ArrayList<AuditLog>();
		Document match = null;
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);

		BasicDBObject whereQuery = new BasicDBObject();
		whereQuery.put("type", type);
		whereQuery.put("username", username);
		try {
			Bson sort = descending("created");
			FindIterable<Document> docs = collection.find(whereQuery).sort(sort);
			if (docs == null) {

			}
			for (Document doc : docs) {
				// access documents e.g. doc.get()
				AuditLog entry = new AuditLog(doc.getString("username"), doc.getString("type"),
						doc.getString("objectJson"));
				entry.setCreated(ZonedDateTime.parse(doc.getString("created")));
				result.add(entry);
			}

		} catch (IllegalArgumentException e) {
		}

		return result;
	}

	public List<AuditLog> getLogsByUsername(String username) throws AuditLogException {
		Iterable<Document> output = null;
		ArrayList<AuditLog> result = new ArrayList<AuditLog>();
		Document match = null;
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		MongoDatabase db = dbSingleton.getDB();
		MongoCollection<Document> collection = db.getCollection(collectionName);

		BasicDBObject whereQuery = new BasicDBObject();
		whereQuery.put("username", username);
		try {
			Bson sort = descending("created");
			FindIterable<Document> docs = collection.find(whereQuery).sort(sort);

			if (docs == null) {

			}
			for (Document doc : docs) {
				// access documents e.g. doc.get()
				AuditLog entry = new AuditLog(doc.getString("username"), doc.getString("type"),
						doc.getString("objectJson"));
				entry.setCreated(ZonedDateTime.parse(doc.getString("created")));
				result.add(entry);
			}

		} catch (IllegalArgumentException e) {
		}
		return result;
	}

}
