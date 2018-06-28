package it.eng.opsi.cdv.auditlogmanager.model;

public enum ServiceLinkStatusEnum {

	ACTIVE("ACTIVE"), REMOVED("REMOVED");
	
	private String value;

	ServiceLinkStatusEnum(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.valueOf(value);
	}
	
	
}
