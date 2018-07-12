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
package it.eng.opsi.cdv.auditlogmanager.service;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.reflect.TypeToken;

import it.eng.opsi.cdv.auditlogmanager.dao.AuditLogDAO;
import it.eng.opsi.cdv.auditlogmanager.model.AuditLog;
import it.eng.opsi.cdv.auditlogmanager.model.AuditLogException;
import it.eng.opsi.cdv.auditlogmanager.model.ErrorResponse;
import it.eng.opsi.cdv.auditlogmanager.utils.DAOUtils;
import it.eng.opsi.cdv.auditlogmanager.utils.PropertyManager;

@Path("/v1")
public class AuditLogService implements IAuditLogService {

	private static AuditLogDAO dao = new AuditLogDAO(PropertyManager.getProperty("AUDITLOG_REPOSITORY_COLLECTION"));

	@Override
	@POST
	@Path("/internal/addlog")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addLogEntry(String input) {
		try {
			AuditLog entry = DAOUtils.json2Obj(input, AuditLog.class);
			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(PropertyManager.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/encryptValue");
			Invocation.Builder invocationBuilder = webTarget.request(MediaType.TEXT_PLAIN).header("accountId",
					entry.getUsername());
			Response response = invocationBuilder.post(Entity.entity(entry.getObjectJson(), MediaType.TEXT_PLAIN));
			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();
			if (status == 200) {
				entry.setObjectJson(res);
				dao.addAuditlog(entry);
				return Response.status(Response.Status.OK).build();
			} else {
				throw new Exception("There was an error while calling the Data Security Manager with Status: " + status
						+ " and Response: " + res + " url " + PropertyManager.getProperty("DATASECURITYMANAGER_HOST")
						+ "/api/internal/encryptValue");
			}
		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}
	}

	@Override
	@GET
	@Path("/internal/getlogs")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getLogs() {
		List<AuditLog> entries = null;
		try {
			entries = dao.getLogs();
			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(entries, new TypeToken<ArrayList<AuditLog>>() {
					}.getType())).build();
		} catch (AuditLogException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@Override
	@GET
	@Path("/internal/getlogs-by-type/{type}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getLogsByType(@PathParam("type") String type) {
		List<AuditLog> entries = null;
		try {
			entries = dao.getLogsByType(type);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(entries, new TypeToken<ArrayList<AuditLog>>() {
					}.getType())).build();
		} catch (AuditLogException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@Override
	@GET
	@Path("/getlogs-by-username-and-type/{username}/{type}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getLogsByUsernameAndType(@PathParam("username") String username, @PathParam("type") String type) {
		List<AuditLog> entries = null;
		try {
			entries = dao.getLogsByUsernameAndType(username, type);

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client.target(
					PropertyManager.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/decryptAuditLogList");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON).header("accountId",
					username);
			Response response = invocationBuilder
					.post(Entity.entity(DAOUtils.obj2Json(entries, new TypeToken<List<AuditLog>>() {
					}.getType()), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {

				/*
				 * return Response.status(Response.Status.OK) .entity(DAOUtils.json2Obj(res, new
				 * TypeToken<ArrayList<AuditLog>>() { }.getType())).build();
				 * 
				 */
				return Response.status(Response.Status.OK).entity(res).build();
			} else {
				throw new AuditLogException("There was an error while calling the Data Security Manager with Status: "
						+ status + " and Response: " + res);
			}

		} catch (AuditLogException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/getlogs-by-username/{username}/")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getLogsByUsername(@PathParam("username") String username) {
		List<AuditLog> entries = null;
		try {
			entries = dao.getLogsByUsername(username);

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client.target(
					PropertyManager.getProperty("DATASECURITYMANAGER_HOST") + "/api/internal/decryptAuditLogList");

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON).header("accountId",
					username);
			Response response = invocationBuilder
					.post(Entity.entity(DAOUtils.obj2Json(entries, new TypeToken<List<AuditLog>>() {
					}.getType()), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				/*
				 * return Response.status(Response.Status.OK) .entity(DAOUtils.json2Obj(res, new
				 * TypeToken<ArrayList<AuditLog>>() { }.getType())).build();
				 * 
				 */
				return Response.status(Response.Status.OK).entity(res).build();
			} else {
				throw new AuditLogException("There was an error while calling the Data Security Manager with Status: "
						+ status + " and Response: " + res);
			}

		} catch (AuditLogException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}
}
