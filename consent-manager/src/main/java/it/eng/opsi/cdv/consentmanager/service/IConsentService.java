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
package it.eng.opsi.cdv.consentmanager.service;

import javax.ws.rs.core.Response;

public interface IConsentService {
	public Response giveConsent(String consentForm, String accountId);

	public Response updateConsent(String consent_record_sink, String consent_record_source, String accountId);

	public Response fetchConsentForm(String accountId, String sinkId, String sourceId, String datasetId);

	public Response verifySinkConsent(String sinkConsentId);

	public Response testMongo(String accountId, String sinkId, String sourceId, String datasetId);

	public Response findAllSinkConsentRecord(String accountId);

	public Response findAllSourceConsentRecord(String accountId);

	// public Response getConsentStatusRecords(String accountId, String rs_id);
	public Response getAllConsentByAccountId(String accountId);

	public Response changeConsentRecordStatus(String accountId, String rs_id, String status);

	public Response withDrawConsentByServiceid(String serviceId);

	public Response getAllConsentByAccountIdSlr(String accountId, String slr);

}
