package it.eng.opsi.cdv.datasecuritymanager.model;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;

import it.eng.opsi.cdv.datasecuritymanager.model.JsonRequired;

public class AuditLog {

	
	private String _id;
	
	private ZonedDateTime created;
	
	@JsonRequired
	private String objectJson;
	
	@JsonRequired
	private String type;
	
	@JsonRequired
	private String username;
	
	
	public ZonedDateTime getCreated() {
		return created;
	}




	public void setCreated(ZonedDateTime created) {
		this.created = created;
	}




	public String getObjectJson() {
		return objectJson;
	}




	public void setObjectJson(String objectJson) {
		this.objectJson = objectJson;
	}




	public String getType() {
		return type;
	}




	public void setType(String type) {
		this.type = type;
	}


	public String getUsername() {
		return username;
	}




	public void setUsername(String username) {
		this.username = username;
	}

	

	public AuditLog(String username, String type, String objectJson){
		this.username = username;
		this.type = type;
		this.objectJson = objectJson;
		this.created =ZonedDateTime.now(ZoneOffset.UTC);
	}
	
	
	@Override
	public String toString() {
		return "AuditLog [_id=" + _id + ", created=" + created + ", objectJson=" + objectJson + ", type=" + type + ", username=" + username + "]";
	}

}
