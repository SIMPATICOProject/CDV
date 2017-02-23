package it.eng.opsi.cdv.accountmanager.model;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

public class ServiceLinkRecord {

	private String _id;
	private String serviceId;
	private String serviceUri;
	private String surrogateId;
	private String accountId;
	private String username;

	private ZonedDateTime created;
	private List<ServiceLinkStatusRecord> serviceLinkStatusRecords;

	public ServiceLinkRecord(String serviceId, String serviceUri, String surrogateId) {
		super();
		this.serviceId = serviceId;
		this.serviceUri = serviceUri;
		this.surrogateId = surrogateId;
		this.serviceLinkStatusRecords = new ArrayList<ServiceLinkStatusRecord>();
		this.created = ZonedDateTime.now(ZoneId.of("UTC"));
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getServiceId() {
		return serviceId;
	}

	public void setServiceId(String serviceId) {
		this.serviceId = serviceId;
	}

	public String getServiceUri() {
		return serviceUri;
	}

	public void setServiceUri(String serviceUri) {
		this.serviceUri = serviceUri;
	}

	public String getSurrogateId() {
		return surrogateId;
	}

	public void setSurrogateId(String surrogateId) {
		this.surrogateId = surrogateId;
	}

	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<ServiceLinkStatusRecord> getServiceLinkStatusRecords() {
		return serviceLinkStatusRecords;
	}

	public void setServiceLinkStatusRecords(List<ServiceLinkStatusRecord> serviceLinkStatusRecords) {
		this.serviceLinkStatusRecords = serviceLinkStatusRecords;
	}

	public ZonedDateTime getCreated() {
		return created;
	}

	public void setCreated(ZonedDateTime created) {
		this.created = created;
	}

	public void addServiceLinkStatusRecord(ServiceLinkStatusRecord statusRecord) {
		this.serviceLinkStatusRecords.add(statusRecord);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class ServiceLinkRecord {\n");
		sb.append("    serviceId ").append(toIndentedString(serviceId)).append("\n");
		sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
		sb.append("    surrogateId: ").append(toIndentedString(surrogateId)).append("\n");
		sb.append("    ServiceLinkStatusRecords: ").append("\n");
		serviceLinkStatusRecords.stream().forEach(item -> sb.append(item));
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
