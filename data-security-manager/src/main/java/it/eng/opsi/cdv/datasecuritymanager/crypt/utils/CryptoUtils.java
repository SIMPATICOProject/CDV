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

import java.io.Serializable;
import java.security.Key;
import java.security.SecureRandom;

import javax.crypto.Cipher;
import javax.crypto.SealedObject;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

import java.util.logging.Logger;

public abstract class CryptoUtils {

	private static final Cipher cipher;
	private static final Cipher keygenerationcipher;

	private static final String algorithm = Config.get("crypt.data.algorithm");
	private static final String keyGenerationAlgorithm = Config.get("crypt.key.generation.algorithm");

	static {

		// Setup data encryption algorithm
		Cipher tmp_1 = null;
		try {
			tmp_1 = Cipher.getInstance(algorithm);
		} catch (Exception e) {
			System.out.println("Unable to initialize cipher.\n" + e);
		}
		cipher = tmp_1;
		Logger.getLogger(CryptoUtils.class.getName())
				.info("Data encryption algorithm setted up to: " + cipher.getAlgorithm());

		// Setup key generation algorithm
		Cipher tmp_2 = null;
		try {
			tmp_2 = Cipher.getInstance(keyGenerationAlgorithm);
		} catch (Exception e) {
			System.out.println("Unable to initialize key Generation Cipher.\n" + e);
		}
		keygenerationcipher = tmp_2;
		Logger.getLogger(CryptoUtils.class.getName())
				.info("Key generation algorithm setted up to: " + keygenerationcipher.getAlgorithm());

	}

	private static SecureRandom generateSecureRandom(long seed) throws Exception {

		SecureRandom rand = SecureRandom.getInstance(Config.get("crypt.securerandom.algorithm"));
		rand.setSeed(seed);

		return rand;
	}

	public static SecretKey generateRandomKey(int bytes, long seed, String algorithm) throws Exception {

		SecureRandom rand = generateSecureRandom(seed);
		byte[] keybytes = new byte[bytes];
		rand.nextBytes(keybytes);

		SecretKey sk = new SecretKeySpec(keybytes, algorithm);

		return sk;
	}

	private static byte[] encrypt(Cipher c, Key k, byte[] plain) throws Exception {

		c.init(Cipher.ENCRYPT_MODE, k);
		return c.doFinal(plain);

	}

	private static byte[] decrypt(Cipher c, Key k, byte[] ciphertext) throws Exception {

		SecretKeySpec spec = new SecretKeySpec(k.getEncoded(), Config.get("crypt.data.keyspec"));

		c.init(Cipher.DECRYPT_MODE, spec);
		byte[] decoded = c.doFinal(ciphertext);

		return decoded;
	}

	public static byte[] encryptKey(SecretKey key, byte[] data) throws Exception {

		return encrypt(keygenerationcipher, key, data);

	}

	private static String encryptData(byte[] plain, String keyid, EncryptionLevel level) throws Exception {

		String retval = null;

		switch (level) {
		case APP:
		case USER:
			SecretKey k = KeyManager.getEncryptionKey(keyid, level);
			retval = Base64.encodeBase64String(encrypt(cipher, k, plain));
			break;

		case SKIP:
		default:
			break;
		}

		return retval;

	}

	private static String decryptData(byte[] ciphertext, String keyid, EncryptionLevel level) throws Exception {

		String retval = null;

		switch (level) {
		case APP:
		case USER:
			SecretKey k = KeyManager.getEncryptionKey(keyid, level);
			retval = new String(decrypt(cipher, k, ciphertext));
			break;

		case SKIP:
		default:
			break;
		}

		return retval;
	}

	private static SealedObject encryptData(Serializable plain, String keyid, EncryptionLevel level) throws Exception {

		SealedObject retval = null;
		switch (level) {
		case APP:
		case USER:
			SecretKey k = KeyManager.getEncryptionKey(keyid, level);
			cipher.init(Cipher.ENCRYPT_MODE, k);
			retval = new SealedObject(plain, cipher);
			break;

		case SKIP:
		default:
			break;
		}

		return retval;

	}

	private static Object decryptData(SealedObject so, String userid, EncryptionLevel level) throws Exception {

		SecretKey k = KeyManager.getEncryptionKey(userid, level);
		cipher.init(Cipher.DECRYPT_MODE, k);
		Object dOriginal = so.getObject(cipher);

		return dOriginal;
	}

	public static SealedObject appDataEncryption(Serializable serValue, String appid) throws Exception {
		return encryptData(serValue, appid, EncryptionLevel.APP);
	}

	public static SealedObject userDataEncryption(Serializable serValue, String userid) throws Exception {

		return encryptData(serValue, userid, EncryptionLevel.USER);

	}

	public static String appStringEncryption(String string, String appid) throws Exception {
		return encryptData(string.getBytes(), appid, EncryptionLevel.APP);
	}

	public static String userStringEncryption(String string, String userid) throws Exception {

		return encryptData(string.getBytes(), userid, EncryptionLevel.USER);

	}

	public static Object appDataDecryption(SealedObject so, String appid) throws Exception {
		return decryptData(so, appid, EncryptionLevel.APP);
	}

	public static Object userDataDecryption(SealedObject so, String userid) throws Exception {

		return decryptData(so, userid, EncryptionLevel.USER);

	}

	public static String appStringDecryption(String string, String appid) throws Exception {
		return decryptData(string.getBytes(), appid, EncryptionLevel.APP);
	}

	public static String userStringDecryption(String string, String userid) throws Exception {

		return decryptData(string.getBytes(), userid, EncryptionLevel.USER);

	}

}
