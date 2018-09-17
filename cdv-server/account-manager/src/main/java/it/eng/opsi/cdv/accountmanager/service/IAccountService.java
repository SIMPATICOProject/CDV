package it.eng.opsi.cdv.accountmanager.service;

import javax.ws.rs.core.Response;

public interface IAccountService {

	public abstract Response createAccount(String input);

	public abstract Response updateAccount(String input, String accountId);

	public abstract Response deleteAccount(String accountId);

	public abstract Response getAccount(String accountId, boolean withPData);

	public abstract Response addContact(String input, String accountId);

	public abstract Response getContact(String accountId, String contactId);

	public abstract Response getContacts(String accountId);

	public abstract Response updateContact(String input, String accountId, String contactId);

	public abstract Response deleteContact(String accountId, String contactId);

	public abstract Response addEmail(String input, String accountId);

	public abstract Response getEmail(String accountId, String emailId);

	public abstract Response getEmails(String accountId);

	public abstract Response updateEmail(String input, String accountId, String emailId);

	public abstract Response deleteEmail(String accountId, String emailId);

	public abstract Response addTelephone(String input, String accountId);

	public abstract Response getTelephone(String accountId, String telephoneId);

	public abstract Response getTelephones(String accountId);

	public abstract Response updateTelephone(String input, String accountId, String telephoneId);

	public abstract Response deleteTelephone(String accountId, String telephoneId);

	public abstract Response addParticular(String input, String accountId);

	public abstract Response getParticular(String accountId);

	public abstract Response deleteParticular(String accountId);

	public abstract Response createServiceLinkRecord(String input, String accountId);

	public abstract Response disableServiceLinkRecord(String accountId, String slrId);

	public abstract Response deleteServiceLinkRecordById(String accountId, String telephoneId);

	public abstract Response deleteServiceLinkRecordBySurrogateIdAndServiceId(String surrogateId, String serviceId);

	public abstract Response getServiceLinkRecords(String accountId);

	public abstract Response getServiceLinkRecord(String accountId, String slrId);

	public abstract Response getServiceLinkRecordByServiceId(String accountId, String slrId);

	public abstract Response getServiceLinkRecordBySurrogateIdAndServiceId(String surrogateId, String serviceId);

	public abstract Response getServiceLinkRecordBySurrogateId(String surrogateId);

	public abstract Response getServiceLinkStatusRecords(String accountId, String slrId);

	public abstract Response getServiceLinkStatusRecord(String accountId, String slrId, String ssrId);

	public abstract Response verifyServiceLinkRecord(String input);

	public abstract Response existsAccount(String accountId);

	public abstract Response downloadAccountAndPData(String accountId);

}
