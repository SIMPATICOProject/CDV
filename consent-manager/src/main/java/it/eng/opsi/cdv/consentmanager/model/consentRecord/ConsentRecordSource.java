package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;



public class ConsentRecordSource extends ConsentRecord{
	@JsonRequired
	private SourceRoleSpecificPart role_specific_part;
	@JsonRequired
	private SourceConsentReceiptPart consent_receipt_part;
	@JsonRequired
	private SourceExtensionPart extension_part;
	
	private List<ConsentRecordStatus> consentStatusList;
	
	public List<ConsentRecordStatus> getConsentStatusList() {
		return consentStatusList;
	}

	public SourceRoleSpecificPart getRole_specific_part() {
		return role_specific_part;
	}

	public void setRole_specific_part(SourceRoleSpecificPart role_specific_part) {
		this.role_specific_part = role_specific_part;
	}

	public SourceConsentReceiptPart getConsent_receipt_part() {
		return consent_receipt_part;
	}

	public void setConsent_receipt_part(SourceConsentReceiptPart consent_receipt_part) {
		this.consent_receipt_part = consent_receipt_part;
	}

	public SourceExtensionPart getExtension_part() {
		return extension_part;
	}

	public void setExtension_part(SourceExtensionPart extension_part) {
		this.extension_part = extension_part;
	}
	
	public void setConsentStatusList(List<ConsentRecordStatus> consentStatusList) {
		this.consentStatusList = consentStatusList;
	}
}

