package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class SourceRoleSpecificPart{
	@JsonRequired
	private PopKey pop_key;
	@JsonRequired
	private TokenIssuerKey token_issuer_key;
}