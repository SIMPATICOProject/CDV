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
package it.eng.opsi.cdv.pdatamanager.security.config;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.apache.commons.io.IOUtils;
import org.json.JSONException;
import org.json.JSONObject;
import eu.trentorise.smartcampus.profileservice.BasicProfileService;
import eu.trentorise.smartcampus.profileservice.model.BasicProfile;
import it.eng.opsi.cdv.pdatamanager.model.ErrorResponse;
import it.eng.opsi.cdv.pdatamanager.service.PDataService;
import it.eng.opsi.cdv.pdatamanager.utils.PropertyManager;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;

@Provider
public class JerseyFilter implements ContainerRequestFilter {

	@Override
	public void filter(ContainerRequestContext request) throws IOException {

		try {

			String path = request.getUriInfo().getPath();
			String method = request.getMethod();
			if (!path.toLowerCase().contains("internal")) {

				String authToken = extractToken(request);

				if (!method.equals("OPTIONS") && authToken != null && !authToken.isEmpty()) {

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

								}

							} catch (IOException ex) {
								throw new RuntimeException(ex);
							}

						} else {
							ErrorResponse errorResponse = new ErrorResponse("400", "BadJsonRequest",
									"The input body is not a valid json");

							request.abortWith(
									Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON)
											.entity(errorResponse.toJson().toString()).build());

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
				} 
				//GEMOD - 241018 - SWAGGER
				else if (path.toLowerCase().contains("swagger")) {
					
				}
				else {
//GEMOD 161018
					ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotProvided",
							"Token was not provided");

					request.abortWith(Response.status(Response.Status.UNAUTHORIZED).type(MediaType.APPLICATION_JSON)
							.entity(errorResponse.toJson().toString()).build());

				}

			}

		} catch (SecurityException e) {

			ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotValid",
					"The provided token is not valid or expired: " + e.getMessage());

			request.abortWith(Response.status(Response.Status.UNAUTHORIZED).type(MediaType.APPLICATION_JSON)
					.entity(errorResponse.toJson().toString()).build());

			// ((HttpServletResponse) response).addHeader("Content-Type",
			// "application/json");
		} catch (JSONException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			request.abortWith(Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON)
					.entity(error.toJson().toString()).build());

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
