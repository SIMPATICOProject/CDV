/*******************************************************************************
 * The MIT License (MIT)
 * Copyright (c) 2016, 2018  Engineering Ingegneria Informatica S.p.A
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *******************************************************************************/
package it.eng.opsi.cdv.consentmanager.model;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.SerializedName;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class ServiceLinkRecord {

	private String _id;
	@JsonRequired
	private String serviceId;
	@JsonRequired
	private String serviceUri;
	@JsonRequired
	private String serviceName;

	@JsonRequired
	private String surrogateId;
	private String accountId;

	private String username;
	private String slrToken;

	private ZonedDateTime created;
	private List<ServiceLinkStatusRecord> serviceLinkStatusRecords;

	public ServiceLinkRecord(String serviceId, String serviceUri, String serviceName, String surrogateId) {
		super();
		this.serviceId = serviceId;
		this.serviceUri = serviceUri;
		this.serviceName = serviceName;
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

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
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

	public String getSlrToken() {
		return slrToken;
	}

	public void setSlrToken(String slrToken) {
		this.slrToken = slrToken;
	}

	public void addServiceLinkStatusRecord(ServiceLinkStatusRecord statusRecord) {
		this.serviceLinkStatusRecords.add(statusRecord);
	}

	@Override
	public String toString() {
		return "ServiceLinkRecord [_id=" + _id + ", serviceId=" + serviceId + ", serviceUri=" + serviceUri
				+ ", serviceName=" + serviceName + ", surrogateId=" + surrogateId + ", accountId=" + accountId
				+ ", username=" + username + ", slrToken=" + slrToken + ", created=" + created
				+ ", serviceLinkStatusRecords=" + serviceLinkStatusRecords + "]";
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