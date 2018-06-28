package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.util.ArrayList;
import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class ConsentRecord {

	
	private String _id;
	@JsonRequired
	private CommonPart common_part;
	private List<ConsentRecordStatus> consentStatusRecords;
	
	private String consentSignedToken;
	
	public CommonPart getCommon_part() {
		return common_part;
	}
	public void setCommon_part(CommonPart common_part) {
		this.common_part = common_part;
	}
	public String getConsentSignedToken() {
		return consentSignedToken;
	}
	public void setConsentSignedToken(String consentSignedToken) {
		this.consentSignedToken = consentSignedToken;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public CommonPart getCommont_part() {
		return common_part;
	}
	public void setCommont_part(CommonPart common_part) {
		this.common_part = common_part;
	}

	public List<ConsentRecordStatus> getConsentStatusRecords() {
		return consentStatusRecords;
	}
	public void setConsentStatusRecords(List<ConsentRecordStatus> consentStatusRecords) {
		this.consentStatusRecords = consentStatusRecords;
	}
	public void addConsentStatusRecords(ConsentRecordStatus consentStatusRecords) {
		if (this.consentStatusRecords==null) this.consentStatusRecords=new ArrayList<ConsentRecordStatus>();
		this.consentStatusRecords.add(consentStatusRecords);
	}
}
