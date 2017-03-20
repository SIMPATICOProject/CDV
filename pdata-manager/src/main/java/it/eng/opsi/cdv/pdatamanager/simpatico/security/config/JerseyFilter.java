package it.eng.opsi.cdv.pdatamanager.simpatico.security.config;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.apache.commons.io.Charsets;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;

import eu.trentorise.smartcampus.profileservice.BasicProfileService;
import eu.trentorise.smartcampus.profileservice.model.BasicProfile;
import it.eng.opsi.cdv.pdatamanager.model.ErrorResponse;
import it.eng.opsi.cdv.pdatamanager.service.PDataService;
import it.eng.opsi.cdv.pdatamanager.utils.PropertyManager;

@Provider
public class JerseyFilter implements ContainerRequestFilter {

	@Override
	public void filter(ContainerRequestContext request) throws IOException {

		try {

			String path = request.getUriInfo().getPath();
			String method = request.getMethod();
			if (!path.toLowerCase().contains("internal")) {

				String authToken = extractToken(request);

				if (!method.equals(" OPTIONS") && authToken != null && !authToken.isEmpty()) {

					BasicProfile basicProfile = new BasicProfileService(PropertyManager.getProperty("AAC_URL"))
							.getBasicProfile(authToken);

					if (method.equalsIgnoreCase("POST") && (path.contains("getPData") || path.contains("postPData"))) {

						if (isJson(request)) {
							try {
								String jsonString = IOUtils.toString(request.getEntityStream(), StandardCharsets.UTF_8);
								JSONObject jsonObj = new JSONObject(jsonString);

								// replace input stream for Jersey as we've
								// already read it
								InputStream in = IOUtils.toInputStream(jsonString, StandardCharsets.UTF_8);
								request.setEntityStream(in);

								String slrId = jsonObj.getString("slr_id");
								String surrogateId = jsonObj.getString("user_id");

								if (!surrogateId.equals(basicProfile.getUserId())) {

									ErrorResponse errorResponse = new ErrorResponse("400",
											"SurrogateIdAndTokenMismatch",
											"The provided User Id (surrogate) and the one retrieved from token mismatch");

									request.abortWith(Response.status(Response.Status.BAD_REQUEST)
											.type(MediaType.APPLICATION_JSON).entity(errorResponse.toJson().toString())
											.build());
									// HashMap<String, String> result =
									// PDataService.callVerifySLR(slrId,
									// surrogateId);
									//
									// if
									// (!result.get("result").equalsIgnoreCase("success"))
									// {
									//
									// ErrorResponse errorResponse = new
									// ErrorResponse("400", "SLRNotFound",
									// "For the provided SLR id and User Id
									// (surrogate), no active SLR was found");
									//
									// request.abortWith(Response.status(Response.Status.BAD_REQUEST)
									// .type(MediaType.APPLICATION_JSON)
									// .entity(errorResponse.toJson().toString()).build());
									//
									// }

								}

							} catch (IOException ex) {
								throw new RuntimeException(ex);
							}

						} else {
							ErrorResponse errorResponse = new ErrorResponse("400", "BadJsonRequest",
									"The input body is not a valid json");

							request.abortWith(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
									.type(MediaType.APPLICATION_JSON).entity(errorResponse.toJson().toString())
									.build());

						}

					} else {

						String inputUsername = request.getHeaderString("accountId");

						HashMap<String, String> verifyRes = PDataService
								.callVerifySLRByUsernameAndSurrogateId(inputUsername, basicProfile.getUserId());

						if (!verifyRes.get("result").equalsIgnoreCase("success")) {
							ErrorResponse errorResponse = new ErrorResponse("400", "SLRNotFound",
									"For the provided username (Account) and User Id (surrogate) from token, no active SLR was found");

							request.abortWith(
									Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON)
											.entity(errorResponse.toJson().toString()).build());

						}
					}

				} else if (method.equalsIgnoreCase("OPTIONS")) {
				} else {

					ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotProvided",
							"Token was not provided");

					request.abortWith(Response.status(Response.Status.UNAUTHORIZED).type(MediaType.APPLICATION_JSON)
							.entity(errorResponse.toJson().toString()).build());

				}

			}

		} catch (

		SecurityException e) {

			ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotValid",
					"The provided token is not valid or expired: " + e.getMessage());

			request.abortWith(Response.status(Response.Status.UNAUTHORIZED).type(MediaType.APPLICATION_JSON)
					.entity(errorResponse.toJson().toString()).build());

			// ((HttpServletResponse) response).addHeader("Content-Type",
			// "application/json");

		} catch (Exception e) {

			e.printStackTrace();

			ErrorResponse errorResponse = new ErrorResponse("500", "InternalServerError",
					"There was an internal server error");

			request.abortWith(Response.status(Response.Status.INTERNAL_SERVER_ERROR).type(MediaType.APPLICATION_JSON)
					.entity(errorResponse.toJson().toString()).build());

		}

	}

	private String extractToken(ContainerRequestContext request) {
		String completeToken = request.getHeaderString(HttpHeaders.AUTHORIZATION);
		if (completeToken == null)
			return null;
		if (completeToken.toLowerCase().startsWith("bearer")) {
			completeToken = completeToken.substring("bearer".length()).trim();
		}
		return completeToken;
	}

	boolean isJson(ContainerRequestContext request) {
		// define rules when to read body
		return request.getMediaType().toString().contains("application/json");
	}

}
