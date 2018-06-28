package it.eng.opsi.cdv.auditlogmanager.service;

import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

public interface IAuditLogService {
	public  Response addLogEntry(String input);
	
	public Response getLogs();
	
	public Response getLogsByType(@PathParam("type") String type) ;
	
	public Response getLogsByUsernameAndType(@PathParam("username") String username, @PathParam("type") String type);
	
	public Response getLogsByUsername(@PathParam("username") String username) ;

}
