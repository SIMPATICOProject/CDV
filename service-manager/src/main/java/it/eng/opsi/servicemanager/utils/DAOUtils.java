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
package it.eng.opsi.servicemanager.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;

public final class DAOUtils {

	static ObjectMapper objectMapper = new ObjectMapper();

	public static <T> T json2Obj(String json, Class<T> t) throws Exception {

		T obj = null;
		try {
			obj = objectMapper.readValue(json, t);
		} catch (Exception e) {

			throw new Exception("JSON to OBJECT failed", e);
		}
		return obj;
	}

	public static <T> String obj2JSON(Object obj, Class<T> t) throws Exception {
		String json = null;

		try {
			json = objectMapper.writeValueAsString((T) obj);
		} catch (Exception e) {
			throw new Exception("Object to JSON failed", e);
		}
		return json;
	}

	public static <T> T dbObj2obj(DBObject dbObj, Class<T> t) throws Exception {

		T obj = null;
		dbObj.removeField("_id");
		try {
			obj = objectMapper.readValue(dbObj.toString(), t);
		} catch (Exception e) {
			throw new Exception("DBObject to Object failed", e);
		}
		return obj;
	}

	public static <T> DBObject obj2DBobj(Object obj, Class<T> t) throws Exception {

		DBObject dbobject = null;

		try {
			dbobject = (DBObject) JSON.parse(objectMapper.writeValueAsString((T) obj));
		} catch (Exception e) {
			throw new Exception("Object to DBObject failed", e);
		}
		return dbobject;
	}

}
