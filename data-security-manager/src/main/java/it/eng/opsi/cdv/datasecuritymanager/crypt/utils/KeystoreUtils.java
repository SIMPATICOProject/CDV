package it.eng.opsi.cdv.datasecuritymanager.crypt.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import javax.crypto.SecretKey;

import it.eng.opsi.cdv.datasecuritymanager.crypt.config.Config;

public abstract class KeystoreUtils {
	
	private static final String keystorefilepath = Config.get("ks.path"); //$NON-NLS-1$
	private static final char[] keystorepassword = Config.get("ks.password").toCharArray(); //$NON-NLS-1$
	
	private static KeyStore getKeystore() throws Exception{
		
		String keystorepath = keystorefilepath;
		
		KeyStore keystore = KeyStore.getInstance(Config.get("ks.type")); //$NON-NLS-1$
		InputStream is = null;
		if(keystorepath != null && !keystorepath.trim().equalsIgnoreCase("")){ //$NON-NLS-1$
			File fKeystore = new File(keystorepath);
			is = new FileInputStream(fKeystore);
		}
		keystore.load(is, keystorepassword);
		return keystore;
	}
	
	public static SecretKey getKey(String alias) throws Exception{
		KeyStore keystore = getKeystore();
		SecretKey k = (SecretKey) keystore.getKey(alias, keystorepassword);
		
		return k;
	}
	
}
