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

import java.util.List;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class ConsentRecordSource extends ConsentRecord {
	@JsonRequired
	private SourceRoleSpecificPart role_specific_part;
	@JsonRequired
	private SourceConsentReceiptPart consent_receipt_part;
	@JsonRequired
	private SourceExtensionPart extension_part;

	private List<ConsentRecordStatus> consentStatusList;

	public List<ConsentRecordStatus> getConsentStatusList() {
		return consentStatusList;
	}

	public SourceRoleSpecificPart getRole_specific_part() {
		return role_specific_part;
	}

	public void setRole_specific_part(SourceRoleSpecificPart role_specific_part) {
		this.role_specific_part = role_specific_part;
	}

	public SourceConsentReceiptPart getConsent_receipt_part() {
		return consent_receipt_part;
	}

	public void setConsent_receipt_part(SourceConsentReceiptPart consent_receipt_part) {
		this.consent_receipt_part = consent_receipt_part;
	}

	public SourceExtensionPart getExtension_part() {
		return extension_part;
	}

	public void setExtension_part(SourceExtensionPart extension_part) {
		this.extension_part = extension_part;
	}

	public void setConsentStatusList(List<ConsentRecordStatus> consentStatusList) {
		this.consentStatusList = consentStatusList;
	}
}
