package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class SinkRoleSpecificPart{
	@JsonRequired
	private List <String> usage_rules;
	@JsonRequired
	private String source_cr_id;
	
	public List<String> getUsage_rules() {
		return usage_rules;
	}
	public void setUsage_rules(List<String> usage_rules) {
		this.usage_rules = usage_rules;
	}
	public String getSource_cr_id() {
		return source_cr_id;
	}
	public void setSource_cr_id(String source_cr_id) {
		this.source_cr_id = source_cr_id;
	}
}