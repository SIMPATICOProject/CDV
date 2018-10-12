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
package it.eng.opsi.cdv.pdatamanager.service;

import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.StreamingOutput;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.google.gson.reflect.TypeToken;

import it.eng.opsi.cdv.pdatamanager.model.AccountManagerCallException;
import it.eng.opsi.cdv.pdatamanager.model.ConsentManagerCallException;
import it.eng.opsi.cdv.pdatamanager.model.DataMapping;
import it.eng.opsi.cdv.pdatamanager.model.ErrorResponse;
import it.eng.opsi.cdv.pdatamanager.model.ServiceManagerCallException;
import it.eng.opsi.cdv.pdatamanager.utils.CoberturaIgnore;
import it.eng.opsi.cdv.pdatamanager.utils.PDataConverter;
import it.eng.opsi.cdv.pdatamanager.utils.PropertyManager;
import it.eng.opsi.cdv.pdatarepository.api.PDataRepository;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatarepository.model.PDataRepositoryException;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.model.PDataWriteMode;
import it.eng.opsi.cdv.pdatarepository.utils.DAOUtils;

@Service("PDataService")

//@Component
@Path("/v1")
public class PDataService implements IPDataService {

	private static PDataRepository repo = new PDataRepository(
			PropertyManager.getProperty("PDATA_REPOSITORY_COLLECTION"), PropertyManager.getProperties());
	
	static final String api_version = "1.0";

	@POST
	@Path("/pData")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	@Override
	public Response savePData(final String input, @HeaderParam("accountId") String accountId,
			@QueryParam("mode") String modeString) {

		if (StringUtils.isNotBlank(accountId)) {

			try {

				// Check if the account exists in the Account Manager
				if (callExistsAccount(accountId)) {

					List<PDataEntry> entries = DAOUtils.json2Obj(input, new TypeToken<List<PDataEntry>>() {
					}.getType());

					// String accountId = (new
					// JSONArray(input)).getJSONObject(0).getString("accountId");
					// //
					// HeaderParam?

					PDataWriteMode mode;
					try {
						mode = PDataWriteMode.valueOf(modeString.toUpperCase());
					} catch (IllegalArgumentException | NullPointerException e) {
						mode = PDataWriteMode.OVERWRITE;
					}

					List<PDataEntry> created = null;
					if (entries.size() == 1)
						(created = new ArrayList<PDataEntry>()).add(repo.storePData(accountId, entries.get(0), mode));
					else
						created = repo.storePData(accountId, entries, mode);

					return Response.status(Response.Status.CREATED)
							.entity(DAOUtils.obj2Json(created, new TypeToken<List<PDataEntry>>() {
							}.getType())).build();

				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataUtilsException e) {
				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());
				return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

			} catch (Exception e) {
				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@GET
	@Path("/pData")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN })
	public Response getAllPData(@HeaderParam("accountId") String accountId, @QueryParam("format") String format) {

		List<PDataEntry> entries = null;
		if (StringUtils.isNotBlank(accountId)) {

			try {

				if (callExistsAccount(accountId)) {

					if (format == null || format.equalsIgnoreCase("JSON")) {

						entries = repo.getAllPData(accountId);
						return Response.status(Response.Status.OK)
								.entity(DAOUtils.obj2Json(entries, new TypeToken<ArrayList<PDataEntry>>() {
								}.getType())).build();

					} else if (format.equalsIgnoreCase("CSV")) {

						entries = repo.getAllPData(accountId);
						String result = PDataConverter.pDataToCSV(entries);
						return Response.status(Response.Status.OK).header("Content-Type", "text/plain").entity(result)
								.build();
					} else {

						ErrorResponse error = new ErrorResponse(
								String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()), "formatNotValid",
								"The specified format parameter is not valid");
						return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

					}

				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@GET
	@Path("/pData/{conceptId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getPData(@HeaderParam("accountId") String accountId, @PathParam("conceptId") String conceptId) {

		if (StringUtils.isNotBlank(accountId)) {
			try {

				if (callExistsAccount(accountId)) {

					PDataEntry entry = repo.getPData(conceptId, accountId);

					return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(entry, PDataEntry.class))
							.build();
				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@GET
	@Path("/pData/download")
	@Produces({ MediaType.APPLICATION_OCTET_STREAM, MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN })
	public Response downloadAllPData(@HeaderParam("accountId") String accountId,
			@QueryParam("fileFormat") String fileFormat) {

		List<PDataEntry> entries = null;

		if (StringUtils.isNotBlank(accountId)) {

			try {

				if (callExistsAccount(accountId)) {

					if (fileFormat == null || fileFormat.equalsIgnoreCase("JSON")) {

						entries = repo.getAllPData(accountId);
						String result = PDataConverter.pDataToJSON(entries);

						StreamingOutput stream = new StreamingOutput() {
							@Override
							public void write(OutputStream out) throws IOException, WebApplicationException {
								PrintWriter writer = new PrintWriter(new OutputStreamWriter(out));
								writer.print(result);
								writer.flush();
							}
						};

						return Response.ok(stream).header("Content-Disposition",
								"attachment;filename=" + accountId + "_PersonalData" + ".json").build();

					} else if (fileFormat.equalsIgnoreCase("CSV")) {

						entries = repo.getAllPData(accountId);
						String result = PDataConverter.pDataToCSV(entries);

						StreamingOutput stream = new StreamingOutput() {

							@Override
							public void write(OutputStream out) throws IOException, WebApplicationException {
								PrintWriter writer = new PrintWriter(new OutputStreamWriter(out));
								writer.print(result);
								writer.flush();
							}
						};

						return Response.ok(stream).header("Content-Disposition",
								"attachment;filename=" + accountId + "_PersonalData" + ".csv").build();

					} else {

						ErrorResponse error = new ErrorResponse(
								String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()), "formatNotValid",
								"The specified fileFormat parameter is not valid");
						return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

					}

				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@PUT
	@Path("/pData")
	@Produces({ "application/json" })
	@Consumes({ MediaType.APPLICATION_JSON })
	public Response updatePData(final String input, @HeaderParam("accountId") String accountId,
			@QueryParam("mode") String modeString) {

		if (StringUtils.isNotBlank(accountId)) {

			try {

				if (callExistsAccount(accountId)) {

					List<PDataEntry> entries = DAOUtils.json2Obj(input, new TypeToken<List<PDataEntry>>() {
					}.getType());
					// String accountId = (new
					// JSONArray(input)).getJSONObject(0).getString("accountId");
					// //
					// HeaderParam?

					PDataWriteMode mode;
					try {
						mode = PDataWriteMode.valueOf(modeString.toUpperCase());
					} catch (IllegalArgumentException | NullPointerException e) {
						mode = PDataWriteMode.OVERWRITE;
					}

					List<PDataEntry> updated = new ArrayList<PDataEntry>();
					for (PDataEntry entry : entries) {
						if (repo.existsPData(entry.getConceptId(), accountId))
							updated.add(repo.storePData(accountId, entry, mode));
						else
							throw new PDataNotFoundException("PData entry not found for conceptID: "
									+ entry.getConceptId() + " and accountId: " + accountId);
					}

					return Response.status(Response.Status.OK)
							.entity(DAOUtils.obj2Json(updated, new TypeToken<List<PDataEntry>>() {
							}.getType())).build();

				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@PUT
	@Path("/pData/{conceptId}")
	@Produces({ "application/json" })
	@Consumes({ MediaType.APPLICATION_JSON })
	public Response updatePData(final String input, @HeaderParam("accountId") String accountId,
			@PathParam("conceptId") String conceptId, @QueryParam("mode") String modeString) {

		if (StringUtils.isNotBlank(accountId)) {

			try {

				if (callExistsAccount(accountId)) {

					PDataEntry entry = DAOUtils.json2Obj(input, PDataEntry.class);
					// String accountId = (new
					// JSONArray(input)).getJSONObject(0).getString("accountId");
					// //
					// HeaderParam?

					PDataWriteMode mode;
					try {
						mode = PDataWriteMode.valueOf(modeString.toUpperCase());
					} catch (IllegalArgumentException | NullPointerException e) {
						mode = PDataWriteMode.OVERWRITE;
					}

					PDataEntry updated = null;
					if (repo.existsPData(entry.getConceptId(), accountId))
						updated = repo.storePData(accountId, entry, mode);
					else
						throw new PDataNotFoundException("PData entry not found for conceptID: " + entry.getConceptId()
								+ " and accountId: " + accountId);

					return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(updated, PDataEntry.class))
							.build();

				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@DELETE
	@Path("/pData/{conceptId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deletePData(@PathParam("conceptId") String conceptId, @HeaderParam("accountId") String accountId) {

		if (StringUtils.isNotBlank(accountId)) {

			try {
				if (callExistsAccount(accountId)) {

					repo.deletePData(conceptId, accountId);
					return Response.status(Response.Status.OK).build();
				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {

				System.out.println(e.getMessage());
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@DELETE
	@Path("/pData/{conceptId}/{value}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deletePDataValue(@PathParam("conceptId") String conceptId,
			@HeaderParam("accountId") String accountId, @PathParam("value") String value) {

		if (StringUtils.isNotBlank(accountId)) {

			try {
				if (callExistsAccount(accountId)) {

					repo.deletePDataValue(conceptId, accountId, value);
					return Response.status(Response.Status.OK).build();
				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}

			} catch (PDataNotFoundException e) {

				System.out.println(e.getMessage());
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}
	}

	@Override
	@DELETE
	@Path("/pData")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteAllPData(@HeaderParam("accountId") String accountId) {

		if (StringUtils.isNotBlank(accountId)) {

			try {
				if (callExistsAccount(accountId)) {

					repo.deleteAllPData(accountId);

					return Response.status(Response.Status.OK).build();

				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
							"AccountNotFound",
							"The account with Id: " + accountId + " was not found in Account Manager");
					return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
				}
			} catch (PDataNotFoundException e) {

				System.out.println(e.getMessage());
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}

	}

	@Override
	@POST
	@Path("/postPData")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response postServicePData(final String input, @QueryParam("mode") String modeString) {

		try {

			// INPUT
			JSONObject in = new JSONObject(input);
			String slrId = in.getString("slr_id");
			String slrToken = in.getString("slr_token");
			String userId = in.getString("user_id");
			JSONArray properties = in.getJSONArray("properties");
			PDataWriteMode mode;

			HashMap<String, PDataEntry> serviceMap;
			HashMap<String, String> verifyRes;
			String accountId, serviceId, verifyResult;

			try {
				mode = PDataWriteMode.valueOf(modeString.toUpperCase());
			} catch (IllegalArgumentException | NullPointerException e) {
				mode = PDataWriteMode.OVERWRITE;
			}

			// Verify SLR and get the related accountId from AccountManager
			verifyRes = callVerifySLR(slrId, slrToken, userId);
			verifyResult = verifyRes.get("result");

			if (verifyResult.equalsIgnoreCase("success")) {
				// The accountId stored by the PData Manager is the Account
				// username of Account Manager
				accountId = verifyRes.get("username");

				serviceId = verifyRes.get("serviceId");

				// Get the service Data Mapping from Service Manager
				serviceMap = callGetServiceMap(serviceId, accountId);

				// Create a new PData, according to the matched property in
				// service
				// Data Mapping

				List<PDataEntry> mappedPData = new ArrayList<PDataEntry>();

				for (int i = 0; i < properties.length(); i++) {

					JSONObject property = (JSONObject) properties.get(i);
					PDataEntry resolved = serviceMap.get(property.getString("key"));
					if (resolved != null) {
						resolved.setValues((List<String>) DAOUtils.json2Obj(property.get("values").toString(),
								new TypeToken<List<String>>() {
								}.getType()));

						mappedPData.add(resolved);
					}
				}

				repo.storePData(accountId, mappedPData, mode);

				return Response.status(Response.Status.OK).build();

			} else {

				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
						"SLRNotValid", verifyRes.get("message"));

				return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

			}

		} catch (JSONException | PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceManagerCallException | AccountManagerCallException | PDataRepositoryException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (NullPointerException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
		}

	}

	//JUNIT/MOCKITO TESTED
	@Override
	@POST
	@Path("/postPDataByConsent")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response postServicePDataByConsent(final String input, @QueryParam("mode") String modeString) {

		try {
            System.out.println(input);
			// INPUT
			JSONObject in = new JSONObject(input);
			String slrId = in.getString("slr_id");
			String slrToken = in.getString("slr_token");
			String userId = in.getString("user_id"); // userId is the surrogateId!
			String crId = in.getString("cr_id");
			String crToken = in.getString("cr_token");
			JSONArray properties = in.getJSONArray("properties");
			PDataWriteMode mode;

			HashMap<String, PDataEntry> serviceMap;
			HashMap<String, String> verifyResSLR;
			HashMap<String, String> verifyResCR;
			String accountId, verifySLRResult, verifyCRResult;

			try {
				mode = PDataWriteMode.valueOf(modeString.toUpperCase());
			} catch (IllegalArgumentException | NullPointerException e) {
				mode = PDataWriteMode.OVERWRITE;
			}

			// Verify SLR and get the related accountId from AccountManager
			verifyResSLR = callVerifySLR(slrId, slrToken, userId);			
			verifySLRResult = verifyResSLR.get("result");	

			if (verifySLRResult.equalsIgnoreCase("success")) {
					
				// The accountId stored by the PData Manager is the Account
				// username of Account Manager
				accountId = verifyResSLR.get("username");

				// verify consent receipt
				verifyResCR = callVerifyCR(slrId, crId, crToken, userId, accountId);
				verifyCRResult = verifyResCR.get("result");

				if (verifyCRResult.equalsIgnoreCase("success")) {

					List<DataMapping> responseList = (List<DataMapping>) DAOUtils
							.json2Obj(verifyResCR.get("datamapping"), new TypeToken<List<DataMapping>>() {  
							}.getType());

					// Get the service Data Mapping from Service Consent
					serviceMap = (HashMap<String, PDataEntry>) responseList.stream().collect(Collectors.toMap(
							item -> item.getProperty(),
							item -> new PDataEntry(item.getConceptId(), item.getName(), item.getType(), accountId)));

					// Create a new PData, according to the matched property in
					// service
					// Data Mapping

					List<PDataEntry> mappedPData = new ArrayList<PDataEntry>();

					for (int i = 0; i < properties.length(); i++) {

						JSONObject property = (JSONObject) properties.get(i);
						PDataEntry resolved = serviceMap.get(property.getString("key"));
						if (resolved != null) {
							
							resolved.setValues((List<String>) DAOUtils.json2Obj(property.get("values").toString(),new TypeToken<List<String>>(){}.getType()));
							mappedPData.add(resolved);
						}
					}

					repo.storePData(accountId, mappedPData, mode);

				} else {
					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
							"CRNotValid", verifyResCR.get("message"));
					return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

				}

				return Response.status(Response.Status.OK).build();

			} else {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
						"SLRNotValid", verifyResSLR.get("message"));

				return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

			}

		} catch (JSONException | PDataUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountManagerCallException | ConsentManagerCallException | PDataRepositoryException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (NullPointerException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/getPData")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServicePData(String input) {

		try {
			// INPUT
			JSONObject in = new JSONObject(input);
			String slrId = in.getString("slr_id");
			String slrToken = in.getString("slr_token");
			String userId = in.getString("user_id"); // userId is the
			// surrogateId!
			JSONArray propertiesKeys = in.getJSONArray("properties");

			HashMap<String, PDataEntry> serviceMap;
			HashMap<String, String> verifyRes;
			String accountId, serviceId, verifyResult;

			// Verify SLR and get the related accountId from AccountManager
			verifyRes = callVerifySLR(slrId, slrToken, userId);
			verifyResult = verifyRes.get("result");

			if (verifyResult.equalsIgnoreCase("success")) {

				// The accountId stored by the PData Manager is the Account
				// username of Account Manager
				accountId = verifyRes.get("username");
				serviceId = verifyRes.get("serviceId");
				// Get the service Data Mapping from Service Manager
				serviceMap = callGetServiceMap(serviceId, accountId);

				// Create a new PData, according to the matched property in
				// service
				// Data Mapping and return its values as key-value pair

				JSONArray properties = new JSONArray();

				if (propertiesKeys.length() == 0) {
					for (Entry<String, PDataEntry> entry : serviceMap.entrySet()) {

						try {
							PDataEntry repoResult = repo.getPData(entry.getValue().getConceptId(), accountId);
							JSONObject pair = new JSONObject();
							pair.put("key", entry.getKey());
							pair.put("values", repoResult.getValues());
							properties.put(pair);

						} catch (PDataNotFoundException e) {
							System.out.println(e.getMessage());
						}
					}

				} else {
					for (int i = 0; i < propertiesKeys.length(); i++) {

						String property = (String) propertiesKeys.get(i);
						PDataEntry resolved = serviceMap.get(property);

						if (resolved != null) {
							try {
								PDataEntry repoResult = repo.getPData(resolved.getConceptId(), accountId);
								JSONObject pair = new JSONObject();
								pair.put("key", property);
								pair.put("values", repoResult.getValues());
								properties.put(pair);
							} catch (PDataNotFoundException e) {
								System.out.println(e.getMessage());
							}
						}
					}
				}

				JSONObject result = new JSONObject();
				result.put("slr_id", slrId);
				result.put("user_id", userId);
				result.put("properties", properties);

				return Response.status(Response.Status.OK).entity(result.toString()).build();

			} else {

				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
						"SLRNotValid", verifyRes.get("message"));
				return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

			}
		} catch (JSONException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (PDataUtilsException | ServiceManagerCallException | AccountManagerCallException
				| PDataRepositoryException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (NullPointerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		}

	}

	//JUNIT/MOCKITO TESTED
	@Override
	@POST
	@Path("/getPDataByConsent")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServicePDataByConsent(String input) {

		try {
			// INPUT
			JSONObject in = new JSONObject(input);
			String slrId = in.getString("slr_id");
			String slrToken = in.getString("slr_token");
			String userId = in.getString("user_id"); // userId is the surrogateId!
			String crId = in.getString("cr_id");
			String crToken = in.getString("cr_token");
			JSONArray propertiesKeys = in.getJSONArray("properties");

			HashMap<String, PDataEntry> serviceMap;
			HashMap<String, String> verifyResSLR;
			HashMap<String, String> verifyResCR;
			String accountId, serviceId, verifySLRResult, verifyCRResult;

			// Verify SLR and CR and get the related accountId from AccountManager and
			// Consent Manager

			verifyResSLR = callVerifySLR(slrId, slrToken, userId);

			verifySLRResult = verifyResSLR.get("result");

			if (verifySLRResult.equalsIgnoreCase("success")) {			

				// The accountId stored by the PData Manager is the Account
				// username of Account Manager
				accountId = verifyResSLR.get("username");
				serviceId = verifyResSLR.get("serviceId");

				// verify consent receipt
				verifyResCR = callVerifyCR(slrId, crId, crToken, userId, accountId);
				verifyCRResult = verifyResCR.get("result");

				JSONArray properties = new JSONArray();

				if (verifyCRResult.equalsIgnoreCase("success")) {					
					List<DataMapping> responseList = (List<DataMapping>) DAOUtils.json2Obj(verifyResCR.get("datamapping"), new TypeToken<List<DataMapping>>(){}.getType());

					// Get the service Data Mapping from Service Consent
					serviceMap = (HashMap<String, PDataEntry>) responseList.stream().collect(Collectors.toMap(
							item -> item.getProperty(),
							item -> new PDataEntry(item.getConceptId(), item.getName(), item.getType(), accountId)));

					// Get the service Data Mapping from Service Manager
					// serviceMap = callGetServiceMap(serviceId, accountId);

					if (propertiesKeys.length() == 0) {
						for (Entry<String, PDataEntry> entry : serviceMap.entrySet()) {

							try {
								PDataEntry repoResult = repo.getPData(entry.getValue().getConceptId(), accountId);
								JSONObject pair = new JSONObject();
								pair.put("key", entry.getKey());
								pair.put("values", repoResult.getValues());
								properties.put(pair);

							} catch (PDataNotFoundException e) {
								System.out.println(e.getMessage());
							}
						}

					} else {					
						for (int i = 0; i < propertiesKeys.length(); i++) {

							String property = (String) propertiesKeys.get(i);
							PDataEntry resolved = serviceMap.get(property);

							if (resolved != null) {
								try {
									PDataEntry repoResult = repo.getPData(resolved.getConceptId(), accountId);
									JSONObject pair = new JSONObject();
									pair.put("key", property);
									pair.put("values", repoResult.getValues());
									properties.put(pair);
								} catch (PDataNotFoundException e) {
									System.out.println(e.getMessage());
								}
							}
						}
					}

				} else {	
					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
							"CRNotValid", verifyResCR.get("message"));
					return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

				}

				JSONObject result = new JSONObject();
				result.put("slr_id", slrId);
				result.put("user_id", userId);
				result.put("properties", properties);

				return Response.status(Response.Status.OK).entity(result.toString()).build();

			} else {	
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
						"SLRNotValid", verifyResSLR.get("message"));
				return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

			}
		} catch (JSONException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (PDataUtilsException | ConsentManagerCallException | AccountManagerCallException
				| PDataRepositoryException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (NullPointerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		}

	}

	
	@CoberturaIgnore
	private static HashMap<String, PDataEntry> callGetServiceMap(String serviceId, String accountId)
			throws ServiceManagerCallException, PDataRepositoryException, PDataUtilsException {

		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target(
				PropertyManager.getProperty("SERVICEMANAGER_HOST") + "/api/v1/services/{serviceId}/servicedatamapping")
				.resolveTemplate("serviceId", serviceId);
		Invocation.Builder invocationBuilder = webTarget.request();
		Response response = invocationBuilder.get();

		int status = response.getStatus();
		String res = response.readEntity(String.class);

		if (status == 200) {

			List<DataMapping> responseList = (List<DataMapping>) DAOUtils.json2Obj(res,
					new TypeToken<List<DataMapping>>() {
					}.getType());

			HashMap<String, PDataEntry> result = (HashMap<String, PDataEntry>) responseList.stream()
					.collect(Collectors.toMap(item -> item.getProperty(),
							item -> new PDataEntry(item.getConceptId(), item.getName(), item.getType(), accountId)));

			return result;

		} else
			throw new ServiceManagerCallException(
					"There was an error while retrieving Service Data Mapping from Service Manager");

	}

	
	@CoberturaIgnore
	public static HashMap<String, String> callVerifySLR(String slrId, String slrToken, String surrogateId)
			throws AccountManagerCallException {

		HashMap<String, String> result = new HashMap<String, String>();

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(PropertyManager.getProperty("ACCOUNTMANAGER_HOST") + "/api/internal/verifySLR");

			JSONObject payload = new JSONObject();
			payload.put("slrId", slrId);
			payload.put("slrToken", slrToken);
			payload.put("surrogateId", surrogateId);

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
			Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();
			JSONObject resJson = new JSONObject(res);

			if (status == 200) {
				if (resJson.getString("result").equalsIgnoreCase("success")) {
					result.put("accountId", resJson.getString("accountId"));
					result.put("serviceId", resJson.getString("serviceId"));
					result.put("username", resJson.getString("username"));
					result.put("result", resJson.getString("result"));
					result.put("message", resJson.getString("message"));

				} else {

					result.put("result", resJson.getString("result"));
					result.put("message", resJson.getString("message"));

				}
			} else {
				throw new AccountManagerCallException(
						"There was an error while verifying the SLR against Account Manager");

			}

		} catch (JSONException e) {
			e.printStackTrace();
			throw new AccountManagerCallException(
					"There was an error while verifying the SLR against Account Manager ");
		}

		return result;
	}

	@CoberturaIgnore
	public static HashMap<String, String> callVerifyCR(String slrId, String crId, String crToken, String surrogateId,
			String accountId) throws ConsentManagerCallException {

		HashMap<String, String> result = new HashMap<String, String>();

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(PropertyManager.getProperty("CONSENTMANAGER_HOST") + "/api/internal/verifySinkConsent");

			JSONObject payload = new JSONObject();
			payload.put("cr_id", crId);
			payload.put("slr_id", slrId);
			payload.put("surrogateId", surrogateId);
			payload.put("crToken", crToken);
			payload.put("accountId", accountId);

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
			Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();
			JSONObject resJson = new JSONObject(res);

			if (status == 200) {
				if (resJson.getString("result").equalsIgnoreCase("success")) {
					result.put("result", resJson.getString("result"));
					result.put("message", resJson.getString("message"));
					result.put("datamapping", resJson.getString("datamapping"));

				} else {

					result.put("result", resJson.getString("result"));
					result.put("message", resJson.getString("message"));

				}
			} else {
				throw new ConsentManagerCallException(
						"There was an error while verifying the CR against Consent Manager");

			}

		} catch (JSONException e) {
			e.printStackTrace();
			throw new ConsentManagerCallException("There was an error while verifying the CR against Consent Manager ");
		}

		return result;
	}

	@CoberturaIgnore
	public static HashMap<String, String> callVerifySLRByUsernameAndSurrogateId(String username, String surrogateId)
			throws AccountManagerCallException {

		HashMap<String, String> result = new HashMap<String, String>();

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client.target(PropertyManager.getProperty("ACCOUNTMANAGER_HOST")
					+ "/api/internal/verifySLRByUsernameAndSurrogateId");

			JSONObject payload = new JSONObject();
			payload.put("username", username);
			payload.put("surrogateId", surrogateId);

			Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
			Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();
			JSONObject resJson = new JSONObject(res);

			if (status == 200) {
				if (resJson.getString("result").equalsIgnoreCase("success")) {

					// result.put("accountId", resJson.getString("accountId"));
					result.put("serviceId", resJson.getString("serviceId"));
					result.put("username", resJson.getString("username"));
					result.put("result", resJson.getString("result"));
					result.put("message", resJson.getString("message"));

				} else {

					result.put("result", resJson.getString("result"));
					result.put("message", resJson.getString("message"));

				}
			} else {
				throw new AccountManagerCallException(
						"There was an error while verifying the SLR against Account Manager");

			}

		} catch (JSONException e) {
			e.printStackTrace();
			throw new AccountManagerCallException(
					"There was an error while verifying the SLR against Account Manager ");
		}

		return result;
	}

	@CoberturaIgnore
	private static boolean callExistsAccount(String accountId) throws AccountManagerCallException {

		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client.target(
					PropertyManager.getProperty("ACCOUNTMANAGER_HOST") + "/api/internal/accounts/{accountId}/exists")
					.resolveTemplate("accountId", accountId);

			Invocation.Builder invocationBuilder = webTarget.request();
			Response response = invocationBuilder.get();

			int status = response.getStatus();
			String res = response.readEntity(String.class);
			response.close();

			if (status == 200) {
				JSONObject resJson = new JSONObject(res);
				return resJson.getBoolean("result");

			} else {
				throw new AccountManagerCallException(
						"There was an error while calling the existsAccount service of Account Manager");

			}

		} catch (JSONException e) {
			e.printStackTrace();
			throw new AccountManagerCallException(
					"There was an error while calling the existsAccount service of Account Manager");
		}

	}

}
