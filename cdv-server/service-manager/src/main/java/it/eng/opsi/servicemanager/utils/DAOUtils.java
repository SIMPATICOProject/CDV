package it.eng.opsi.servicemanager.utils;





import java.io.IOException;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;

public final class DAOUtils {
	
	static ObjectMapper objectMapper = new ObjectMapper();
	
	public static <T> T json2Obj(String json, Class<T> t) throws Exception {
		
		T obj=null;
		try {
			obj = objectMapper.readValue(json, t);
		} catch (Exception e) {
			
			throw new Exception(
					"JSON to OBJECT failed",
					e);
		} 
		return obj;
	}
	
    public static <T> String obj2JSON(Object obj, Class<T> t) throws Exception{
	String json=null;	
		
	try {
		json=objectMapper.writeValueAsString((T) obj);
	} catch (Exception e) {
		throw new Exception(
				"Object to JSON failed",
				e);
	}
    return json;
    }
    
    
    public static <T> T dbObj2obj(DBObject dbObj, Class<T> t) throws Exception{
    	
    	T obj=null;
    	dbObj.removeField("_id");
    	try {
			obj= objectMapper.readValue(dbObj.toString(), t);
		} catch (Exception e) {
			throw new Exception(
					"DBObject to Object failed",
					e);
		}
    	return obj;
    }
    
    public static <T> DBObject obj2DBobj(Object obj, Class<T> t) throws Exception {
    	
    	DBObject dbobject=null;
    	    	
        try {
			dbobject = (DBObject) JSON
						.parse(objectMapper.writeValueAsString((T) obj));
		} catch (Exception e) {
			throw new Exception(
					"Object to DBObject failed",
					e);
		}
    	return dbobject;
     }
   
}
