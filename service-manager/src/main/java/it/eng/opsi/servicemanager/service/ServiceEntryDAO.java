package it.eng.opsi.servicemanager.service;

import it.eng.opsi.servicemanager.common.DAOUtils;
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

public class ServiceEntryDAO {
	public List<ServiceEntry> findAll() {
		return null;
    }

    
    public List<ServiceEntry> findByName(String regex) {
    	 return null;
    }
    
    public ServiceEntry findById(String id) {
    	 return null;
    }


	public void remove(int id) {
		// TODO Auto-generated method stub
		
	}


	public void update(ServiceEntry service) {
		// TODO Auto-generated method stub
		
	}


	public ServiceEntry create(ServiceEntry service) {
		// TODO Auto-generated method stub
		return null;
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
	}


}
