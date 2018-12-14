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
