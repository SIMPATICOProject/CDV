package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class DataMapping {
	@JsonRequired
	private String property;
	@JsonRequired
	private String conceptId;
	@JsonRequired
	private String name;
	@JsonRequired
	private String type;
	@JsonRequired
	private int required;
	@JsonRequired
	private int sensitive;


	public int getRequired() {
		return required;
	}

	public void setRequired(int required) {
		this.required = required;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public String getConceptId() {
		return conceptId;
	}

	public void setConceptId(String conceptId) {
		this.conceptId = conceptId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getSensitive() {
		return sensitive;
	}

	public void setSensitive(int sensitive) {
		this.sensitive = sensitive;
	}
}