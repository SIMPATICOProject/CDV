package it.eng.opsi.cdv.consentmanager.service;

import javax.ws.rs.core.Response;

public interface IConsentService {
	public Response giveConsent (String consentForm, String accountId);
	public Response updateConsent ( String consent_record_sink, String consent_record_source,   String accountId);
	public Response fetchConsentForm(String accountId, String sinkId,String sourceId, String datasetId);
	public Response verifySinkConsent(String sinkConsentId);
	public Response testMongo(String accountId, String sinkId,String sourceId,String datasetId);
	public Response findAllSinkConsentRecord(String accountId);
	public Response findAllSourceConsentRecord(String accountId);
	//public Response getConsentStatusRecords(String accountId, String rs_id);
	public Response getAllConsentByAccountId(String accountId);
	public Response changeConsentRecordStatus(String accountId , String rs_id, String status);
	public Response withDrawConsentByServiceid(String serviceId);

}
