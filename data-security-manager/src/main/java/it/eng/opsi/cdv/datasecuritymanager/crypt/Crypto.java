package it.eng.opsi.cdv.datasecuritymanager.crypt;

import java.io.IOException;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.crypto.SealedObject;

import it.eng.opsi.cdv.datasecuritymanager.crypt.annotation.Encryption;
import it.eng.opsi.cdv.datasecuritymanager.crypt.annotation.Encryption.EncryptionLevel;
import it.eng.opsi.cdv.datasecuritymanager.crypt.utils.CryptoUtils;
import it.eng.opsi.cdv.datasecuritymanager.crypt.utils.PersistenceManager;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.SerializationUtils;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

public class Crypto<T> {
	
	private Class<?> clazz;
	private Class<?> originalClazz;
	
	public Crypto(Class<T> typeclass) throws ClassNotFoundException, NoSuchMethodException, SecurityException{
		originalClazz = typeclass;
		clazz = Class.forName("it.eng.opsi.cdv.datasecuritymanager.crypt.ext.model."+typeclass.getSimpleName());
	}
	
	
	
	public static Object encryptField(Object value, Encryption.EncryptionLevel encryptionlevel, String appid, String userid) 
			throws Exception{
		
		Object finalvalue = value;
		switch(encryptionlevel){
			case APP:{
					Serializable serValue = (Serializable)value;
					SealedObject sobj = CryptoUtils.appDataEncryption(serValue, appid);
					byte[] data = SerializationUtils.serialize(sobj);
					finalvalue = Base64.encodeBase64String(data);
				}
				break;
			case USER:{
					Serializable serValue = (Serializable)value;
					SealedObject sobj = CryptoUtils.userDataEncryption(serValue, userid);
					byte[] data = SerializationUtils.serialize(sobj);
					finalvalue = Base64.encodeBase64String(data);
				}
				break;
				
			case SKIP:
			default:
				break;
		}
		
		return finalvalue;
		
	}
	
	public static Object decryptField(Object encryptedvalue, Encryption.EncryptionLevel encryptionlevel, String appid, String userid) 
			throws Exception{
		
		Object decryptedvalue = encryptedvalue;
		switch(encryptionlevel){
			case APP:{
					String sValue = (String)encryptedvalue;
					byte[] bValue = Base64.decodeBase64(sValue);
					SealedObject so_prime = (SealedObject) SerializationUtils.deserialize(bValue);
					decryptedvalue = CryptoUtils.appDataDecryption(so_prime, appid);
				}
				break;
			case USER:{
				String sValue = (String)encryptedvalue;
				byte[] bValue = Base64.decodeBase64(sValue);
				SealedObject so_prime = (SealedObject) SerializationUtils.deserialize(bValue);
				decryptedvalue = CryptoUtils.userDataDecryption(so_prime, userid);
				}
				break;
				
			case SKIP:
			default:
				break;
		}
		
		return decryptedvalue;
	}
	
	public Object getEncrypted(T plain, String appid, String userid)
			throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, NoSuchMethodException, SecurityException {
		
		Object encrypted = clazz.getConstructor().newInstance();
		
		Field[] fields = plain.getClass().getDeclaredFields();
		for(Field field : fields){
			try{
				field.setAccessible(true);
				String column = field.getName();
				Object value = field.get(plain);
				
				Field encryptedfield = encrypted.getClass().getDeclaredField(column);
				encryptedfield.setAccessible(true);
				
				Encryption.EncryptionLevel encryptionlevel = EncryptionLevel.APP;
				if(encryptedfield.isAnnotationPresent(Encryption.class)){
					encryptionlevel = encryptedfield.getAnnotation(Encryption.class).level();
				}
				
				Object encryptedvalue = encryptField(value, encryptionlevel, appid, userid);
				encryptedfield.set(encrypted, encryptedvalue);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		
		return encrypted;
	}
	
	public void storeEncrypted(T o, String appid, String userid)
			throws IOException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, NoSuchMethodException, SecurityException{
		
		Object obj = getEncrypted(o, appid, userid);
		
		PersistenceManager pm = new PersistenceManager();
		pm.initTransaction();
				
		pm.getSession().saveOrUpdate(obj);
			
		pm.close();
				
	}
	
	@SuppressWarnings("unchecked")
	public T decrypt(Object encrypted, String appid, String userid) throws Exception{

		Object decrypted = originalClazz.getConstructor().newInstance();
		
		Field[] encfields = encrypted.getClass().getDeclaredFields();
		for(Field encfield : encfields){
			try{
				encfield.setAccessible(true);
				String column = encfield.getName();
				Object encryptedvalue = encfield.get(encrypted);
				
				Field decryptedfield = decrypted.getClass().getDeclaredField(column);
				decryptedfield.setAccessible(true);
				
				Encryption.EncryptionLevel encryptionlevel = EncryptionLevel.APP;
				if(encfield.isAnnotationPresent(Encryption.class)){
					encryptionlevel = encfield.getAnnotation(Encryption.class).level();
				}
				
				Object decryptedvalue = decryptField(encryptedvalue, encryptionlevel, appid, userid);

				decryptedfield.set(decrypted, decryptedvalue);
				
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		
		return (T)decrypted;
	}
	
	public T getDecrypted(long id, String appid, String userid) throws Exception{
		
		PersistenceManager pm = new PersistenceManager();
		pm.initTransaction();
		Object encrypted = pm.getSession().get(clazz, id);
		pm.close();
		
		T decrypted = decrypt(encrypted, appid, userid);
		
		return (T)decrypted;
		
	}
	
	public List<T> queryand(Map<String, Object> params, String appid, String userid)
			throws Exception{
		
		List<T> out = new ArrayList<T>();
		
		PersistenceManager pm = new PersistenceManager();
		pm.initTransaction();
		Session session = pm.getSession();
		
		List<?> resp = session.createCriteria(clazz).list();
		
		for(Map.Entry<String, Object> param : params.entrySet()){
			String column = param.getKey();
			Object clearvalue = param.getValue();
			
			Object tmp = clazz.getConstructor().newInstance();
			Field encryptedfield = tmp.getClass().getDeclaredField(column);
			
			Encryption.EncryptionLevel encryptionlevel = EncryptionLevel.APP;
			if(encryptedfield.isAnnotationPresent(Encryption.class)){
				encryptionlevel = encryptedfield.getAnnotation(Encryption.class).level();
			}
			
			Object encryptedValue = encryptField(clearvalue, encryptionlevel, appid, userid);
			
			@SuppressWarnings("rawtypes")
			List encrypts = session.createCriteria(clazz)
									.add( Restrictions.eq(column, encryptedValue) )
									.list();
			
			resp.retainAll(encrypts);
		}
		
		for(Object item:resp){
			T decrypteditem = decrypt(item, appid, userid);
			
			boolean valid = true;
			for(Map.Entry<String, Object> param : params.entrySet()){
				Field encryptedfield = decrypteditem.getClass().getDeclaredField(param.getKey());
				encryptedfield.setAccessible(true);
				
				Object v = encryptedfield.get(decrypteditem);
				if(!v.equals(param.getValue())){
					valid = false;
					break;
				}
			}
			
			if(valid)
				out.add(decrypteditem);
			
		}
		
		pm.close();
		
		return out;
		
	}
	
	public List<T> queryor(Map<String, Object> params, String appid, String userid)
			throws Exception{
		
		List<T> out = new ArrayList<T>();
		
		PersistenceManager pm = new PersistenceManager();
		pm.initTransaction();
		Session session = pm.getSession();
		
		Set<?> resp = new HashSet();
		
		for(Map.Entry<String, Object> param : params.entrySet()){
			String column = param.getKey();
			Object clearvalue = param.getValue();
			
			Object tmp = clazz.getConstructor().newInstance();
			Field encryptedfield = tmp.getClass().getDeclaredField(column);
			
			Encryption.EncryptionLevel encryptionlevel = EncryptionLevel.APP;
			if(encryptedfield.isAnnotationPresent(Encryption.class)){
				encryptionlevel = encryptedfield.getAnnotation(Encryption.class).level();
			}
			
			Object encryptedValue = encryptField(clearvalue, encryptionlevel, appid, userid);
			
			@SuppressWarnings("rawtypes")
			List encrypts = session.createCriteria(clazz)
									.add( Restrictions.eq(column, encryptedValue) )
									.list();
			
			resp.addAll(encrypts);
		}
		
		for(Object item:resp){
			T decrypteditem = decrypt(item, appid, userid);
			
			boolean valid = false;
			for(Map.Entry<String, Object> param : params.entrySet()){
				Field encryptedfield = decrypteditem.getClass().getDeclaredField(param.getKey());
				encryptedfield.setAccessible(true);
				
				Object v = encryptedfield.get(decrypteditem);
				if(v.equals(param.getValue())){
					valid = true;
					break;
				}
			}
			
			if(valid)
				out.add(decrypteditem);
		}
		
		pm.close();
		
		return out;
		
	}
	
	public static void main(String[] args) {
		
//		Date date = GregorianCalendar.getInstance().getTime();
//		
//		try{
//			String plaintext = "Hello World! I'm Nino Sirchia";
//			String ciphertext = CryptoUtils.encryptData(plaintext.getBytes("UTF-8"), 0L);
//
//			byte[] cipherbytes = Base64.decodeBase64(ciphertext);
//			String plaintext_1 = CryptoUtils.decryptData(cipherbytes, 0L);
//			
//			if(plaintext_1.equals(plaintext))
//				System.out.println("String encryption works!");
//			
//			SealedObject so = CryptoUtils.encryptData(date, 1L);
//			byte[] data = SerializationUtils.serialize(so);
//			SealedObject so_prime = (SealedObject) SerializationUtils.deserialize(data);
//			
//			Date restoredDate = (Date)CryptoUtils.decryptData(so_prime, 1L);
//			if(restoredDate.equals(date))
//				System.out.println("Object encryption works!");
//		    
//		}
//		catch(Exception e){
//			e.printStackTrace();
//		}
		
	}

}
