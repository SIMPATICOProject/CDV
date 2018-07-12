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
