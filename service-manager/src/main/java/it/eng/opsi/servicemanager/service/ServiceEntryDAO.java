package it.eng.opsi.servicemanager.service;

import it.eng.opsi.servicemanager.utils.DAOUtils;
import it.eng.opsi.servicemanager.data.DataMapping;
import it.eng.opsi.servicemanager.data.PDataField;
import it.eng.opsi.servicemanager.data.ServiceEntry;

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

public class ServiceEntryDAO {
	public List<ServiceEntry> findAll() {
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
        regexQuery.put("publicServiceName",
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
        DBObject service = coll.findOne(new BasicDBObject("publicServiceID", id));
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
        DBObject service2remove = coll.findOne(new BasicDBObject("publicServiceID", id));
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
			WriteResult result = coll.update(new BasicDBObject("publicServiceID", id), newService, true, false);
						
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
        DBObject service = coll.findOne(new BasicDBObject("publicServiceID", id));
        List<DataMapping> list = new ArrayList<DataMapping>();
		DBObject serviceDataDescription= (DBObject) ((BasicDBList) service.get("publicServiceIsDescribedAt")).get(0);
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
	}


}
