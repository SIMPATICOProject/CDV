package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class TokenIssuerKey{
	@JsonRequired
	String jwk;
}