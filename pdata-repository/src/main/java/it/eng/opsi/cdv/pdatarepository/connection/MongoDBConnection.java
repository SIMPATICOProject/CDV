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
package it.eng.opsi.cdv.pdatarepository.connection;

import java.io.IOException;
import java.util.Arrays;
import java.util.Properties;

import org.apache.commons.lang3.StringUtils;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.MongoException;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoDatabase;

public class MongoDBConnection {
	private static MongoDBConnection mDbSingleton;

	private static MongoClient mongoClient;

	private static MongoDatabase db;
	private static String dbHost = null;
	private static int dbPort;
	private static String dbName = null;
	private static String dbUser = null;
	private static String dbPassword = null;
	private static Properties props = null;

	private MongoDBConnection() {
	};

	static {

		props = new Properties();
		try {
			props.load(MongoDBConnection.class.getClassLoader().getResourceAsStream("application.properties"));

		} catch (IOException e) {
			e.printStackTrace();
		}

		dbHost = props.getProperty("MONGO_DB_HOST").split(":")[0];
		dbPort = Integer.parseInt(props.getProperty("MONGO_DB_HOST").split(":")[1]);
		dbName = props.getProperty("MONGO_DB_NAME");
		dbUser = props.getProperty("USER_MONGO");
		dbPassword = props.getProperty("PASSWORD_MONGO");

	}

	public static MongoDBConnection getInstance() {
		if (mDbSingleton == null) {
			mDbSingleton = new MongoDBConnection();
		}
		return mDbSingleton;
	}

	public MongoDatabase getDB() {
		try {
			if (mongoClient == null) {
				if (StringUtils.isNotBlank(dbUser) && StringUtils.isNotBlank(dbPassword))
					mongoClient = new MongoClient(new ServerAddress(dbHost, dbPort),
							Arrays.asList(MongoCredential.createCredential(dbUser, dbName, dbPassword.toCharArray())));
				else
					mongoClient = new MongoClient(new ServerAddress(dbHost, dbPort));
			}
			if (db == null)
				db = mongoClient.getDatabase(dbName);

			return db;
		} catch (MongoException e) {
			e.printStackTrace();
			return null;
		}

	}

	public static void onFinalize() {
		if (mongoClient != null)
			mongoClient.close();
	}

}
