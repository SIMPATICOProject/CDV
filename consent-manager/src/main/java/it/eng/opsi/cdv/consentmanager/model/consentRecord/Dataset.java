package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.util.Date;
import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class Dataset {
	private String id;
	@JsonRequired
	private String contactPoint;
	@JsonRequired
	private String description;
	@JsonRequired
	private String issued;
	@JsonRequired
	private List<String> keyword;
	@JsonRequired
	private List<String> purpose;
	@JsonRequired
	private String language;
	@JsonRequired
	private String modified;
	@JsonRequired
	private String publisher;
	@JsonRequired
	private String serviceDataType;
	@JsonRequired
	private String spatial;
	@JsonRequired
	private String title;
	@JsonRequired
	private String dataStructureSpecification;
	@JsonRequired
	private Boolean status;
	@JsonRequired
	private List<DataMapping> dataMapping;
	@JsonRequired
	private Date created;


	public String getContactPoint() {
		return contactPoint;
	}

	public void setContactPoint(String contactPoint) {
		this.contactPoint = contactPoint;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIssued() {
		return issued;
	}

	public void setIssued(String issued) {
		this.issued = issued;
	}

	public List<String> getKeyword() {
		return keyword;
	}

	public void setKeyword(List<String> keyword) {
		this.keyword = keyword;
	}

	public List<String> getPurpose() {
		return purpose;
	}

	public void setPurpose(List<String> purpose) {
		this.purpose = purpose;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getModified() {
		return modified;
	}

	public void setModified(String modified) {
		this.modified = modified;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getServiceDataType() {
		return serviceDataType;
	}

	public void setServiceDataType(String serviceDataType) {
		this.serviceDataType = serviceDataType;
	}

	public String getSpatial() {
		return spatial;
	}

	public void setSpatial(String spatial) {
		this.spatial = spatial;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDataStructureSpecification() {
		return dataStructureSpecification;
	}

	public void setDataStructureSpecification(String dataStructureSpecification) {
		this.dataStructureSpecification = dataStructureSpecification;
	}

	public List<DataMapping> getDataMapping() {
		return dataMapping;
	}

	public void setDataMapping(List<DataMapping> dataMapping) {
		this.dataMapping = dataMapping;
	}
	public String get_id() {
		return id;
	}

	public void set_id(String _id) {
		this.id = _id;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}
}
