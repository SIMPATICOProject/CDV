package it.eng.opsi.cdv.datasecuritymanager.crypt.config;

import java.io.IOException;
import java.util.MissingResourceException;
import java.util.Properties;

public class Config {
	// private static final String BUNDLE_NAME =
	// "it.eng.opsi.cdv.datasecuritymanager.crypt.config.config"; //$NON-NLS-1$
	//
	// private static final ResourceBundle RESOURCE_BUNDLE = ResourceBundle
	// .getBundle(BUNDLE_NAME);
	//
	// private Config() {
	// }
	//
	// public static String get(String key) {
	// try {
	// return RESOURCE_BUNDLE.getString(key);
	// } catch (MissingResourceException e) {
	// return '!' + key + '!';
	// }
	// }

	private static Properties props = null;

	static {
		props = new Properties();
		try {
			props.load(Config.class.getClassLoader().getResourceAsStream("application.properties"));

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static String get(String key) {
		try {
			return props.getProperty(key);
		} catch (MissingResourceException e) {
			return '!' + key + '!';
		}
	}

}
