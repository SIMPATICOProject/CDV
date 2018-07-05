package it.eng.opsi.cdv.accountmanager.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;

import io.jsonwebtoken.MalformedJwtException;
import it.eng.opsi.cdv.accountmanager.dao.AccountDAO;
import it.eng.opsi.cdv.accountmanager.model.AccountUtilsException;
import it.eng.opsi.cdv.accountmanager.model.ErrorResponse;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecord;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusEnum;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusRecord;
import it.eng.opsi.cdv.accountmanager.utils.DAOUtils;
import it.eng.opsi.cdv.accountmanager.utils.JWTUtils;
import it.eng.opsi.cdv.accountmanager.utils.PropertyManager;

//@Component
@Path("/internal")
public class InternalAccountService {

	private static AccountDAO dao = new AccountDAO(PropertyManager.getProperty("ACCOUNT_REPOSITORY_COLLECTION"));

	//
	// @DELETE
	// @Path("/accounts/{accountId}")
	// @Produces({ MediaType.APPLICATION_JSON })
	// public Response deleteAccount(@PathParam("accountId") String accountId) {
	//
	// try {
	// dao.deleteAccount(accountId);
	// return Response.status(Response.Status.OK).build();
	//
	// } catch (AccountNotFoundException e) {
	// ErrorResponse error = new
	// ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
	// e.getClass().getSimpleName(), e.getMessage());
	//
	// return
	// Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
	//
	// } catch (AccountManagerException e) {
	// e.printStackTrace();
	// ErrorResponse error = new ErrorResponse(
	// String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
	// e.getClass().getSimpleName(),
	// e.getMessage());
	//
	// return
	// Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
	// }
	//
	// }

	@GET
	@Path("/accounts/{accountId}/exists")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response existsAccount(@PathParam("accountId") String accountId) {

		try {

			JSONObject out = new JSONObject();
			out.put("result", dao.existsAccount(accountId));

			return Response.status(Response.Status.OK).entity(out.toString()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@POST
	@Path("/verifySLR")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response verifyServiceLinkRecord(final String input) {

		try {

			JSONObject inputJson = new JSONObject(input);
			String slrId = inputJson.getString("slrId");
			String slrToken = inputJson.getString("slrToken");
			String surrogateId = inputJson.getString("surrogateId");

			ServiceLinkRecord record = dao.getServiceLinkRecordById(slrId);
			List<ServiceLinkStatusRecord> slrStatuses = record.getServiceLinkStatusRecords();

			// JWT token checking of the input SLR token with the stored one
			JWTUtils.verifyJWT(slrToken);

			// check if SLR has active SSR
			// check if input slrId and surrogateId matches with the retrieved
			// ones
			if (slrId.equals(record.get_id()) && surrogateId.equals(record.getSurrogateId())
			// && slrStatuses.stream()
			// .filter(status ->
			// status.getServiceLinkStatus().equals(ServiceLinkStatusEnum.ACTIVE))
			// .count() != 0
					&& slrStatuses.get(slrStatuses.size() - 1).getServiceLinkStatus()
							.equals(ServiceLinkStatusEnum.ACTIVE)
					&& surrogateId.equals(record.getSurrogateId())) {

				JSONObject result = new JSONObject();
				result.put("result", "success");
				result.put("message", "The provided SLR has been verified successfully");
				result.put("accountId", record.getAccountId());
				result.put("serviceId", record.getServiceId());
				result.put("username", record.getUsername());

				return Response.status(Response.Status.OK).entity(result.toString()).build();

			} else {

				JSONObject result = new JSONObject();
				result.put("result", "failed");
				result.put("message", "The provided SLR has no active status");
				return Response.status(Response.Status.OK).entity(result.toString()).build();

			}

		} catch (JSONException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {

			System.out.println(e.getClass().toString() + ": " + e.getMessage());
			JSONObject result = new JSONObject();
			result.put("result", "failed");
			result.put("message", "The provided SLR Id does not match with any SLR");
			return Response.status(Response.Status.OK).entity(result.toString()).build();

		} catch (SecurityException | MalformedJwtException e) {

			System.out.println(e.getClass().toString() + ": " + e.getMessage());
			JSONObject result = new JSONObject();
			result.put("result", "failed");
			result.put("message", "The provided SLR JWT token is not valid");
			return Response.status(Response.Status.OK).entity(result.toString()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@POST
	@Path("/verifySLRByUsernameAndSurrogateId")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response verifyServiceLinkRecordByUsernameAndSurrogateId(final String input) {

		try {

			JSONObject inputJson = new JSONObject(input);
			String username = inputJson.getString("username");
			String surrogateId = inputJson.getString("surrogateId");

			ServiceLinkRecord record = dao.getServiceLinkRecordByUsernameAndSurrogateId(username, surrogateId);
			List<ServiceLinkStatusRecord> slrStatuses = record.getServiceLinkStatusRecords();

			// check if SLR has active SSR
			// check if input slrId and surrogateId matches with the retrieved
			// ones

			if (username.equals(record.getUsername()) && surrogateId.equals(record.getSurrogateId())
			// && slrStatuses.stream()
			// .filter(status ->
			// status.getServiceLinkStatus().equals(ServiceLinkStatusEnum.ACTIVE))
			// .count() != 0
					&& slrStatuses.get(slrStatuses.size() - 1).getServiceLinkStatus()
							.equals(ServiceLinkStatusEnum.ACTIVE)
					&& surrogateId.equals(record.getSurrogateId())) {

				JSONObject result = new JSONObject();
				result.put("result", "success");
				result.put("message", "The provided SLR has been verified successfully");
				result.put("accountId", record.getAccountId());
				result.put("serviceId", record.getServiceId());
				result.put("username", record.getUsername());

				return Response.status(Response.Status.OK).entity(result.toString()).build();

			} else {

				JSONObject result = new JSONObject();
				result.put("result", "failed");
				result.put("message", "The provided SLR has no active status");
				return Response.status(Response.Status.OK).entity(result.toString()).build();

			}

		} catch (JSONException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {

			System.out.println(e.getMessage());
			JSONObject result = new JSONObject();
			result.put("result", "failed");
			result.put("message", "The provided surrogate Id and username do not match with any SLR");
			return Response.status(Response.Status.OK).entity(result.toString()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@GET
	@Path("/accounts/{accountId}/services/{serviceId}/serviceLinks")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkRecordByUsernameAndSurrogateId(@PathParam("username") String username,
			@PathParam("surrogateId") String surrogateId) {

		try {

			ServiceLinkRecord record = dao.getServiceLinkRecordByUsernameAndSurrogateId(username, surrogateId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class))
					.build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

}
