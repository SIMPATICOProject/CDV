package it.eng.opsi.cdv.consentmanager.model;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class Contact {

	private String _id;
	@JsonRequired
	private String address1;
	private String address2;
	
	@JsonRequired
	private String postalCode;
	
	@JsonRequired
	private String city;
	@JsonRequired
	private String state;
	@JsonRequired
	private String country;
	@JsonRequired
	private TypeEnum type;
	
	private boolean primary = true;

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public TypeEnum getType() {
		return type;
	}

	public void setType(TypeEnum type) {
		this.type = type;
	}

	public boolean isPrimary() {
		return primary;
	}

	public void setPrimary(boolean primary) {
		this.primary = primary;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Contact {\n");
		sb.append("    address1: ").append(toIndentedString(address1)).append("\n");
		sb.append("    address2: ").append(toIndentedString(address2)).append("\n");
		sb.append("    postalCode: ").append(toIndentedString(address1)).append("\n");
		sb.append("    city: ").append(toIndentedString(city)).append("\n");
		sb.append("    state: ").append(toIndentedString(state)).append("\n");
		sb.append("    country: ").append(toIndentedString(address1)).append("\n");
		sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
