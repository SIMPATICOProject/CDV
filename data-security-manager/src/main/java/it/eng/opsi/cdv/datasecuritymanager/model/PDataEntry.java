package it.eng.opsi.cdv.datasecuritymanager.model;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import it.eng.opsi.cdv.datasecuritymanager.utils.JsonRequired;


public class PDataEntry {

	@JsonRequired
	private String name;
	@JsonRequired
	private String conceptId;
	private ZonedDateTime timestamp;
	
	private String type = "http://www.w3.org/2001/XMLSchema#string";

	// PUT HERE ADDITIONAL PROPERTIES; BEFORE VALUES PROPERTY !!!

	/*
	 * TODO IMPORTANT: This property must be the last one of the class, due to
	 * the CSV logic of PDataExporter
	 */
	private List<String> values;
	/* *********************** */

	public PDataEntry() {
		this.timestamp = ZonedDateTime.now(ZoneOffset.UTC);
	}

	public PDataEntry(String conceptId, String name, String type, List<String> values, String accountId) {
		this.name = name;
		this.conceptId = conceptId;
		this.type = type;
		this.values = values;
		this.timestamp = ZonedDateTime.now(ZoneOffset.UTC);

	}

	public PDataEntry(String conceptId, String name, String type, ArrayList<String> values, ZonedDateTime timestamp,
			String accountId) {
		this.name = name;
		this.conceptId = conceptId;
		this.type = type;
		this.values = values;
		this.timestamp = timestamp;

	}

	public PDataEntry(String conceptId, String name, String type, String accountId) {
		this.name = name;
		this.conceptId = conceptId;
		this.type = type;
		this.values = new ArrayList<String>();
		this.timestamp = ZonedDateTime.ofInstant(Instant.now(), ZoneId.of("Z"));

	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getConceptId() {
		return conceptId;
	}

	public void setConceptId(String conceptID) {
		this.conceptId = conceptID;
	}

	public ZonedDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(ZonedDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<String> getValues() {
		return values;
	}

	public void setValues(List<String> values) {
		this.values = values;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class PData {\n");
		sb.append("    conceptId: ").append(toIndentedString(conceptId)).append("\n");
		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    type: ").append(toIndentedString(type)).append("\n");
		sb.append("    values: [\n ");
		values.stream().forEach(value -> sb.append("         " + toIndentedString(value)).append("\n"));
		sb.append(toIndentedString("    ]\n"));
		sb.append("timestamp: ").append(toIndentedString(timestamp)).append("\n");
		sb.append("}");
		return sb.toString();
	}

	/**
	 * Convert the given object to string with each line indented by 4 spaces
	 * (except the first line).
	 */
	private String toIndentedString(Object o) {
		if (o == null) {
			return "null";
		}
		return o.toString().replace("\n", "\n    ");
	}
}
