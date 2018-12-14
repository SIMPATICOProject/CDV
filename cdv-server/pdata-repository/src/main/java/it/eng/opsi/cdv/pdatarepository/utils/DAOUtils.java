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
package it.eng.opsi.cdv.pdatarepository.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;

public final class DAOUtils {

	private static GsonBuilder gsonBuilder = new GsonBuilder();

	private static Gson gson = gsonBuilder
			.registerTypeAdapter(ZonedDateTime.class, new JsonDeserializer<ZonedDateTime>() {
				public ZonedDateTime deserialize(JsonElement jsonElement, Type type,
						JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
					DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
					return ZonedDateTime.from(fmt.parse(jsonElement.getAsString()));
				}
			}).registerTypeAdapter(ZonedDateTime.class, new JsonSerializer<ZonedDateTime>() {
				@Override
				public JsonElement serialize(ZonedDateTime zonedDateTime, Type type,
						JsonSerializationContext jsonSerializationContext) {
					DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
					return new JsonPrimitive(fmt.format(zonedDateTime.truncatedTo(ChronoUnit.SECONDS)));
				}
			}).registerTypeAdapter(PDataEntry.class, new AnnotatedDeserializer<PDataEntry>()).create();

	// private static Type pDataType = new TypeToken<PData>() {
	// }.getType();

	// private static Type dataMappingType = new TypeToken<DataMapping>() {
	// }.getType();
	//
	// private static Type dataMappingListType = new
	// TypeToken<List<DataMapping>>() {
	// }.getType();
	//
	//

	public static <T> T json2Obj(String json, Class<T> t) throws PDataUtilsException {

		T obj = null;
		try {
			obj = gson.fromJson(json, t);
		} catch (Exception e) {

			throw new PDataUtilsException("JSON to OBJECT failed: " + e.getMessage());
		}
		return obj;
	}

	public static <T> T json2Obj(String json, Type t) throws PDataUtilsException {

		T obj = null;
		try {
			obj = gson.fromJson(json, t);
		} catch (Exception e) {
			throw new PDataUtilsException("JSON to OBJECT failed: " + e.getMessage());
		}
		return obj;
	}

	public static <T> String obj2Json(Object obj, Class<T> t) throws PDataUtilsException {
		String json = null;

		try {
			json = gson.toJson(obj, t);
		} catch (Exception e) {
			throw new PDataUtilsException("Object to JSON failed: " + e.getMessage());
		}
		return json;
	}

	public static <T> String obj2Json(Object obj, Type t) throws PDataUtilsException {
		String json = null;

		try {
			json = gson.toJson(obj, t);
		} catch (Exception e) {
			throw new PDataUtilsException("Object to JSON failed: " + e.getMessage());
		}
		return json;
	}

	static class AnnotatedDeserializer<T> implements JsonDeserializer<T> {

		public T deserialize(JsonElement je, Type type, JsonDeserializationContext jdc) throws JsonParseException {
			T pojo = new GsonBuilder().registerTypeAdapter(ZonedDateTime.class, new JsonDeserializer<ZonedDateTime>() {
				public ZonedDateTime deserialize(JsonElement jsonElement, Type type,
						JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
					DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
					return ZonedDateTime.from(fmt.parse(jsonElement.getAsString()));
				}
			}).registerTypeAdapter(ZonedDateTime.class, new JsonSerializer<ZonedDateTime>() {
				@Override
				public JsonElement serialize(ZonedDateTime zonedDateTime, Type type,
						JsonSerializationContext jsonSerializationContext) {
					DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
					return new JsonPrimitive(fmt.format(zonedDateTime.truncatedTo(ChronoUnit.SECONDS)));
				}
			}).create().fromJson(je, type);

			Field[] fields = pojo.getClass().getDeclaredFields();
			for (Field f : fields) {
				if (f.getAnnotation(JsonRequired.class) != null) {
					try {
						f.setAccessible(true);
						if (f.get(pojo) == null) {
							throw new JsonParseException("Missing field in JSON: " + f.getName());
						}
					} catch (IllegalArgumentException | IllegalAccessException ex) {
						throw new JsonParseException("There was an exception while deserializing the json object: "
								+ AnnotatedDeserializer.class.getName());
					}
				}
			}
			return pojo;

		}
	}

}
