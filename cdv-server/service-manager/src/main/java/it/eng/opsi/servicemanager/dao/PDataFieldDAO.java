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
package it.eng.opsi.servicemanager.dao;

import it.eng.opsi.servicemanager.connection.MongoDBConnection;
import it.eng.opsi.servicemanager.data.PDataCategory;
import it.eng.opsi.servicemanager.data.PDataField;
import it.eng.opsi.servicemanager.model.ServiceReport;
import it.eng.opsi.servicemanager.utils.DAOUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

public class PDataFieldDAO {
	public List<PDataField> findAll() {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("pDataFields");
		DBObject removeIdProjection = new BasicDBObject("_id", 0);
		DBCursor cursor = coll.find(null, removeIdProjection).sort(new BasicDBObject("id", 1));
		List<PDataField> list = new ArrayList<PDataField>();
		while (cursor.hasNext()) {
			DBObject o = cursor.next();
			PDataField pdatafield = new PDataField();
			pdatafield.setId((String) o.get("id"));
			pdatafield.setDescription((String) o.get("description"));
			DBObject metadata = (DBObject) o.get("metadata");
			pdatafield.setName((String) ((BasicDBList) metadata.get("name")).get(0));
			pdatafield.setCategory((String) o.get("pcategory"));
			pdatafield.setSemanticType((String) ((BasicDBList) metadata.get("semantic_type")).get(0));
			list.add(pdatafield);
		}
		return list;
	}

	public List<PDataField> findByName(String regex) {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("pDataFields");
		BasicDBObject regexQuery = new BasicDBObject();
		regexQuery.put("id", new BasicDBObject("$regex", regex).append("$options", "i"));
		DBCursor cursor = coll.find(regexQuery).sort(new BasicDBObject("id", 1));
		List<PDataField> list = new ArrayList<PDataField>();
		while (cursor.hasNext()) {
			DBObject o = cursor.next();
			PDataField pdatafield = new PDataField();
			pdatafield.setId((String) o.get("id"));
			pdatafield.setDescription((String) o.get("description"));
			DBObject metadata = (DBObject) o.get("metadata");
			pdatafield.setName((String) ((BasicDBList) metadata.get("name")).get(0));
			pdatafield.setCategory((String) o.get("pcategory"));
			pdatafield.setSemanticType((String) ((BasicDBList) metadata.get("semantic_type")).get(0));
			list.add(pdatafield);
		}
		return list;
	}

	public PDataField findById(String id) {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("pDataFields");
		DBCursor cursor = coll.find(new BasicDBObject("id", id)).sort(new BasicDBObject("id", 1));
		PDataField pdatafield = new PDataField();
		while (cursor.hasNext()) {
			DBObject o = cursor.next();
			pdatafield.setId((String) o.get("id"));
			pdatafield.setDescription((String) o.get("description"));
			DBObject metadata = (DBObject) o.get("metadata");
			pdatafield.setName((String) ((BasicDBList) metadata.get("name")).get(0));
			pdatafield.setCategory((String) o.get("pcategory"));
			pdatafield.setSemanticType((String) ((BasicDBList) metadata.get("semantic_type")).get(0));

		}
		return pdatafield;
	}

	public List<PDataField> findByCategory(String category) {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("pDataFields");
		DBCursor cursor = coll.find(new BasicDBObject("gem_name", category)).sort(new BasicDBObject("id", 1));
		List<PDataField> list = new ArrayList<PDataField>();
		while (cursor.hasNext()) {
			DBObject o = cursor.next();
			PDataField pdatafield = new PDataField();
			pdatafield.setId((String) o.get("id"));
			pdatafield.setDescription((String) o.get("description"));
			DBObject metadata = (DBObject) o.get("metadata");
			pdatafield.setName((String) ((BasicDBList) metadata.get("name")).get(0));
			pdatafield.setCategory((String) o.get("pcategory"));
			pdatafield.setSemanticType((String) ((BasicDBList) metadata.get("semantic_type")).get(0));
			list.add(pdatafield);
		}
		return list;
	}

	public List<PDataField> getPDataTree_() {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("pDataFields");
		DBObject removeIdProjection = new BasicDBObject("_id", 0);
		DBCursor cursor = coll.find(null, removeIdProjection).sort(new BasicDBObject("id", 1));
		List<PDataField> list = new ArrayList<PDataField>();
		while (cursor.hasNext()) {
			DBObject o = cursor.next();
			PDataField pdatafield = new PDataField();
			pdatafield.setId((String) o.get("id"));
			pdatafield.setDescription((String) o.get("description"));
			DBObject metadata = (DBObject) o.get("metadata");
			pdatafield.setName((String) ((BasicDBList) metadata.get("name")).get(0));
			pdatafield.setCategory((String) o.get("pcategory"));
			pdatafield.setSemanticType((String) ((BasicDBList) metadata.get("semantic_type")).get(0));
			list.add(pdatafield);
		}
		return list;
	}

	public List<PDataCategory> getPDataTree() {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("pDataFields");
		List<PDataCategory> list = new ArrayList<PDataCategory>();
		BasicDBObject name = BasicDBObject.parse("{name: { $arrayElemAt: [ \"$metadata.name\", 0 ] }}");
		Iterable<DBObject> output = coll
				.aggregate(Arrays.asList((DBObject) new BasicDBObject("$group", new BasicDBObject("_id", "$pcategory")
						.append("category", new BasicDBObject("$first", "$pcategory"))
						.append("concepts", new BasicDBObject("$push",
								name.append("id", "$id").append("description", "$description")
										.append("category", "$pcategory").append("semanticType", "$semanticType"))))))
				.results();

		PDataCategory pdataCategory;
		for (DBObject dbObject : output) {

			try {
				pdataCategory = DAOUtils.dbObj2obj(dbObject, PDataCategory.class);
				list.add(pdataCategory);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}

		return list;

	}

}
