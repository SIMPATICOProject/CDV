package it.eng.opsi.cdv.consentmanager.model.consentRecord;

public enum ConsentRecordStatusEnum {

	ACTIVE("ACTIVE"), DISABLED("DISABLED"), WITHDRAWN("WITHDRAWN");
	
	private String value;

	ConsentRecordStatusEnum(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.valueOf(value);
	}
	
	
}
