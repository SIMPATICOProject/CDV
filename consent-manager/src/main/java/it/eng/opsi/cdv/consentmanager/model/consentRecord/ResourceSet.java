package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class ResourceSet {
	@JsonRequired
	private String rs_id;
	@JsonRequired
	private String anonymousUsage;
	
	@JsonRequired
	private List<Dataset> dataset;
	
	
	

	public String getAnonymousUsage() {
		return anonymousUsage;
	}

	public void setAnonymousUsage(String anonymousUsage) {
		this.anonymousUsage = anonymousUsage;
	}

	public String getRs_id() {
		return rs_id;
	}

	public void setRs_id(String rs_id) {
		this.rs_id = rs_id;
	}

	public List<Dataset> getDataset() {
		return dataset;
	}

	public void setDataset(List<Dataset> dataset) {
		this.dataset = dataset;
	}

}