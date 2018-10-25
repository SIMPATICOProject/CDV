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

	private static KeyStore getKeystore() throws Exception {

		String keystorepath = keystorefilepath;

		KeyStore keystore = KeyStore.getInstance(Config.get("ks.type")); //$NON-NLS-1$
		InputStream is = null;
		if (keystorepath != null && !keystorepath.trim().equalsIgnoreCase("")) { //$NON-NLS-1$
			File fKeystore = new File(keystorepath);
			is = new FileInputStream(fKeystore);
		}
		keystore.load(is, keystorepassword);
		return keystore;
	}

	public static SecretKey getKey(String alias) throws Exception {
		KeyStore keystore = getKeystore();
		SecretKey k = (SecretKey) keystore.getKey(alias, keystorepassword);

		return k;
	}

}
