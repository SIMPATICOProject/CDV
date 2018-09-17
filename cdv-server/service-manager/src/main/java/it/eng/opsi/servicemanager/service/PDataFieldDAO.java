package it.eng.opsi.servicemanager.service;

import it.eng.opsi.servicemanager.data.PDataField;
import it.eng.opsi.servicemanager.service.MongoDBConnection;

import java.util.ArrayList;
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
	         DBObject metadata= (DBObject) o.get("metadata");
	         pdatafield.setName((String)((BasicDBList) metadata.get("name")).get(0));
	         pdatafield.setCategory((String) o.get("pcategory"));
	         pdatafield.setSemanticType((String)((BasicDBList) metadata.get("semantic_type")).get(0));
	         list.add(pdatafield);
	      }
		 return list;
    }

    
    public List<PDataField> findByName(String regex) {
    	 MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
         DB db = dbSingleton.getDB();
         DBCollection coll = db.getCollection("pDataFields"); 
         BasicDBObject regexQuery = new BasicDBObject();
         regexQuery.put("id",
         	new BasicDBObject("$regex", regex)
         	.append("$options", "i"));
         DBCursor cursor = coll.find(regexQuery).sort(new BasicDBObject("id", 1));
         List<PDataField> list = new ArrayList<PDataField>();
         while (cursor.hasNext()) { 
             DBObject o = cursor.next();
             PDataField pdatafield = new PDataField();
             pdatafield.setId((String) o.get("id"));
             pdatafield.setDescription((String) o.get("description"));
             DBObject metadata= (DBObject) o.get("metadata");
             pdatafield.setName((String)((BasicDBList) metadata.get("name")).get(0));
             pdatafield.setCategory((String) o.get("pcategory"));
             pdatafield.setSemanticType((String)((BasicDBList) metadata.get("semantic_type")).get(0));
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
            DBObject metadata= (DBObject) o.get("metadata");
            pdatafield.setName((String)((BasicDBList) metadata.get("name")).get(0));
            pdatafield.setCategory((String) o.get("pcategory"));
            pdatafield.setSemanticType((String)((BasicDBList) metadata.get("semantic_type")).get(0));
            
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
            DBObject metadata= (DBObject) o.get("metadata");
            pdatafield.setName((String)((BasicDBList) metadata.get("name")).get(0));
            pdatafield.setCategory((String) o.get("pcategory"));
            pdatafield.setSemanticType((String)((BasicDBList) metadata.get("semantic_type")).get(0));
            list.add(pdatafield);
         }
   	 return list;
    } 
    
 
    

}
