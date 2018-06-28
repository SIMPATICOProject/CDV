package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.time.ZoneId;
import java.time.ZonedDateTime;

public class ConsentRecordStatus {
	private String _id;
	private String version;
	private String surrogate_id;
	private String cr_id;
	private ConsentRecordStatusEnum consent_status;
	private ZonedDateTime issuedAt;
	private String prev_record_id;
	
	
	public ConsentRecordStatus(ConsentRecordStatusEnum consentRecordStatus) {
		super();
		this.consent_status = consentRecordStatus;
		this.issuedAt = ZonedDateTime.now(ZoneId.of("UTC"));
	}
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public String getSurrogate_id() {
		return surrogate_id;
	}
	public void setSurrogate_id(String surrogate_id) {
		this.surrogate_id = surrogate_id;
	}
	public String getCr_id() {
		return cr_id;
	}
	public void setCr_id(String cr_id) {
		this.cr_id = cr_id;
	}
	public ConsentRecordStatusEnum getConsent_status() {
		return consent_status;
	}
	public void setConsent_status(ConsentRecordStatusEnum consent_status) {
		this.consent_status = consent_status;
	}
	public ZonedDateTime getIssuedAt() {
		return issuedAt;
	}
	public void setIssuedAt(ZonedDateTime issuedAt) {
		this.issuedAt = issuedAt;
	}
	public String getPrev_record_id() {
		return prev_record_id;
	}
	public void setPrev_record_id(String prev_record_id) {
		this.prev_record_id = prev_record_id;
	}
}
