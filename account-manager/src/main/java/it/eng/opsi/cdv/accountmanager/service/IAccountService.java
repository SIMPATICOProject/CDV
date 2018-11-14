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

	public abstract Response getAccountReport(String accountId);

}
