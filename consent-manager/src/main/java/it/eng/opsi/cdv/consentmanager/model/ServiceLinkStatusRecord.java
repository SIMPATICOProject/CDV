package it.eng.opsi.cdv.consentmanager.model;

import java.time.ZoneId;
import java.time.ZonedDateTime;

public class ServiceLinkStatusRecord {

	private String _id;
	private ServiceLinkStatusEnum serviceLinkStatus;
	private ZonedDateTime issuedAt;

	public ServiceLinkStatusRecord(ServiceLinkStatusEnum serviceLinkStatus) {
		super();
		this.serviceLinkStatus = serviceLinkStatus;
		this.issuedAt = ZonedDateTime.now(ZoneId.of("UTC"));
	}

	public ServiceLinkStatusEnum getServiceLinkStatus() {
		return serviceLinkStatus;
	}

	public void setServiceLinkStatus(ServiceLinkStatusEnum serviceLinkStatus) {
		this.serviceLinkStatus = serviceLinkStatus;
	}

	public ZonedDateTime getIssuedAt() {
		return issuedAt;
	}

	public void setIssuedAt(ZonedDateTime issuedAt) {
		this.issuedAt = issuedAt;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class ServiceLinkRecord {\n");
		sb.append("    serviceLinkStatus ").append(toIndentedString(serviceLinkStatus)).append("\n");
		sb.append("    issuedAt: ").append(toIndentedString(issuedAt)).append("\n");
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

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

}
