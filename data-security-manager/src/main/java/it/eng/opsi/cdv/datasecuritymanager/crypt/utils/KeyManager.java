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

import it.eng.opsi.cdv.datasecuritymanager.crypt.annotation.Encryption.EncryptionLevel;
import it.eng.opsi.cdv.datasecuritymanager.crypt.config.Config;
import it.eng.opsi.cdv.datasecuritymanager.crypt.model.UserKey;

import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Logger;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.hibernate.HibernateException;

public abstract class KeyManager {

	private static Map<String, SecretKey> keys = new HashMap<String, SecretKey>();
	private static long encryptionkeyduration_m = Long.parseLong(Config.get("crypt.key.duration.minutes"));
	private static long encryptionkeyduration_ms = encryptionkeyduration_m * 60 * 1000;
	private static Timer t = new Timer();

	private static final int userkey_bit_size = Integer.parseInt(Config.get("crypt.userkey.size.bit"));
	private static final int userkey_byte_size;
	private static final String masterKeyAlias = Config.get("crypt.masterkey.alias");

	static {
		// Setup user key length
		userkey_byte_size = userkey_bit_size / 8;
		Logger.getLogger(CryptoUtils.class.getName())
				.info("User key length setted up to: " + userkey_byte_size + " bytes");
	}

	private static SecretKey generateUserKey() throws Exception {

		SecretKey sk = CryptoUtils.generateRandomKey(userkey_byte_size,
				GregorianCalendar.getInstance().getTimeInMillis(), Config.get("crypt.key.keyspec"));
		return sk;
	}

	private static SecretKey getMasterKey() throws Exception {

		SecretKey sk = KeystoreUtils.getKey(masterKeyAlias);
		return sk;

	}

	private static SecretKey getUserKey(String userid) throws Exception {

		PersistenceManager pm = new PersistenceManager();
		SecretKey user_secretkey = null;

		try {
			pm.initTransaction();

			UserKey key = (UserKey) pm.getSession().get(UserKey.class, userid);
			if (key == null) {

				// TODO Questa dovrebbe dipendere dall'utente
				user_secretkey = generateUserKey();

				// Prendo la Base64 String per memorizzarla su DB
				byte[] userkey_binary = user_secretkey.getEncoded();
				String userkey_base64 = Base64.encodeBase64String(userkey_binary);

				key = new UserKey();
				key.setUserid(userid);
				key.setKey(userkey_base64);

				pm.getSession().save(key);

			} else {
				String base64key = key.getKey();
				byte[] binarykey = Base64.decodeBase64(base64key);

				user_secretkey = new SecretKeySpec(binarykey, Config.get("crypt.key.keyspec"));
			}
		} catch (HibernateException e) {
			pm.rollback();
			e.printStackTrace();
		} finally {
			pm.close();
		}

		return user_secretkey;

	}

	private static SecretKey getAppKey(String id) throws Exception {

		SecretKey sk = KeystoreUtils.getKey("appkey" + id);
		return sk;

	}

	private static SecretKey generateEncryptionKey(final String id, EncryptionLevel level) throws Exception {

		SecretKey secretkey = null;
		switch (level) {
		case USER:
			secretkey = getUserKey(id);
			break;
		case APP:
			secretkey = getAppKey(id);
			break;
		case SKIP:
		default:
			break;
		}

		SecretKey masterkey = getMasterKey();

		byte[] masterbytes = masterkey.getEncoded();
		byte[] keybytes = CryptoUtils.encryptKey(secretkey, masterbytes);
		byte[] spliced = new byte[masterbytes.length];
		System.arraycopy(keybytes, 0, spliced, 0, spliced.length);

		SecretKey sk = new SecretKeySpec(spliced, Config.get("crypt.data.keyspec"));

		return sk;

	}

	public static SecretKey getEncryptionKey(final String id, final EncryptionLevel level) {

		SecretKey encryption_key = keys.get(id);

		// Se la encryptionkey non � ancora in memoria la genero e la memorizzo
		if (encryption_key == null) {
			try {
				encryption_key = generateEncryptionKey(id, level);

				keys.put(id, encryption_key);

				Date now = GregorianCalendar.getInstance().getTime();
				long expiration_ms = now.getTime() + encryptionkeyduration_ms;
				Date expirationdate = GregorianCalendar.getInstance().getTime();
				expirationdate.setTime(expiration_ms);

				// Add a timer task to remove the encryption key when it expires
				t.schedule(new TimerTask() {

					@Override
					public void run() {
						Logger.getLogger(CryptoUtils.class.getName())
								.info("Removing encryption key for " + level.toString() + id);
						keys.remove(id);

						return;
					}
				}, expirationdate);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return encryption_key;
	}

}
