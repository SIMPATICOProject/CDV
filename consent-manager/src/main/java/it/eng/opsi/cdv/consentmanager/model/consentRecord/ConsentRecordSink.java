package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class ConsentRecordSink extends ConsentRecord{
	@JsonRequired
	private SinkRoleSpecificPart role_specific_part;
	@JsonRequired
	private SinkConsentReceiptPart consent_receipt_part;
	@JsonRequired
	private SinkExtensionPart extension_part;

	private List<ConsentRecordStatus> consentStatusList;

	public SinkRoleSpecificPart getRole_specific_part() {
		return role_specific_part;
	}

	public void setRole_specific_part(SinkRoleSpecificPart role_specific_part) {
		this.role_specific_part = role_specific_part;
	}

	public SinkConsentReceiptPart getConsent_receipt_part() {
		return consent_receipt_part;
	}

	public void setConsent_receipt_part(SinkConsentReceiptPart consent_receipt_part) {
		this.consent_receipt_part = consent_receipt_part;
	}

	public SinkExtensionPart getExtension_part() {
		return extension_part;
	}

	public void setExtension_part(SinkExtensionPart extension_part) {
		this.extension_part = extension_part;
	}

	public List<ConsentRecordStatus> getConsentStatusList() {
		return consentStatusList;
	}

	public void setConsentStatusList(List<ConsentRecordStatus> consentStatusList) {
		this.consentStatusList = consentStatusList;
	}
}