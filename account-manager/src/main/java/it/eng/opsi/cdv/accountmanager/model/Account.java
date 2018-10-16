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
package it.eng.opsi.cdv.accountmanager.model;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;

import it.eng.opsi.cdv.accountmanager.utils.JsonRequired;

public class Account {

	private String _id;

	private boolean activated = true;

	private ZonedDateTime created;
	private ZonedDateTime modified;
	private List<Telephone> telephones;
	private List<Email> emails;
	private List<Contact> contacts;
	private Particular particular;
	private List<ServiceLinkRecord> serviceLinkRecords;

	// Local identity
	@JsonRequired
	private String username;

	private String password;

	public Account() {
	}

	public Account(String username, String password, List<Telephone> telephones, List<Email> emails,
			List<Contact> contacts, Particular particular) {

		this.username = username;
		this.password = password;
		this.activated = true;
		this.telephones = telephones;
		this.emails = emails;
		this.contacts = contacts;
		this.particular = particular;
		this.created = ZonedDateTime.now(ZoneOffset.UTC);
		this.modified = ZonedDateTime.now(ZoneOffset.UTC);

	}

	public String getId() {
		return _id;
	}

	public void setId(String id) {
		this._id = id;
	}

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public ZonedDateTime getCreated() {
		return created;
	}

	public void setCreated(ZonedDateTime created) {
		this.created = created;
	}

	public ZonedDateTime getModified() {
		return modified;
	}

	public void setModified(ZonedDateTime modified) {
		this.modified = modified;
	}

	public List<Telephone> getTelephones() {
		return telephones;
	}

	public void setTelephones(List<Telephone> telephones) {
		this.telephones = telephones;
	}

	public List<Email> getEmails() {
		return emails;
	}

	public void setEmails(List<Email> emails) {
		this.emails = emails;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}

	public Particular getParticular() {
		return particular;
	}

	public void setParticular(Particular particular) {
		this.particular = particular;
	}

	public List<ServiceLinkRecord> getServiceLinkRecords() {
		return serviceLinkRecords;
	}

	public void setServiceLinkRecords(List<ServiceLinkRecord> serviceLinkRecords) {
		this.serviceLinkRecords = serviceLinkRecords;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Account {\n");
		sb.append("    _id: ").append(toIndentedString(_id)).append("\n");
		sb.append("    Particulars: ").append("\n");
		sb.append(particular);
		sb.append("    Contacts: ").append("\n");
		contacts.stream().forEach(item -> sb.append(item));
		sb.append("    Emails: ").append("\n");
		emails.stream().forEach(item -> sb.append(item));
		sb.append("    Telephones: ").append("\n");
		telephones.stream().forEach(item -> sb.append(item));
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
