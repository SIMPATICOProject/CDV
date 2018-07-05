package it.eng.opsi.cdv.accountmanager.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.time.LocalDate;
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
import it.eng.opsi.cdv.accountmanager.model.*;

public final class DAOUtils {

	private static GsonBuilder gsonBuilder = new GsonBuilder();

	private static Gson gson = gsonBuilder.registerTypeAdapter(ZonedDateTime.class, new ZonedDateTimeAdapter())
			.registerTypeAdapter(LocalDate.class, new LocalDateAdapter())
			.registerTypeAdapter(Account.class, new AnnotatedDeserializer<Account>())
			.registerTypeAdapter(Contact.class, new AnnotatedDeserializer<Contact>())
			.registerTypeAdapter(Email.class, new AnnotatedDeserializer<Email>())
			.registerTypeAdapter(Particular.class, new AnnotatedDeserializer<Particular>())
			.registerTypeAdapter(ServiceLinkRecord.class, new AnnotatedDeserializer<ServiceLinkRecord>())
			.registerTypeAdapter(Telephone.class, new AnnotatedDeserializer<Telephone>()).create();

	public static <T> T json2Obj(String json, Class<T> t) throws AccountUtilsException {
		T obj = null;
		try {
			obj = gson.fromJson(json, t);
		} catch (Exception e) {

			throw new AccountUtilsException("JSON to OBJECT failed: " + e.getMessage());
		}
		return obj;
	}

	public static <T> T json2Obj(String json, Type t) throws AccountUtilsException {

		T obj = null;
		try {
			obj = gson.fromJson(json, t);
		} catch (Exception e) {

			throw new AccountUtilsException("JSON to OBJECT failed: " + e.getMessage());
		}
		return obj;
	}

	public static <T> String obj2Json(Object obj, Class<T> t) throws AccountUtilsException {
		String json = null;

		try {
			json = gson.toJson(obj, t);
		} catch (Exception e) {
			throw new AccountUtilsException("Object to JSON failed: " + e.getMessage());
		}
		return json;
	}

	public static <T> String obj2Json(Object obj, Type t) throws AccountUtilsException {
		String json = null;

		try {
			json = gson.toJson(obj, t);
		} catch (Exception e) {
			throw new AccountUtilsException("Object to JSON failed: " + e.getMessage());
		}
		return json;
	}

	public static String formatDate(ZonedDateTime dt) {

		DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
		return fmt.format(dt.truncatedTo(ChronoUnit.SECONDS));

	}

	static class AnnotatedDeserializer<T> implements JsonDeserializer<T> {

		public T deserialize(JsonElement je, Type type, JsonDeserializationContext jdc) throws JsonParseException {
			T pojo = new GsonBuilder().registerTypeAdapter(ZonedDateTime.class, new ZonedDateTimeAdapter())
					.registerTypeAdapter(LocalDate.class, new LocalDateAdapter()).create().fromJson(je, type);

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

class LocalDateAdapter implements JsonSerializer<LocalDate>, JsonDeserializer<LocalDate> {

	@Override
	public JsonElement serialize(LocalDate date, Type typeOfSrc, JsonSerializationContext context) {
		return new JsonPrimitive(date.format(DateTimeFormatter.ISO_LOCAL_DATE)); // "yyyy-mm-dd"
	}

	@Override
	public LocalDate deserialize(JsonElement jsonElement, Type typeOfSrc,
			JsonDeserializationContext jsonDeserializationContext) {
		return LocalDate.from((DateTimeFormatter.ISO_LOCAL_DATE.parse(jsonElement.getAsString()))); // "yyyy-mm-dd"
	}

}

class ZonedDateTimeAdapter implements JsonSerializer<ZonedDateTime>, JsonDeserializer<ZonedDateTime> {

	@Override
	public ZonedDateTime deserialize(JsonElement jsonElement, Type type,
			JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
		DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
		return ZonedDateTime.from(fmt.parse(jsonElement.getAsString()));
	}

	@Override
	public JsonElement serialize(ZonedDateTime zonedDateTime, Type type,
			JsonSerializationContext jsonSerializationContext) {
		DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);
		return new JsonPrimitive(fmt.format(zonedDateTime.truncatedTo(ChronoUnit.SECONDS)));
	}

}
