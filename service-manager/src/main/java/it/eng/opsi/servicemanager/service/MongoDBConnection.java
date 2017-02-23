package it.eng.opsi.servicemanager.service;

import java.net.UnknownHostException;

import com.mongodb.DB;
import com.mongodb.MongoClient;

public class MongoDBConnection {
private static MongoDBConnection mDbSingleton;
	
	private static MongoClient mongoClient;
    
	private static DB db ;
	
	
	private static final String dbHost = "localhost";
	private static final int dbPort = 27017;
	private static final String dbName = "personalDataMB";
	private static final String dbUser = "user";
	private static final String dbPassword = "user";
	
	private MongoDBConnection(){};
	
	public static MongoDBConnection getInstance(){
		if(mDbSingleton == null){
			mDbSingleton = new MongoDBConnection();
		}
		return mDbSingleton;
	} 
	
	public DB getDB(){
		if(mongoClient == null){
			try {
				mongoClient = new MongoClient(dbHost , dbPort);
			} catch (UnknownHostException e) {
				return null;
			}
		}
		if(db == null)
			db = mongoClient.getDB(dbName);
		/*if(!db.isAuthenticated()){
			boolean auth = db.authenticate(dbUser, dbPassword.toCharArray());
		}*/
		return db;
	}
}
