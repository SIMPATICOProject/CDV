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
package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import java.time.ZoneId;
import java.time.ZonedDateTime;

public class ConsentRecordStatus {
	private String _id;
	private String version;
	private String surrogate_id;
	private String cr_id;
	private ConsentRecordStatusEnum consent_status;
	private ZonedDateTime issuedAt;
	private String prev_record_id;

	public ConsentRecordStatus(ConsentRecordStatusEnum consentRecordStatus) {
		super();
		this.consent_status = consentRecordStatus;
		this.issuedAt = ZonedDateTime.now(ZoneId.of("UTC"));
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getSurrogate_id() {
		return surrogate_id;
	}

	public void setSurrogate_id(String surrogate_id) {
		this.surrogate_id = surrogate_id;
	}

	public String getCr_id() {
		return cr_id;
	}

	public void setCr_id(String cr_id) {
		this.cr_id = cr_id;
	}

	public ConsentRecordStatusEnum getConsent_status() {
		return consent_status;
	}

	public void setConsent_status(ConsentRecordStatusEnum consent_status) {
		this.consent_status = consent_status;
	}

	public ZonedDateTime getIssuedAt() {
		return issuedAt;
	}

	public void setIssuedAt(ZonedDateTime issuedAt) {
		this.issuedAt = issuedAt;
	}

	public String getPrev_record_id() {
		return prev_record_id;
	}

	public void setPrev_record_id(String prev_record_id) {
		this.prev_record_id = prev_record_id;
	}
}
