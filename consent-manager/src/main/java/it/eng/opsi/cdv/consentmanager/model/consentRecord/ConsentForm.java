package it.eng.opsi.cdv.consentmanager.model.consentRecord;

public class ConsentForm {
	private String resourcesetId;
	private String sourceId;
	private String sinkId;
	private String sourceName;
	private String sinkName;
	private String sinkHumanReadbleDescription;
	private String sourceHumanReadbleDescription;
	private ResourceSet resourceSet;
	
	
	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public String getSinkName() {
		return sinkName;
	}

	public void setSinkName(String sinkName) {
		this.sinkName = sinkName;
	}

	public String getSinkHumanReadbleDescription() {
		return sinkHumanReadbleDescription;
	}

	public void setSinkHumanReadbleDescription(String sinkHumanReadbleDescription) {
		this.sinkHumanReadbleDescription = sinkHumanReadbleDescription;
	}

	public String getResourcesetId() {
		return resourcesetId;
	}

	public void setResourcesetId(String resourcesetId) {
		this.resourcesetId = resourcesetId;
	}

	public String getSourceId() {
		return sourceId;
	}

	public void setSourceId(String sourceId) {
		this.sourceId = sourceId;
	}

	public String getSinkId() {
		return sinkId;
	}

	public void setSinkId(String sinkId) {
		this.sinkId = sinkId;
	}

	public ResourceSet getResourceSet() {
		return resourceSet;
	}

	public void setResourceSet(ResourceSet resourceSet) {
		this.resourceSet = resourceSet;
	}

	@Override
	public String toString() {
		return "ConsentForm [resourcesetId=" + resourcesetId + ", sourceId=" + sourceId + ", sinkId=" + sinkId
				+ ", sourceName=" + sourceName + ", sinkName=" + sinkName + ", sinkHumanReadbleDescription="
				+ sinkHumanReadbleDescription +", sourceHumanReadbleDescription="
						+ sourceHumanReadbleDescription + "]";
	}

	public String getSourceHumanReadbleDescription() {
		return sourceHumanReadbleDescription;
	}

	public void setSourceHumanReadbleDescription(String sourceHumanReadbleDescription) {
		this.sourceHumanReadbleDescription = sourceHumanReadbleDescription;
	}
	
	
}
