package it.eng.opsi.servicemanager.service;

import java.net.UnknownHostException;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.MongoException;
import com.mongodb.ServerAddress;
import java.util.Arrays;
import org.apache.commons.lang3.StringUtils;

import it.eng.opsi.servicemanager.utils.PropertyManager;

public class MongoDBConnection {
private static MongoDBConnection mDbSingleton;
	
	private static MongoClient mongoClient;
    
	private static DB db ;
	
	
	private static String dbHost = null;
	private static int dbPort;
	private static String dbName = null;
	private static String dbUser = null;
	private static String dbPassword = null;
	
	private MongoDBConnection(){};
	
	static {
		dbHost = PropertyManager.getProperty("MONGO_DB_HOST").split(":")[0];
		dbPort = Integer.parseInt(PropertyManager.getProperty("MONGO_DB_HOST").split(":")[1]);
		dbName = PropertyManager.getProperty("MONGO_DB_NAME");
		dbUser = PropertyManager.getProperty("USER_MONGO");
		dbPassword = PropertyManager.getProperty("PASSWORD_MONGO");

	}
	
	public static MongoDBConnection getInstance(){
		if(mDbSingleton == null){
			mDbSingleton = new MongoDBConnection();
		}
		return mDbSingleton;
	} 
	
	public DB getDB(){
		
		try {
			if (mongoClient == null) {
				if (StringUtils.isNotBlank(dbUser) && StringUtils.isNotBlank(dbPassword))
					mongoClient = new MongoClient(new ServerAddress(dbHost, dbPort),
							Arrays.asList(MongoCredential.createCredential(dbUser, dbName, dbPassword.toCharArray())));
				else
					mongoClient = new MongoClient(new ServerAddress(dbHost, dbPort));
			}
			if (db == null)
				db = mongoClient.getDB(dbName);

			return db;
		} catch (MongoException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static void onFinalize(){
		if (mongoClient != null)
			mongoClient.close();
	}
}
