package it.eng.opsi.cdv.accountmanager.model;

public enum TypeEnum {

	PERSONAL("Personal"), WORK("Work"), SCHOOL("School"), OTHER("Other");

	private String value;

	TypeEnum(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.valueOf(value);
	}
}
