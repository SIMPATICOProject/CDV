package it.eng.opsi.cdv.pdatarepository.model;

import java.util.ArrayList;
import java.util.List;

public class AccountPData {

	private String accountId;
	private String name;
	private String surname;
	List<PDataEntry> pData;

	public AccountPData(String accountId, String name, String surname) {
		this.accountId = accountId;
		this.name = name;
		this.surname = surname;
		this.pData = new ArrayList<PDataEntry>();
	}

	public AccountPData(String accountId, String name, String surname, List<PDataEntry> pData) {
		this.accountId = accountId;
		this.name = name;
		this.surname = surname;
		this.pData = pData;
	}

	public String getUserId() {
		return accountId;
	}

	public void setUserId(String userId) {
		this.accountId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public List<PDataEntry> getPdata() {
		return pData;
	}

	public void setPdata(List<PDataEntry> pdata) {
		this.pData = pdata;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class UserPData {\n");
		sb.append("    conceptId: ").append(toIndentedString(accountId)).append("\n");
		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    type: ").append(toIndentedString(surname)).append("\n");
		sb.append("    pdata: [\n ");
		pData.stream().forEach(pdata -> sb.append("         " + pData.toString()).append("\n"));
		sb.append(toIndentedString("    ]\n"));
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
