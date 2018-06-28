package it.eng.opsi.cdv.auditlogmanager.utils;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Field;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import it.eng.opsi.cdv.auditlogmanager.model.ServiceLinkRecord;

public class JWTUtils {

	private static String jwtSecret = PropertyManager.getProperty("JWT_SECRET_KEY");

	public static String createJWT(Object obj) throws UnsupportedEncodingException {

		// String compactJws =
		// Jwts.builder().setSubject("Joe").signWith(SignatureAlgorithm.HS512,
		// jwtSecret).compact();

		JwtBuilder builder = Jwts.builder();

		// Add each object fields as JWT claim
		for (Field field : obj.getClass().getDeclaredFields()) {
			field.setAccessible(true); // You might want to set modifier to
										// public first.
			Object value = null;

			try {
				value = field.get(obj);
			} catch (IllegalArgumentException | IllegalAccessException e) {
				e.printStackTrace();
			}

			if (value != null) {
				builder.claim(field.getName(), value);
			}
		}

		return builder.signWith(SignatureAlgorithm.HS256, jwtSecret.getBytes("UTF-8")).compact();

	}
	
	
//	public static String createJWT(String plainJson) throws UnsupportedEncodingException {
//
//		// String compactJws =
//		// Jwts.builder().setSubject("Joe").signWith(SignatureAlgorithm.HS512,
//		// jwtSecret).compact();
//
//		JwtBuilder builder = Jwts.builder();
//
//		// Add each object fields as JWT claim
//		for (Field field : obj.getClass().getDeclaredFields()) {
//			field.setAccessible(true); // You might want to set modifier to
//										// public first.
//			Object value = null;
//
//			try {
//				value = field.get(obj);
//			} catch (IllegalArgumentException | IllegalAccessException e) {
//				e.printStackTrace();
//			}
//
//			if (value != null) {
//				builder.claim(field.getName(), value);
//			}
//		}
//
//		JsonParser parser = new JsonParser();
//		JsonObject o = parser.parse(plainJson).getAsJsonObject();
//		
//		o.
//		for(o.get
//				
//				
//		return builder.signWith(SignatureAlgorithm.HS256, jwtSecret.getBytes("UTF-8")).compact();
//
//	}
	
	
	
	public static void verifyJWT(String jwt) throws SignatureException, MalformedJwtException, UnsupportedEncodingException {
		
		Jws<Claims> claims =  Jwts.parser().setSigningKey(jwtSecret.getBytes("UTF-8")).parseClaimsJws(jwt);
		
//		System.out.println(claims.getBody());
		
	}
	
	
	
	
//	public static void main(String[] args){
//		
//		ServiceLinkRecord slr = new ServiceLinkRecord("2", "http://some.com", "2");
//		String token = null;
//		try {
//			token = createJWT(slr);
//		} catch (UnsupportedEncodingException e) {
//			
//			e.printStackTrace();
//		}
//		
//		try {
//			verifyJWT(token);
//		}catch(SignatureException e){
//			e.printStackTrace();
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		}
//		
//	}
	
	
	
	
	
	
}
