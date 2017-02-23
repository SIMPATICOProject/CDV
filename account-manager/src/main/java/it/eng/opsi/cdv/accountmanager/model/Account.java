package it.eng.opsi.cdv.accountmanager.model;

import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;

public class Account {

	private String _id;
	private boolean activated = false;
	private ZonedDateTime created;
	private ZonedDateTime modified;
	
	private List<Telephone> telephones;
	private List<Email> emails;
	private List<Contact> contacts;
	private List<Particular> particulars;
	private List<ServiceLinkRecord> serviceLinkRecords;

	// Local identity
	private String username;
	private String password;

	public Account(){
	}
	
	public Account(String username, String password, List<Telephone> telephones, List<Email> emails,
			List<Contact> contacts, List<Particular> particulars) {

		this.username = username;
		this.password = password;
		this.activated = true;
		this.telephones = telephones;
		this.emails = emails;
		this.contacts = contacts;
		this.particulars = particulars;
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

	public List<Particular> getParticulars() {
		return particulars;
	}

	public void setParticulars(List<Particular> particulars) {
		this.particulars = particulars;
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
		particulars.stream().forEach(item -> sb.append(item));
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
