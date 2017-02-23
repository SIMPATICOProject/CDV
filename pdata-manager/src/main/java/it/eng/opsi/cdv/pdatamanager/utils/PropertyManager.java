package it.eng.opsi.cdv.pdatamanager.utils;

import java.io.IOException;
import java.util.Properties;


public class PropertyManager {

	
	private static Properties props = null;
	
	static{
		props = new Properties();
		try {
			props.load(PropertyManager.class.getClassLoader().getResourceAsStream("configuration.properties"));
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static String getProperty(String propName){
		return props.getProperty(propName);
	}
	
	
}
