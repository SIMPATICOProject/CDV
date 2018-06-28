package it.eng.opsi.cdv.consentmanager.model.consentRecord;

import it.eng.opsi.cdv.consentmanager.utils.JsonRequired;

public class CommonPart {
	@JsonRequired
	private String version;
	@JsonRequired
	private String cr_id;
	@JsonRequired
	private String surrogate_id;
	@JsonRequired
	private RSDescription rs_description;
	@JsonRequired
	private String slr_id;
	@JsonRequired
	private String iat;
	@JsonRequired
	private String nbf;
	@JsonRequired
	private String exp;
	@JsonRequired
	private String operator;
	@JsonRequired
	private String subject_id;
	@JsonRequired
	private String role;

	private String anonymousUsage;

	



	public String getAnonymousUsage() {
		return anonymousUsage;
	}

	public void setAnonymousUsage(String anonymousUsage) {
		this.anonymousUsage = anonymousUsage;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getCr_id() {
		return cr_id;
	}

	public void setCr_id(String cr_id) {
		this.cr_id = cr_id;
	}

	public String getSurrogate_id() {
		return surrogate_id;
	}

	public void setSurrogate_id(String surrogate_id) {
		this.surrogate_id = surrogate_id;
	}

	public RSDescription getRs_description() {
		return rs_description;
	}

	public void setRs_description(RSDescription rs_description) {
		this.rs_description = rs_description;
	}

	public String getSlr_id() {
		return slr_id;
	}

	public void setSlr_id(String slr_id) {
		this.slr_id = slr_id;
	}

	public String getIat() {
		return iat;
	}

	public void setIat(String iat) {
		this.iat = iat;
	}

	public String getNbf() {
		return nbf;
	}

	public void setNbf(String nbf) {
		this.nbf = nbf;
	}

	public String getExp() {
		return exp;
	}

	public void setExp(String exp) {
		this.exp = exp;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public String getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(String subject_id) {
		this.subject_id = subject_id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}