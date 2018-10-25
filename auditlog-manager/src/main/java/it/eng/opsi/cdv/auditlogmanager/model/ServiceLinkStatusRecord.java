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
package it.eng.opsi.cdv.auditlogmanager.model;

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
