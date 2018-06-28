package it.eng.opsi.cdv.consentmanager.dao;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;




import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.WriteResult;

import it.eng.opsi.cdv.consentmanager.connection.MongoDBConnection;

public class ServiceEntryDAO {
	
	/*public List<ServiceEntry> findAll() {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
        DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("serviceRegistry"); 
        DBCursor services = coll.find();
        List<ServiceEntry> list = new ArrayList<ServiceEntry>();
       
        while (services.hasNext() ) { 
            DBObject o =  (DBObject) services.next();
            ServiceEntry service;
			try {
				System.out.println(o.toString());
				service = DAOUtils.dbObj2obj(o, ServiceEntry.class);
				list.add(service);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  	
         }
   	
		return list;
    }

    
    public List<ServiceEntry> findByName(String regex) {
    	MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
        DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("serviceRegistry"); 
		BasicDBObject regexQuery = new BasicDBObject();
        regexQuery.put("serviceDescriptionTitle",
        	new BasicDBObject("$regex", regex)
        	.append("$options", "i"));
        DBCursor services = coll.find(regexQuery).sort(new BasicDBObject("id", 1));
        List<ServiceEntry> list = new ArrayList<ServiceEntry>();
       
        while (services.hasNext() ) { 
            DBObject o =  (DBObject) services.next();
            ServiceEntry service;
			try {
				System.out.println(o.toString());
				service = DAOUtils.dbObj2obj(o, ServiceEntry.class);
				list.add(service);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  	
         }
   	
		return list;
    }
    
    public ServiceEntry findById(String id) {
    	MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
        DB db = dbSingleton.getDB();
        DBCollection coll = db.getCollection("serviceRegistry"); 
        DBObject service = coll.findOne(new BasicDBObject("serviceId", id));
        ServiceEntry serviceEntry=new ServiceEntry();
		try {
			serviceEntry = DAOUtils.dbObj2obj(service, ServiceEntry.class);
		} catch (Exception e) {
			
			e.printStackTrace();
		}
        
       return serviceEntry;
    }


	public void remove(String id) {
		// TODO Auto-generated method stub
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
        DB db = dbSingleton.getDB();
        DBCollection coll = db.getCollection("serviceRegistry"); 
        DBObject service2remove = coll.findOne(new BasicDBObject("serviceId", id));
        WriteResult result = coll.remove(service2remove);
       
             
	}


	public void update(ServiceEntry service,String id) {
		// TODO Auto-generated method stub
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
        DB db = dbSingleton.getDB();
        DBCollection coll = db.getCollection("serviceRegistry"); 
        DBObject newService=null;
		try {
			newService = DAOUtils.obj2DBobj(service, ServiceEntry.class);
			WriteResult result = coll.update(new BasicDBObject("serviceId", id), newService, true, false);
						
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
		
	}


	public ServiceEntry create(ServiceEntry service) {
		// TODO Auto-generated method stub
				MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		        DB db = dbSingleton.getDB();
		        DBCollection coll = db.getCollection("serviceRegistry"); 
		        DBObject newService=null;
				try {
					newService = DAOUtils.obj2DBobj(service, ServiceEntry.class);
					WriteResult result = coll.insert(newService);
					
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return service;
	}

	public ServiceEntry createDataDescription(ServiceEntry service) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public void updateDataDescription(ServiceEntry service) {
		// TODO Auto-generated method stub
		
	}
	
	public void removeDataDescription(ServiceEntry service) {
		// TODO Auto-generated method stub
		
	}
	
	public List<DataMapping> getDataMapping(String id) {
				
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
        DB db = dbSingleton.getDB();
       	DBCollection coll = db.getCollection("serviceRegistry"); 
        DBObject service = coll.findOne(new BasicDBObject("serviceId", id));
        List<DataMapping> list = new ArrayList<DataMapping>();
		DBObject serviceDataDescription= (DBObject) ((DBObject) service.get("serviceDataDescription")).get("dataset");
		BasicDBList datamapping= (BasicDBList)serviceDataDescription.get("dataMapping");
		Iterator<Object> mapping=datamapping.iterator();
        while (mapping.hasNext() ) { 
            DBObject o =  (DBObject) mapping.next();
            DataMapping datamap;
			try {
				datamap = DAOUtils.dbObj2obj(o, DataMapping.class);
				list.add(datamap);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  	
         }
   	
		return list;
	}*/


}
