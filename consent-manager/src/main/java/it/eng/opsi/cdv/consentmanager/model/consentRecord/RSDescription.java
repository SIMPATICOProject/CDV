package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class RSDescription {
	@JsonRequired
	private ResourceSet resource_set;

	public ResourceSet getResource_set() {
		return resource_set;
	}

	public void setResource_set(ResourceSet resource_set) {
		this.resource_set = resource_set;
	}
}