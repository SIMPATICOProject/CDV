/**
 * 
 */
package it.eng.opsi.cdv.datasecuritymanager.crypt.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author ENG
 *
 */

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD) //can use in fields only.
public @interface Encryption {

	public enum EncryptionLevel {SKIP, APP, USER};
	
	//should ignore this field for encryption?
	public EncryptionLevel level() default EncryptionLevel.APP;
	
}
