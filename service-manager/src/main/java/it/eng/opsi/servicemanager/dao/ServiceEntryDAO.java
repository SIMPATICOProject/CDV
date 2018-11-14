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

import it.eng.opsi.servicemanager.utils.DAOUtils;
import it.eng.opsi.servicemanager.connection.MongoDBConnection;
import it.eng.opsi.servicemanager.data.DataMapping;
import it.eng.opsi.servicemanager.data.PDataField;
import it.eng.opsi.servicemanager.data.ServiceEntry;
import it.eng.opsi.servicemanager.model.ServiceReport;

import java.util.ArrayList;
import java.util.Arrays;
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

		while (services.hasNext()) {
			DBObject o = (DBObject) services.next();
			ServiceEntry service;
			try {
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
		regexQuery.put("publicServiceName", new BasicDBObject("$regex", regex).append("$options", "i"));
		DBCursor services = coll.find(regexQuery).sort(new BasicDBObject("id", 1));
		List<ServiceEntry> list = new ArrayList<ServiceEntry>();

		while (services.hasNext()) {
			DBObject o = (DBObject) services.next();
			ServiceEntry service;
			try {
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
		ServiceEntry serviceEntry = new ServiceEntry();
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

	public void update(ServiceEntry service, String id) {
		// TODO Auto-generated method stub
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("serviceRegistry");
		DBObject newService = null;
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
		DBObject newService = null;
		try {
			newService = DAOUtils.obj2DBobj(service, ServiceEntry.class);
			WriteResult result = coll.update(new BasicDBObject("publicServiceID", service.getPublicServiceID()),
					newService, true, false);

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
		DBObject serviceDataDescription = (DBObject) ((BasicDBList) service.get("publicServiceIsDescribedAt")).get(0);
		BasicDBList datamapping = (BasicDBList) serviceDataDescription.get("dataMapping");
		Iterator<Object> mapping = datamapping.iterator();
		while (mapping.hasNext()) {
			DBObject o = (DBObject) mapping.next();
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

	public List<ServiceReport> getServiceReportbySector() {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("serviceRegistry");
		List<ServiceReport> list = new ArrayList<ServiceReport>();
		Iterable<DBObject> output = coll
				.aggregate(Arrays.asList((DBObject) new BasicDBObject("$unwind", "$publicServiceSector"),
						(DBObject) new BasicDBObject("$group",
								new BasicDBObject("_id", "$publicServiceSector")
										.append("category", new BasicDBObject("$first", "$publicServiceSector"))
										.append("count", new BasicDBObject("$sum", 1)))))
				.results();

		ServiceReport serviceReport;
		for (DBObject dbObject : output) {

			try {
				serviceReport = DAOUtils.dbObj2obj(dbObject, ServiceReport.class);
				list.add(serviceReport);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}

		return list;

	}

	public List<ServiceReport> getServiceReportbyType() {
		MongoDBConnection dbSingleton = MongoDBConnection.getInstance();
		DB db = dbSingleton.getDB();
		DBCollection coll = db.getCollection("serviceRegistry");
		List<ServiceReport> list = new ArrayList<ServiceReport>();
		Iterable<DBObject> output = coll
				.aggregate(Arrays.asList((DBObject) new BasicDBObject("$unwind", "$publicServiceTypeProp"),
						(DBObject) new BasicDBObject("$group",
								new BasicDBObject("_id", "$publicServiceTypeProp")
										.append("category", new BasicDBObject("$first", "$publicServiceTypeProp"))
										.append("count", new BasicDBObject("$sum", 1)))))
				.results();

		ServiceReport serviceReport;
		for (DBObject dbObject : output) {

			try {
				serviceReport = DAOUtils.dbObj2obj(dbObject, ServiceReport.class);
				list.add(serviceReport);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}

		return list;

	}

}
