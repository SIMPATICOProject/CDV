package it.eng.opsi.cdv.accountmanager.simpatico.security.config;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;


import eu.trentorise.smartcampus.profileservice.BasicProfileService;
import eu.trentorise.smartcampus.profileservice.model.BasicProfile;
import it.eng.opsi.cdv.accountmanager.dao.AccountDAO;
import it.eng.opsi.cdv.accountmanager.model.ErrorResponse;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.utils.PropertyManager;

@Provider
public class JerseyFilter implements ContainerRequestFilter {

	private static AccountDAO dao = new AccountDAO(PropertyManager.getProperty("ACCOUNT_REPOSITORY_COLLECTION"));

	@Override
	public void filter(ContainerRequestContext request) throws IOException {

		try {

			String path = request.getUriInfo().getPath();
			String method = request.getMethod();

			// Skip also the token check if the request is for an inter-module
			// API
			if (!path.toLowerCase().contains("internal")) {

				String authToken = extractToken(request);

				if (authToken != null && !authToken.isEmpty()) {

					BasicProfile basicProfile = new BasicProfileService(PropertyManager.getProperty("AAC_URL"))
							.getBasicProfile(authToken);

					// Skip further checks if the requested API is storeAccount
					// or createServiceLinkRecord
					if (!method.equalsIgnoreCase("POST")
							&& (!path.endsWith("serviceLinks") || !(path.endsWith("v1/accounts")))) {

						MultivaluedMap<String, String> pathParameters = request.getUriInfo().getPathParameters();

						// If the requested API is
						// getServiceLinkRecordBySurrogateIdAndServiceId or
						// deleteServiceLinkRecord
						if (path.endsWith("serviceLink")
								&& (method.equalsIgnoreCase("GET") || method.equalsIgnoreCase("DELETE"))) {

							// If the requested url contains services the
							// requested API is not
							// getServiceLinkRecordBySurrogateId
							if (path.contains("services")) {
								String inputSurrogateId = pathParameters.getFirst("surrogateId");
								String inputServiceId = pathParameters.getFirst("serviceId");

								dao.getServiceLinkRecordBySurrogateIdAndServiceId(inputSurrogateId, inputServiceId);
							}

						} else {

							String inputUsername = pathParameters.getFirst("accountId");

							dao.getServiceLinkRecordByUsernameAndSurrogateId(inputUsername, basicProfile.getUserId());
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

		ServiceLinkRecordNotFoundException e) {

			ErrorResponse errorResponse = new ErrorResponse("400", "ServiceLinkRecordNotFoundException",
					e.getMessage());

			request.abortWith(Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON)
					.entity(errorResponse.toJson().toString()).build());

		} catch (SecurityException e) {

			ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotValid",
					"The provided token is not valid or expired: ");

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

}
