/**
 * 
 */
package it.eng.opsi.cdv.authmanager;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * @author Programmers
 *
 */
public class PasswordEncoder {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new  BCryptPasswordEncoder(11);
		System.out.println(encoder.encode("secret"));

	}

}
