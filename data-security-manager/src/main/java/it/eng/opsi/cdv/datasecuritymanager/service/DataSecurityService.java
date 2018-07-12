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
package it.eng.opsi.cdv.datasecuritymanager.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.reflect.TypeToken;

import it.eng.opsi.cdv.datasecuritymanager.crypt.Crypto;
import it.eng.opsi.cdv.datasecuritymanager.crypt.annotation.Encryption.EncryptionLevel;
import it.eng.opsi.cdv.datasecuritymanager.model.ErrorResponse;
import it.eng.opsi.cdv.datasecuritymanager.model.PDataEntry;
import it.eng.opsi.cdv.datasecuritymanager.model.PDataUtilsException;
import it.eng.opsi.cdv.datasecuritymanager.model.AuditLog;
import it.eng.opsi.cdv.datasecuritymanager.utils.DAOUtils;

@Path("/internal")
public class DataSecurityService {

	@POST
	@Path("/encryptValue")
	@Consumes({ MediaType.TEXT_PLAIN })
	@Produces({ MediaType.TEXT_PLAIN })
	public static Response encryptValue(String value, @HeaderParam("accountId") String accountId) {

		String encValue;

		try {

			encValue = (String) Crypto.encryptField((Object) value, EncryptionLevel.USER, "", accountId);

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

		return Response.ok(encValue).build();

	}

	@POST
	@Path("/decryptValue")
	@Consumes({ MediaType.TEXT_PLAIN })
	@Produces({ MediaType.TEXT_PLAIN })
	public static Response decryptValue(String value, @HeaderParam("accountId") String accountId) {

		String decValue;

		try {

			decValue = (String) Crypto.decryptField((Object) value, EncryptionLevel.USER, "", accountId);

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

		return Response.ok(decValue).build();

	}

	@POST
	@Path("/encryptPData")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public static Response encryptPData(String input, @HeaderParam("accountId") String accountId) {

		try {

			PDataEntry entry = DAOUtils.json2Obj(input, PDataEntry.class);
			List<String> encValues = new ArrayList<String>();

			for (String value : entry.getValues())
				encValues.add((String) Crypto.encryptField((Object) value, EncryptionLevel.USER, "", accountId));

			entry.setValues(encValues);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(entry, PDataEntry.class)).build();

		} catch (PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@POST
	@Path("/decryptPData")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public static Response decryptPData(String input, @HeaderParam("accountId") String accountId) {

		try {

			PDataEntry entry = DAOUtils.json2Obj(input, PDataEntry.class);
			List<String> decValues = new ArrayList<String>();

			for (String value : entry.getValues())
				decValues.add((String) Crypto.decryptField((Object) value, EncryptionLevel.USER, "", accountId));

			entry.setValues(decValues);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(entry, PDataEntry.class)).build();

		} catch (PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@POST
	@Path("/decryptAuditLogList")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public static Response decryptAuditLogList(String input, @HeaderParam("accountId") String accountId) {
		try {
			List<AuditLog> entries = DAOUtils.json2Obj(input, new TypeToken<List<AuditLog>>() {
			}.getType());
			String crypted;
			String decrypted;
			for (AuditLog entry : entries) {
				crypted = entry.getObjectJson();
				decrypted = (String) Crypto.decryptField((Object) crypted, EncryptionLevel.USER, "", accountId);
				entry.setObjectJson(decrypted);
			}
			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(entries, new TypeToken<List<AuditLog>>() {
					}.getType())).build();

		} catch (PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@POST
	@Path("/encryptPDataList")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public static Response encryptPDataList(String input, @HeaderParam("accountId") String accountId) {

		List<String> encValues = null;

		try {

			List<PDataEntry> entries = DAOUtils.json2Obj(input, new TypeToken<List<PDataEntry>>() {
			}.getType());

			for (PDataEntry entry : entries) {
				encValues = new ArrayList<String>();
				for (String value : entry.getValues()) {
					encValues.add((String) Crypto.encryptField((Object) value, EncryptionLevel.USER, "", accountId));
				}
				entry.setValues(encValues);
			}

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(entries, new TypeToken<ArrayList<PDataEntry>>() {
					}.getType())).build();

		} catch (PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@POST
	@Path("/decryptPDataList")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public static Response decryptPDataList(String input, @HeaderParam("accountId") String accountId) {

		List<String> decValues = null;

		try {

			List<PDataEntry> entries = DAOUtils.json2Obj(input, new TypeToken<List<PDataEntry>>() {
			}.getType());

			for (PDataEntry entry : entries) {
				decValues = new ArrayList<String>();
				for (String value : entry.getValues()) {
					decValues.add((String) Crypto.decryptField((Object) value, EncryptionLevel.USER, "", accountId));
				}
				entry.setValues(decValues);
			}

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(entries, new TypeToken<ArrayList<PDataEntry>>() {
					}.getType())).build();

		} catch (PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

}
