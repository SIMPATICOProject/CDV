package it.eng.opsi.cdv.auditlogmanager.model;

import com.google.gson.Gson;

public class ErrorResponse {

	private static Gson gson = new Gson();
	private String statusCode;
	private String title;
	private String message;


	
	public ErrorResponse(String statusCode, String title, String message) {
		this.statusCode = statusCode;
		this.title = title;
		this.message = message;
	}

	public String getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String toJson(){
		return gson.toJson(this,ErrorResponse.class);
	}
	
	
}
