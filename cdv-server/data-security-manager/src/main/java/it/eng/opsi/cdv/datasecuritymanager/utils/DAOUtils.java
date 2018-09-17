package it.eng.opsi.cdv.datasecuritymanager.utils;

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
import it.eng.opsi.cdv.datasecuritymanager.model.*;

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
