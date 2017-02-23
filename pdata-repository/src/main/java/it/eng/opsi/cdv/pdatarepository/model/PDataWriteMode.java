package it.eng.opsi.cdv.pdatarepository.model;

public enum PDataWriteMode {

	APPEND("APPEND"), OVERWRITE("OVERWRITE");

	private String value;

	PDataWriteMode(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.valueOf(value);
	}
}
