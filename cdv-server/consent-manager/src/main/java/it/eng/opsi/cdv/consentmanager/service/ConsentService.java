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
package it.eng.opsi.cdv.consentmanager.service;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
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

import org.bson.types.ObjectId;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import io.jsonwebtoken.MalformedJwtException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.SwaggerDefinition;
import it.eng.opsi.cdv.consentmanager.utils.CoberturaIgnore;
import it.eng.opsi.cdv.consentmanager.dao.AccountDAO;
import it.eng.opsi.cdv.consentmanager.model.AccountManagerException;
import it.eng.opsi.cdv.consentmanager.model.AccountNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.AccountUtilsException;
import it.eng.opsi.cdv.consentmanager.model.ErrorResponse;
import it.eng.opsi.cdv.consentmanager.model.ServiceLinkRecord;
import it.eng.opsi.cdv.consentmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.SinkConsentRecordNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.SourceConsentRecordNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.CommonPart;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentForm;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordSink;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordSource;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordStatus;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordStatusEnum;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.DataMapping;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.Dataset;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.RSDescription;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ResourceSet;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.SinkRoleSpecificPart;
import it.eng.opsi.cdv.consentmanager.utils.ConsentManagerException;
import it.eng.opsi.cdv.consentmanager.utils.ConsentServiceUtils;
import it.eng.opsi.cdv.consentmanager.utils.DAOUtils;
import it.eng.opsi.cdv.consentmanager.utils.JWTUtils;
import it.eng.opsi.cdv.consentmanager.utils.PropertyManager;
import it.eng.opsi.servicemanager.data.ServiceEntry;

@Service("ConsentService")

@Path("/v1")
@Api(value = "/ConsentService")
@SwaggerDefinition(
        info = @io.swagger.annotations.Info(
        		version = "1.2", 
        	    title = "Consent Manager APIs",
                description = "Technical specification of Consent Manager APIs. This APis provide functionalities for managing the Account data consents",
                license = @io.swagger.annotations.License(
                   name = "The MIT License (MIT)", 
                   url = ""
                )
        ),
        consumes = {"application/json", "application/xml"},
        produces = {"application/json", "application/xml"},
        schemes = {SwaggerDefinition.Scheme.HTTP, SwaggerDefinition.Scheme.HTTPS}
)
public class ConsentService implements IConsentService {

	private AccountDAO dao = new AccountDAO(PropertyManager.getProperty("ACCOUNT_REPOSITORY_COLLECTION"));

	private ConsentServiceUtils csu = new ConsentServiceUtils();
	
	
	@CoberturaIgnore
	@Override
	@POST
	@Path("/findConsent/serviceId")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	
	public Response withDrawConsentByServiceid(@ApiParam(name = "serviceId", value = "descrizione", required = true) @PathParam("serviceId") String serviceId) {
		return null;
	}

	@CoberturaIgnore
	@Override
	@POST
	@Path("/changeConsentRecordStatus/{accountId}/{rsid}/{status}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Changes consent status", notes = "Changes consent status", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Successful Response; Consent Record Status Changed", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "Bad request", response = ErrorResponse.class),
			 })
	@ApiImplicitParams({
		@ApiImplicitParam(name = "accountId", value = "The unique identifier of the Account", required = true, dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "rsid", value = "The unique identifier of Resource Set", required = true, dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "status", value = "the status to update: \"ACTIVE\",\"DISABLED\",\"WITHDRAWN\"", required = true, dataType = "string", paramType = "path")

	})
	public Response changeConsentRecordStatus(@PathParam("accountId") String accountId, 
			                                  @PathParam("rsid") String rs_id,
			                                  @PathParam("status") String status) {
		JSONObject details = new JSONObject();
		try {

			ConsentRecordSource cr_source = dao.findSourceConsentRecordByRes_id(rs_id, accountId);
			ConsentRecordSink cr_sink = dao.findSinkConsentRecordByRes_id(rs_id, accountId);
			String sourceId = cr_source.getCommon_part().getSubject_id();
			String sinkId = cr_sink.getCommon_part().getSubject_id();
			status = status.toUpperCase();
			if (cr_source != null) {
				List<ConsentRecordStatus> sourceStatusList = cr_source.getConsentStatusList();
				List<ConsentRecordStatus> sinkStatusList = cr_sink.getConsentStatusList();
				ConsentRecordStatus lastCSR = sourceStatusList.get(sourceStatusList.size() - 1);

				String test = "";
				Boolean validStatusSource = false;
				if (lastCSR.getConsent_status().equals(ConsentRecordStatusEnum.ACTIVE)) {

					if (status.equals(ConsentRecordStatusEnum.DISABLED.toString())
							|| status.equals(ConsentRecordStatusEnum.WITHDRAWN.toString())) {

						validStatusSource = true;
					}
				}
				if ((lastCSR.getConsent_status().equals(ConsentRecordStatusEnum.DISABLED))) {
					if (status.equals(ConsentRecordStatusEnum.ACTIVE.toString())
							|| status.equals(ConsentRecordStatusEnum.WITHDRAWN.toString())) {
						validStatusSource = true;
					}
				}
				lastCSR = sinkStatusList.get(sinkStatusList.size() - 1);
				Boolean validStatusSink = false;

				if (lastCSR.getConsent_status().equals(ConsentRecordStatusEnum.ACTIVE)) {
					if (status.equals(ConsentRecordStatusEnum.DISABLED.toString())
							|| status.equals(ConsentRecordStatusEnum.WITHDRAWN.toString())) {
						validStatusSink = true;
					}
				}
				if ((lastCSR.getConsent_status().equals(ConsentRecordStatusEnum.DISABLED))) {
					if (status.equals(ConsentRecordStatusEnum.ACTIVE.toString())
							|| status.equals(ConsentRecordStatusEnum.WITHDRAWN.toString())) {
						validStatusSink = true;
					}
				}

				if (validStatusSource && validStatusSink) {
					ConsentRecordStatus sourceCSR = new ConsentRecordStatus(
							ConsentRecordStatusEnum.valueOf(status.toUpperCase()));
					sourceStatusList.add(sourceCSR);
					cr_source.setConsentStatusList(sourceStatusList);

					ConsentRecordStatus sinkCSR = new ConsentRecordStatus(
							ConsentRecordStatusEnum.valueOf(status.toUpperCase()));
					sinkStatusList.add(sinkCSR);
					cr_source.setConsentStatusList(sinkStatusList);

					details = new JSONObject();
					details.put("method", "changeConsentRecordStatus");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation",
							"Update Status for Consent Record  Sink. Status (" + sinkCSR.getConsent_status() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					details = new JSONObject();
					details.put("method", "changeConsentRecordStatus");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation",
							"Update Status for Consent Record  Source. Status (" + sourceCSR.getConsent_status() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					String sourceSign = JWTUtils.createJWT(sourceCSR);
					cr_source.setConsentSignedToken(sourceSign);
					String sinkSign = JWTUtils.createJWT(sinkCSR);
					cr_sink.setConsentSignedToken(sinkSign);

					details = new JSONObject();
					details.put("method", "changeConsentRecordStatus");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation",
							"Sign and Store Consent Record for Sink. Consent RecordId (" + cr_source.get_id() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					details = new JSONObject();
					details.put("method", "changeConsentRecordStatus");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation",
							"Sign and Store Consent Record for Source. Consent RecordId (" + cr_source.get_id() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					// If enable and url available STORE CONSENT UPDATE IN SERVICES

					updateSinkConsentRecord(accountId, DAOUtils.obj2Json(cr_sink, ConsentRecordSink.class));

					ConsentServiceUtils.sendConsentToSinkUTILS(DAOUtils.obj2Json(cr_sink, ConsentRecordSink.class), sourceId, cr_sink
							.getCommon_part().getRs_description().getResource_set().getDataset().get(0).get_id());

					details = new JSONObject();
					details.put("method", "changeConsentRecordStatus");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Send Consent Record  to Sink (" + sinkId + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					updateSourceConsentRecord(accountId, DAOUtils.obj2Json(cr_source, ConsentRecordSource.class));
					ConsentServiceUtils.sendConsentToSourceUTILS(DAOUtils.obj2Json(cr_source, ConsentRecordSource.class), sinkId);

					details = new JSONObject();
					details.put("method", "changeConsentRecordStatus");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Send Consent Record to Source (" + sourceId + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					return Response.status(Response.Status.OK)
							.entity("{ \"Response\": \"Consent Record Status Changed\" }").build();

				} else {
					throw new ConsentManagerException(
							"Bad status changed from: " + lastCSR.getConsent_status() + "  to: " + status + test);
				}
			}
		} catch (ConsentManagerException | AccountUtilsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (ServiceLinkRecordNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (AccountManagerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		}

		return Response.status(Response.Status.BAD_REQUEST).entity("{ \"Response\": \"Generic Error\" }").build();
	}

	@Override
	@GET
	@Path("/fetchConsentForm/{accountId}/{sinkId}/{sourceId}/{datasetId}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Generates consent forms", notes = "Generates consent forms", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Successful Response; Consent Record Status Changed", response = ConsentForm.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "Bad request", response = ErrorResponse.class),
			 })
	@ApiImplicitParams({
		@ApiImplicitParam(name = "accountId", value = "The unique identifier of the Account", required = true, dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "sinkId", value = "The unique identifier of Sink Service", required = true, dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "sourceId", value = "The unique identifier of Source Service", required = true, dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "datasetId", value = "Dataset ID", required = true, dataType = "string", paramType = "path")

	})
	public Response fetchConsentForm(@PathParam("accountId") String accountId, @PathParam("sinkId") String sinkId,
			 @PathParam("sourceId") String sourceId,  @PathParam("datasetId") String datasetId) {
		List<ServiceEntry> services = new ArrayList<ServiceEntry>();
		List<DataMapping> dataMappingList = new ArrayList<DataMapping>();

		try {

			ServiceEntry sink = csu.findByIdUTILS(sinkId);
			ServiceEntry source = csu.findByIdUTILS(sourceId);

			// generate resourcesetid
			String resourcesetId = new ObjectId().toString();

			ConsentForm consentForm = new ConsentForm();
			consentForm.setSinkId(sinkId);
			consentForm.setSinkName(sink.getPublicServiceName());
			consentForm.setSinkHumanReadbleDescription(sink.getHumanReadableDescription().get(0).getDescription());
			consentForm.setSourceHumanReadbleDescription(source.getHumanReadableDescription().get(0).getDescription());

			// Simple datalist matching:
			// Sink needs A,B,C,D data
			// Source provides C,D,E,F data
			// proposeddatase provides C,D.

			/* add required fields */

			List<it.eng.opsi.servicemanager.data.DataMapping> sinkServiceDataMap = sink.getPublicServiceIsDescribedAt()
					.get(0).getDataMapping();
			List<it.eng.opsi.servicemanager.data.DataMapping> sourceServiceDataMap = source
					.getPublicServiceIsDescribedAt().get(0).getDataMapping();
			//TODO implement a matched purpose between sink and source. At moment reference to sink dataset purpose
			List<String> matchedPurpose=sink.getPublicServiceIsDescribedAt()
					.get(0).getPurpose();

			dataMappingList = getMatchedDataMap(sinkServiceDataMap, sourceServiceDataMap);

			it.eng.opsi.cdv.consentmanager.model.consentRecord.Dataset dataset = new it.eng.opsi.cdv.consentmanager.model.consentRecord.Dataset();

			dataset.set_id(datasetId);
			dataset.setDataMapping(dataMappingList);
			dataset.setStatus(true);
			dataset.setCreated(new Date());
			dataset.setPurpose(matchedPurpose);

			List<it.eng.opsi.cdv.consentmanager.model.consentRecord.Dataset> datasetLists = new ArrayList<it.eng.opsi.cdv.consentmanager.model.consentRecord.Dataset>();
			datasetLists.add(dataset);

			ResourceSet proposedResourceSet = new ResourceSet();
			proposedResourceSet.setRs_id(resourcesetId);
			proposedResourceSet.setDataset(datasetLists);

			consentForm.setResourceSet(proposedResourceSet);

			consentForm.setSourceId(sourceId);
			consentForm.setSourceName(source.getPublicServiceName());

			dao.addConsentForm(accountId, DAOUtils.obj2Json(consentForm, ConsentForm.class));

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(consentForm, ConsentForm.class).toString()).build();
		} catch (ConsentManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}
	}

	@CoberturaIgnore
	private List<DataMapping> getMatchedDataMap(List sinkServiceDataMap, List sourceServiceDataMap) {
		// TODO Auto-generated method stub

		List<DataMapping> dataMappingList = new ArrayList<DataMapping>();
		Map<String, it.eng.opsi.servicemanager.data.DataMapping> map = new HashMap<String, it.eng.opsi.servicemanager.data.DataMapping>();
		sourceServiceDataMap.forEach(e -> map.put(((it.eng.opsi.servicemanager.data.DataMapping) e).getConceptId(),
				(it.eng.opsi.servicemanager.data.DataMapping) e));

		for (Iterator iterator = sinkServiceDataMap.iterator(); iterator.hasNext();) {
			it.eng.opsi.servicemanager.data.DataMapping sdataMapping = (it.eng.opsi.servicemanager.data.DataMapping) iterator
					.next();

			if (map.containsKey(sdataMapping.getConceptId())) {

				DataMapping dataMapping = new DataMapping();
				dataMapping.setProperty(sdataMapping.getProperty());
				dataMapping.setType(sdataMapping.getType());
				dataMapping.setConceptId(sdataMapping.getConceptId());
				dataMapping.setName(sdataMapping.getName());
				dataMapping.setRequired(sdataMapping.getRequired());
				dataMapping.setSensitive(sdataMapping.getSensitive());
				dataMappingList.add(dataMapping);
			}
		}

		return dataMappingList;
	}

	@CoberturaIgnore
	@Override
	@POST
	@Path("/verifySinkConsent")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Verifies Sink Consent", notes = "Verifies Sink Consent", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			
			@io.swagger.annotations.ApiResponse(code = 200, message = "SUCCESS, verified", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal server error", response = ErrorResponse.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request", response = ErrorResponse.class) })

	@ApiImplicitParams({
			
			@ApiImplicitParam(name = "input", value = "slr plain json info: cr_id, slr_id, surrogateId, crToken, accountId", required = true, dataType = "string", paramType = "body")

	})
	public Response verifySinkConsent(@ApiParam(name = "input", value = "descrizione", required = true) final String input) {

		try {

			JSONObject inputJson = new JSONObject(input);
			String cr_id = inputJson.getString("cr_id");
			String slrId = inputJson.getString("slr_id");
			String surrogateId = inputJson.getString("surrogateId");
			String crToken = inputJson.getString("crToken");
			String accountId = inputJson.getString("accountId");

			ConsentRecordSink record = dao.getConsentRecordSinkByConsentId(accountId, cr_id);
			List<ConsentRecordStatus> crStatus = record.getConsentStatusList();

			// JWT token checking of the input CR token with the stored one

			JWTUtils.verifyJWT(crToken);

			// check if CR has active CSR
			// check if input slrId, cr_id and surrogateId matches with the retrieved
			// ones

			if (slrId.equals(record.get_id()) && surrogateId.equals(record.getCommon_part().getSurrogate_id())
					&& crStatus.get(crStatus.size() - 1).getConsent_status()
					.equals(ConsentRecordStatusEnum.ACTIVE)) {
				List<Dataset> datasets= record.getCommon_part().getRs_description().getResource_set().getDataset();
				List<DataMapping> mapping= record.getCommon_part().getRs_description().getResource_set().getDataset().get(datasets.size()-1).getDataMapping();

				String jsonMapping =  DAOUtils.obj2Json(mapping, new TypeToken<List<DataMapping>>(){}.getType());
				JSONObject result = new JSONObject();
				result.put("datamapping", jsonMapping);
				result.put("result", "success");
				result.put("message", "The provided CR has been verified successfully");
				return Response.status(Response.Status.OK).entity(result.toString()).build();

			} else {

				JSONObject result = new JSONObject();
				result.put("result", "failed");
				result.put("message", "The provided CR has no active status");
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
			result.put("message", "The provided CR Id does not match with any SLR");
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

	@CoberturaIgnore
	private ConsentRecordSink storeSinkConsentRecord(String accountId, String consentJSON) {
		ConsentRecordSink sinkCR;
		try {
			sinkCR = dao.addSinkConsentRecord(accountId, DAOUtils.json2Obj(consentJSON, ConsentRecordSink.class));
			return sinkCR;
		} catch (AccountManagerException | AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return new ConsentRecordSink();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return new ConsentRecordSink();
		}
	}

	@CoberturaIgnore
	private ConsentRecordSource storeSourceConsentRecord(String accountId, String consentJSON)
			throws ConsentManagerException, AccountUtilsException {
		ConsentRecordSource sourceCR;
		try {
			sourceCR = dao.addSourceConsentRecord(accountId, DAOUtils.json2Obj(consentJSON, ConsentRecordSource.class));
			return sourceCR;
		} catch (AccountManagerException | AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return new ConsentRecordSource();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return new ConsentRecordSource();
		}
	}

	@CoberturaIgnore
	private ConsentRecordSink updateSinkConsentRecord(String accountId, String consentJSON) {
		ConsentRecordSink sinkCR;
		try {
			sinkCR = dao.updateSinkConsentRecord(accountId, DAOUtils.json2Obj(consentJSON, ConsentRecordSink.class));
			return sinkCR;
		} catch (AccountManagerException | AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return new ConsentRecordSink();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return new ConsentRecordSink();
		}
	}

	@CoberturaIgnore
	private ConsentRecordSource updateSourceConsentRecord(String accountId, String consentJSON)
			throws ConsentManagerException, AccountUtilsException {
		ConsentRecordSource sourceCR;
		try {
			sourceCR = dao.updateSourceConsentRecord(accountId,
					DAOUtils.json2Obj(consentJSON, ConsentRecordSource.class));
			return sourceCR;
		} catch (AccountManagerException | AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return new ConsentRecordSource();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return new ConsentRecordSource();
		}
	}

	
	@CoberturaIgnore
	private ServiceEntry findDataMappingById(String serviceId) throws ConsentManagerException, AccountUtilsException {

		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client
				.target(PropertyManager.getProperty("SERVICEMANAGER_HOST") + "/api/v1/services/{id}/servicedatamapping")
				.resolveTemplate("id", serviceId);
		Invocation.Builder invocationBuilder = webTarget.request();
		Response response = invocationBuilder.get();

		int status = response.getStatus();
		String res = response.readEntity(String.class);

		if (status == 200) {

			return DAOUtils.json2Obj(res, ServiceEntry.class);

		} else {

			throw new ConsentManagerException(
					"There was an error while retrieving Service Data Mapping from Service Manager");
		}
	}

	@CoberturaIgnore
	private ServiceLinkRecord findSlrBySurrogateId(String userId, String serviceId)
			throws ConsentManagerException, AccountUtilsException {

		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client
				.target(PropertyManager.getProperty("ACCOUNTMANAGER_HOST")
						+ "/api/internal/users/{userId}/services/{serviceId}/serviceLink")
				.resolveTemplate("userId", userId).resolveTemplate("serviceId", serviceId);
		Invocation.Builder invocationBuilder = webTarget.request();
		Response response = invocationBuilder.get();

		int status = response.getStatus();
		String res = response.readEntity(String.class);

		if (status == 200) {

			return DAOUtils.json2Obj(res, ServiceLinkRecord.class);

		} else {

			throw new ConsentManagerException(
					"There was an error while retrieving Service link record from consent Manager");
		}
	}

	@CoberturaIgnore
	@POST
	@Path("/updateConsent/{accountId}")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Updates consent", notes = "Updates consent", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	
	@ApiImplicitParams({
		
		@ApiImplicitParam(name = "consent_record_sink", value = "consent record sink form", dataTypeClass = ConsentRecordSink.class, paramType = "form"),
		@ApiImplicitParam(name = "consent_record_source", value = "consent record sink form", dataTypeClass = ConsentRecordSource.class, paramType = "form"),
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path")

    })
	
	public Response updateConsent( @FormParam("consent_record_sink") String consent_record_sink,
			 @FormParam("consent_record_source") String consent_record_source,
			 @PathParam("accountId") String accountId) {
		JSONObject details = new JSONObject();
		details.put("method", "updateConsent");
		details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
		details.put("operation", "entered in updateConsent method");
		ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

		try {
			ConsentRecordSink cr_sink = DAOUtils.json2Obj(consent_record_sink, ConsentRecordSink.class);
			ConsentRecordSource cr_source = DAOUtils.json2Obj(consent_record_source, ConsentRecordSource.class);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "retrieve sinkId: " + cr_sink.getCommon_part().getCr_id() + " and  sourceId: "
					+ cr_source.getCommon_part().getCr_id());
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			// modifico il Dataset del sink
			ResourceSet rs_sink = cr_sink.getCommon_part().getRs_description().getResource_set();
			List<Dataset> list_ds_sink = rs_sink.getDataset();
			Dataset dataset_sink_new = list_ds_sink.get(list_ds_sink.size() - 1);

			dataset_sink_new.setCreated(new Date());
			dataset_sink_new.setStatus(true);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "modify sink dataset");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			// modifico il Dataset del source
			ResourceSet rs_source = cr_source.getCommon_part().getRs_description().getResource_set();
			List<Dataset> list_ds_source = rs_source.getDataset();
			Dataset dataset_source_new = list_ds_source.get(list_ds_source.size() - 1);

			dataset_source_new.setCreated(new Date());
			dataset_source_new.setStatus(true);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "modify source dataset");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			// recupero il consent record relativo all'account id preso in input memorizzato
			// nel database
			// setto lo status dell'ultimo Dataset memorizzato nel database a False e
			// aggiungo il dataset new alla lista dei data set
			ConsentRecordSink cr_sink_db = dao.getConsentRecordSinkByConsentId(accountId,
					cr_sink.getCommon_part().getCr_id());
			List<Dataset> list_ds_sink_db = cr_sink_db.getCommon_part().getRs_description().getResource_set()
					.getDataset();
			Dataset ds_sink_db = list_ds_sink_db.get(list_ds_sink_db.size() - 1);
			ds_sink_db.setStatus(false);
			list_ds_sink_db.add(dataset_sink_new);

			dao.updateSinkConsentRecord(accountId, cr_sink_db);

			// invio il consent al sink
			ServiceEntry sinkService = dao.findServiceById(cr_sink_db.getCommon_part().getSubject_id());
			String sink_service_id = sinkService.getPublicServiceID();

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "Send Consent Record  to Sink (" + cr_sink.getCommon_part().getCr_id() + ")");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "add sink dataset to sink dataset list");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			// recupero il consent record relativo all'account id preso in input memorizzato
			// nel database
			// setto lo status dell'ultimo Dataset memorizzato nel database a False e
			// aggiungo il dataset new alla lista dei data set
			ConsentRecordSource cr_source_db = dao.getConsentRecordSourceByDatasetId(accountId,
					dataset_source_new.get_id());

			List<Dataset> list_ds_source_db = cr_source_db.getCommon_part().getRs_description().getResource_set()
					.getDataset();
			Dataset ds_source_db = list_ds_source_db.get(list_ds_source_db.size() - 1);
			ds_source_db.setStatus(false);
			list_ds_source_db.add(dataset_source_new);

			dao.updateSourceConsentRecord(accountId, cr_source_db);

			// invio il consent al sink
			ServiceEntry sourceService = dao.findServiceById(cr_source_db.getCommon_part().getSubject_id());
			String source_service_id = sourceService.getPublicServiceID();

			ConsentServiceUtils.sendConsentToSinkUTILS(DAOUtils.obj2Json(cr_sink_db, ConsentRecordSink.class), source_service_id,
					dataset_sink_new.get_id());

			ConsentServiceUtils.sendConsentToSourceUTILS(DAOUtils.obj2Json(cr_source_db, ConsentRecordSource.class), sink_service_id);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "Send Consent Record  to Source (" + cr_source.getCommon_part().getCr_id() + ")");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "add source dataset to source dataset list");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			details = new JSONObject();
			details.put("method", "updateConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "exit from updateConsent method");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			return Response.status(Response.Status.CREATED)
					.entity("{ \"sink_consent_record\": " + DAOUtils.obj2Json(cr_sink_db, ConsentRecordSink.class)
					+ ", \"source_consent_record\": "
					+ DAOUtils.obj2Json(cr_source_db, ConsentRecordSource.class) + "}")
					.build();

		} catch (ServiceLinkRecordNotFoundException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		} catch (AccountNotFoundException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		} catch (AccountUtilsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}
	
	//MOCKITO/JUNIT TESTED
	@Override
	@POST
	@Path("/giveConsent/{accountId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Gives consent", notes = "Gives consent", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 202, message = "ACCEPTED, Consent already exists", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "Account Not Found", response = ErrorResponse.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error", response = ErrorResponse.class)
			
	 }
	)
	
    @ApiImplicitParams({
		
		@ApiImplicitParam(name = "consentForm", value = "Consent form", dataTypeClass = ConsentForm.class, paramType = "body"),
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path")

    })
	public Response giveConsent( String consentForm,  @PathParam("accountId") String accountId) {
		
		JSONObject details = new JSONObject();	
		details.put("method", "giveConsent");
		details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
		details.put("operation", "entered in giveConsent method");
		//GE_REFACTOR DI traceAuditLog (diverse occorrenze nel metodo) - 101018
		ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

		try {

			ConsentForm consentFormObj = DAOUtils.json2Obj(consentForm, ConsentForm.class);

			String sinkId = consentFormObj.getSinkId();
			String sourceId = consentFormObj.getSourceId();

			details = new JSONObject();
			details.put("method", "giveConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "retrieve sinkId: " + sinkId + " and  sourceId: " + sourceId);
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			ResourceSet resorceSet = consentFormObj.getResourceSet();
			String resourcesetId = resorceSet.getRs_id();

			details = new JSONObject();
			details.put("method", "giveConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "retrieve datasetId: " + resorceSet.getDataset().get(0).get_id()
					+ " and  ResourcesetId RS_ID: " + resourcesetId);
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			details = new JSONObject();
			details.put("method", "giveConsent");
			details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
			details.put("operation", "Verify that resourceSetid exists and it is not used");
			ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

			String datasetId = resorceSet.getDataset().get(0).get_id();

			// retrieve accountId consents between sinkId and sourceId by datasetId
			List<Object> consentRecords = dao.getConsentRecordsByServicendDatasetId(accountId, sinkId, sourceId,
					resorceSet.getDataset().get(0).get_id());
			ConsentRecordStatusEnum lastStatus = ConsentRecordStatusEnum.WITHDRAWN;

			ConsentRecordSink crSink=null;
			ConsentRecordSource css=null;	
			
			if (consentRecords != null) {
				crSink = (ConsentRecordSink) consentRecords.get(0); // first is ConsentRecordSink
				css = (ConsentRecordSource) consentRecords.get(1); // first is ConsentRecordSink
				// List<ConsentRecordStatus> ssrList = crs.getConsentStatusRecords();
				List<ConsentRecordStatus> ssrList = crSink.getConsentStatusList();			
				lastStatus = ssrList.get(ssrList.size() - 1).getConsent_status();
			}

			if ((consentRecords != null) && (!lastStatus.equals(ConsentRecordStatusEnum.WITHDRAWN))) {
				// check status of Consent records
				if (lastStatus.equals(ConsentRecordStatusEnum.ACTIVE)) {
					return Response.status(Response.Status.ACCEPTED).entity("{}").build();

				} else { // if (lastStatus.equals(ConsentRecordStatusEnum.DISABLED)){
					// si dovrebbe aggiungere alla lista dei consent record status per ciascun
					// consent un nouovo conent record status attivo e memorizzarlo
					
						details = new JSONObject();
						details.put("method", "updateConsent");
						details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
						details.put("operation", "retrieve sinkId: " + crSink.getCommon_part().getCr_id() + " and  sourceId: "
								+ css.getCommon_part().getCr_id());
						ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

						// modifico il Dataset del sink
						ResourceSet rs_sink = crSink.getCommon_part().getRs_description().getResource_set();
						List<Dataset> list_ds_sink = rs_sink.getDataset();
						
						//GE_REFACTOR - 091018
						//Dataset dataset_sink_new = list_ds_sink.get(list_ds_sink.size() - 1);
						int n = list_ds_sink.size() - 1;
						Dataset dataset_sink_new = list_ds_sink.get(n);

						dataset_sink_new.setCreated(new Date());
						dataset_sink_new.setStatus(true);

						// modifico il Dataset del source
						ResourceSet rs_source = css.getCommon_part().getRs_description().getResource_set();
						List<Dataset> list_ds_source = rs_source.getDataset();
						Dataset dataset_source_new = list_ds_source.get(list_ds_source.size() - 1);

						dataset_source_new.setCreated(new Date());
						dataset_source_new.setStatus(true);

						// recupero il consent record relativo all'account id preso in input memorizzato
						// nel database
						// setto lo status dell'ultimo Dataset memorizzato nel database a False e
						// aggiungo il dataset new alla lista dei data set
						ConsentRecordSink cr_sink_db = dao.getConsentRecordSinkByConsentId(accountId,
								crSink.getCommon_part().getCr_id());
						List<Dataset> list_ds_sink_db = cr_sink_db.getCommon_part().getRs_description().getResource_set()
								.getDataset();
						Dataset ds_sink_db = list_ds_sink_db.get(list_ds_sink_db.size() - 1);
						ds_sink_db.setStatus(false);
						list_ds_sink_db.add(resorceSet.getDataset().get(0));
						List<ConsentRecordStatus> crSinkStatuslist=cr_sink_db.getConsentStatusList();
						crSinkStatuslist.add(new ConsentRecordStatus(ConsentRecordStatusEnum.ACTIVE));
						dao.updateSinkConsentRecord(accountId, cr_sink_db);

						// invio il consent al sink
						ServiceEntry sinkService = dao.findServiceById(cr_sink_db.getCommon_part().getSubject_id());
						String sink_service_id = sinkService.getPublicServiceID();

						details = new JSONObject();
						details.put("method", "updateConsent");
						details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
						details.put("operation", "Send Consent Record  to Sink (" + crSink.getCommon_part().getCr_id() + ")");
						ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

						details = new JSONObject();
						details.put("method", "updateConsent");
						details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
						details.put("operation", "add sink dataset to sink dataset list");
						ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

						// recupero il consent record relativo all'account id preso in input memorizzato
						// nel database
						// setto lo status dell'ultimo Dataset memorizzato nel database a False e
						// aggiungo il dataset new alla lista dei data set
						ConsentRecordSource cr_source_db = dao.getConsentRecordSourceByDatasetId(accountId,
								dataset_source_new.get_id());

						List<Dataset> list_ds_source_db = cr_source_db.getCommon_part().getRs_description().getResource_set()
								.getDataset();
						Dataset ds_source_db = list_ds_source_db.get(list_ds_source_db.size() - 1);
						ds_source_db.setStatus(false);
						list_ds_source_db.add(resorceSet.getDataset().get(0));
						List<ConsentRecordStatus> crSourceStatuslist=cr_source_db.getConsentStatusList();
						crSourceStatuslist.add(new ConsentRecordStatus(ConsentRecordStatusEnum.ACTIVE));
						dao.updateSourceConsentRecord(accountId, cr_source_db);

						// invio il consent al sink
						ServiceEntry sourceService = dao.findServiceById(cr_source_db.getCommon_part().getSubject_id());
						String source_service_id = sourceService.getPublicServiceID();

						//GE_REFACTOR DI sendConsentToSink - 101018
						ConsentServiceUtils.sendConsentToSinkUTILS(DAOUtils.obj2Json(cr_sink_db, ConsentRecordSink.class), source_service_id,
								dataset_sink_new.get_id());

						ConsentServiceUtils.sendConsentToSourceUTILS(DAOUtils.obj2Json(cr_source_db, ConsentRecordSource.class), sink_service_id);

						details = new JSONObject();
						details.put("method", "updateConsent");
						details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
						details.put("operation", "Send Consent Record  to Source (" + css.getCommon_part().getCr_id() + ")");
						ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

						details = new JSONObject();
						details.put("method", "updateConsent");
						details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
						details.put("operation", "add source dataset to source dataset list");
						ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

						details = new JSONObject();
						details.put("method", "updateConsent");
						details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
						details.put("operation", "exit from updateConsent method");
						ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

						return Response.status(Response.Status.CREATED)
								.entity("{ \"sink_consent_record\": " + DAOUtils.obj2Json(cr_sink_db, ConsentRecordSink.class)
								+ ", \"source_consent_record\": "
								+ DAOUtils.obj2Json(cr_source_db, ConsentRecordSource.class) + "}")
								.build();	


					
				}

			} else { // dobbiamo controllare se esiste già consent record con altro dataset
				ConsentRecordSink crsiSecondDataset = dao.getConsentRecordSinkByDatasetId(accountId, datasetId);
				ConsentRecordSource crsoSecondDataset = dao.getConsentRecordSourceByDatasetId(accountId, datasetId);
				if (false /* crsiSecondDataset != null */) { // esiste un altro CR
					// cambio lo stato del CR dell'altro dataset a WITHDRAW

					ConsentRecordStatus sinkCSR = new ConsentRecordStatus(ConsentRecordStatusEnum.WITHDRAWN);
					ConsentRecordStatus sourceCSR = new ConsentRecordStatus(ConsentRecordStatusEnum.WITHDRAWN);

					List<ConsentRecordStatus> sinkStatusList = crsiSecondDataset.getConsentStatusList();
					sinkStatusList.add(sinkCSR);
					crsiSecondDataset.setConsentStatusList(sinkStatusList);

					List<ConsentRecordStatus> sourceStatusList = crsoSecondDataset.getConsentStatusList();
					sourceStatusList.add(sinkCSR);
					crsoSecondDataset.setConsentStatusList(sourceStatusList);

					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation",
							"Update Status for Consent Record  Sink. Status (" + sinkCSR.getConsent_status() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation",
							"Update Status for Consent Record  Source. Status (" + sourceCSR.getConsent_status() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					String sinkSign = JWTUtils.createJWT(crsiSecondDataset);
					String sourceSign = JWTUtils.createJWT(crsoSecondDataset);
					crsiSecondDataset.setConsentSignedToken(sinkSign);
					crsoSecondDataset.setConsentSignedToken(sourceSign);

					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Sign and Store Consent Record for Sink. Consent RecordId ("
							+ crsiSecondDataset.get_id() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Sign and Store Consent Record for Source. Consent RecordId ("
							+ crsoSecondDataset.get_id() + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					// storeSinkConsentRecord(accountId, DAOUtils.obj2Json(crsiSecondDataset,
					// ConsentRecordSink.class));
					// storeSourceConsentRecord(accountId, DAOUtils.obj2Json(crsoSecondDataset,
					// ConsentRecordSource.class));
					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Update Consent Record  Sink. Sink (" + sinkId + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Update Consent Record  Source. Source (" + sourceId + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

					updateSinkConsentRecord(accountId, DAOUtils.obj2Json(crsiSecondDataset, ConsentRecordSink.class));
					// URL USE ONLY FOR SELECT 4TH ITERATION. TO BE DELETED AS SOON AS POSSIBLE
					// URL TO STORE CONSENT IN SERVICES
					ConsentServiceUtils.sendConsentToSinkUTILS(DAOUtils.obj2Json(crsiSecondDataset, ConsentRecordSink.class), sourceId,
							crsiSecondDataset.getCommon_part().getRs_description().getResource_set().getDataset()
							.get(0).get_id());
					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Send Consent Record  to Sink (" + sinkId + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);
					// END TO BE REMOVED

					updateSourceConsentRecord(accountId,
							DAOUtils.obj2Json(crsoSecondDataset, ConsentRecordSource.class));
					// URL USE ONLY FOR SELECT 4TH ITERATION. TO BE DELETED AS SOON AS POSSIBLE
					// URL TO STORE CONSENT IN SERVICES
					ConsentServiceUtils.sendConsentToSourceUTILS(DAOUtils.obj2Json(crsoSecondDataset, ConsentRecordSource.class), sinkId);
					details = new JSONObject();
					details.put("method", "giveConsent");
					details.put("date",
							new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
					details.put("operation", "Send Consent Record to Source (" + sourceId + ")");
					ConsentServiceUtils.traceAuditLogUTILS(accountId, details);
					// END TO BE REMOVED
				}

				// creo i CR
				// ServiceLinkRecord sinkSLR = findSlrBySurrogateId(accountId + "." + sinkId,
				// sinkId);
				// ServiceLinkRecord sourceSLR = findSlrBySurrogateId(accountId + "." +
				// sourceId, sourceId);

				ServiceLinkRecord sinkSLR = dao.getServiceLinkRecordByServiceId(accountId, sinkId);
				ServiceLinkRecord sourceSLR = dao.getServiceLinkRecordByServiceId(accountId, sourceId);
				//GE - Refactor 101018
				ServiceEntry sinkService = csu.findByIdUTILS(sinkId); 
				ServiceEntry sourceService = csu.findByIdUTILS(sourceId); 
				//GE - Refactor 101018
				RSDescription rs = new RSDescription();
				rs.setResource_set(resorceSet);

				String source_cr_id = new ObjectId().toString();
				String sink_cr_id = new ObjectId().toString();

				CommonPart sourceCommonPart = new CommonPart();
				sourceCommonPart.setVersion("");
				sourceCommonPart.setCr_id(source_cr_id);
				sourceCommonPart.setSurrogate_id(sourceSLR.getSurrogateId());
				sourceCommonPart.setSlr_id(sourceSLR.get_id());
				sourceCommonPart.setIat(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSSSS").format(new Date()));
				sourceCommonPart.setOperator("_cdv");
				String ap = sourceService.getPublicServiceID();
				sourceCommonPart.setSubject_id(ap);
				sourceCommonPart.setRole("source");
				sourceCommonPart.setRs_description(rs);
				sourceCommonPart.setAnonymousUsage(consentFormObj.getResourceSet().getAnonymousUsage());

				CommonPart sinkCommonPart = new CommonPart();
				sinkCommonPart.setVersion("");
				// sinkCommonPart.setCr_id(resourcesetId);
				sinkCommonPart.setCr_id(sink_cr_id);
				sinkCommonPart.setSurrogate_id(sinkSLR.getSurrogateId());
				sinkCommonPart.setSlr_id(sinkSLR.get_id());
				sinkCommonPart.setIat(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSSSS").format(new Date()));
				sinkCommonPart.setOperator("_cdv");
				sinkCommonPart.setSubject_id(sinkService.getPublicServiceID());
				sinkCommonPart.setRole("sink");
				sinkCommonPart.setRs_description(rs);
				sinkCommonPart.setAnonymousUsage(consentFormObj.getResourceSet().getAnonymousUsage());

				SinkRoleSpecificPart sinkRoleSpecificPart = new SinkRoleSpecificPart();
				sinkRoleSpecificPart.setSource_cr_id(source_cr_id);

				ConsentRecordStatus sinkstatusRecord = new ConsentRecordStatus(ConsentRecordStatusEnum.ACTIVE);
				ConsentRecordStatus sourceStatusRecord = new ConsentRecordStatus(ConsentRecordStatusEnum.ACTIVE);

				ConsentRecordSink crk = new ConsentRecordSink();
				crk.setCommont_part(sinkCommonPart);
				List<ConsentRecordStatus> status = new ArrayList<ConsentRecordStatus>();
				status.add(sinkstatusRecord);
				crk.setConsentStatusList(status);

				ConsentRecordSource crs = new ConsentRecordSource();
				crs.setCommont_part(sourceCommonPart);
				status.clear();
				status.add(sourceStatusRecord);
				crs.setConsentStatusList(status);

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "Update Status for Consent Record  Sink. Status ("
						+ sinkstatusRecord.getConsent_status() + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "Update Status for Consent Record  Source. Status ("
						+ sinkstatusRecord.getConsent_status() + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				String sinkSign = JWTUtils.createJWT(crk);
				String sourceSign = JWTUtils.createJWT(crs);

				crk.setConsentSignedToken(sinkSign);
				crs.setConsentSignedToken(sourceSign);

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation",
						"Sign and Store Consent Record for Sink. Consent RecordId (" + crk.get_id() + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation",
						"Sign and Store Consent Record for Source. Consent RecordId (" + crs.get_id() + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				storeSinkConsentRecord(accountId, DAOUtils.obj2Json(crk, ConsentRecordSink.class));
				// URL USE ONLY FOR SELECT 4TH ITERATION. TO BE DELETED AS SOON AS POSSIBLE
				// URL TO STORE CONSENT IN SERVICES
				ConsentServiceUtils.sendConsentToSinkUTILS(DAOUtils.obj2Json(crk, ConsentRecordSink.class), sourceId,
						resorceSet.getDataset().get(0).get_id());
				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "Send Consent Record  to Sink (" + sinkId + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);
				// END TO BE REMOVED

				storeSourceConsentRecord(accountId, DAOUtils.obj2Json(crs, ConsentRecordSource.class));
				// URL USE ONLY FOR SELECT 4TH ITERATION. TO BE DELETED AS SOON AS POSSIBLE
				// URL TO STORE CONSENT IN SERVICES
				ConsentServiceUtils.sendConsentToSourceUTILS(DAOUtils.obj2Json(crs, ConsentRecordSource.class), sinkId);
				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "Send Consent Record to Source (" + sourceId + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);
				// END TO BE REMOVED

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "Create Consent Record  Sink. Sink (" + sinkId + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "Create Consent Record  Source. Source (" + sourceId + ")");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				details = new JSONObject();
				details.put("method", "giveConsent");
				details.put("date", new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
				details.put("operation", "exit from giveConsent method");
				ConsentServiceUtils.traceAuditLogUTILS(accountId, details);

				return Response.status(Response.Status.CREATED)
						.entity("{ \"sink_consent_record\": " + DAOUtils.obj2Json(crk, ConsentRecordSink.class)
						+ ", \"source_consent_record\": " + DAOUtils.obj2Json(crs, ConsentRecordSource.class)
						+ "}")
						.build();
			}

		} catch (ConsentManagerException | AccountUtilsException e) { 
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		} catch (ServiceLinkRecordNotFoundException  e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
		} catch (AccountManagerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}
		
	}

	@CoberturaIgnore
	@Override
	@GET
	@Path("/sinkConsentRecords/{accountId}/")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Get All Sink consents", notes = "Get All Sink consents", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "OK", response = ConsentRecordSink.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST"),
			@io.swagger.annotations.ApiResponse(code = 404, message = "Account Not Found"),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error")
			
	  }
	)
	
    @ApiImplicitParams({
		
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path")

    })
	public Response findAllSinkConsentRecord(@PathParam("accountId") String accountId) {

		try {

			List<ConsentRecordSink> consentRecordSink = dao.getSinkConsentRecords(accountId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(consentRecordSink, new TypeToken<ArrayList<ConsentRecordSink>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (SinkConsentRecordNotFoundException e) {
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

	@CoberturaIgnore
	@Override
	@GET
	@Path("/sourceConsentRecords/{accountId}/")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Get All Source consents", notes = "Get All Source consents", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "OK", response = ConsentRecordSink.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST"),
			@io.swagger.annotations.ApiResponse(code = 404, message = "Account Not Found"),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error")
			
	  }
	)
	
    @ApiImplicitParams({
		
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path")

    })
	public Response findAllSourceConsentRecord(@PathParam("accountId") String accountId) {

		try {

			List<ConsentRecordSource> consentRecordSource = dao.getSourceConsentRecords(accountId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(consentRecordSource, new TypeToken<ArrayList<ConsentRecordSource>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (SourceConsentRecordNotFoundException e) {
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

	@CoberturaIgnore
	@Override
	@GET
	@Path("/consents/{accountId}/")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Get All  consents", notes = "Get All  consents", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "OK", response = ConsentRecordSink.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST"),
			@io.swagger.annotations.ApiResponse(code = 404, message = "Account Not Found"),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error")
			
	  }
	)
	
    @ApiImplicitParams({
		
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path")

    })
	public Response getAllConsentByAccountId( @PathParam("accountId") String accountId) {

		List<ConsentRecordSink> consentRecordSink;
		List consentData = new ArrayList();
		try {
			consentRecordSink = dao.getSinkConsentRecords(accountId);

			for (ConsentRecordSink crk : consentRecordSink) {

				Map m = new HashMap();
				ConsentRecordSource crs = dao.findSourceConsentRecordByRes_id(
						crk.getCommon_part().getRs_description().getResource_set().getRs_id(), accountId);

				String slr_id = crk.getCommon_part().getSlr_id();

				ServiceEntry sinkService = csu.findByIdUTILS(crk.getCommon_part().getSubject_id());
				ServiceEntry sourceService = csu.findByIdUTILS(crs.getCommon_part().getSubject_id());

				m.put("sinkService", sinkService);
				m.put("sourceService", sourceService);
				m.put("rs_id", crk.getCommon_part().getRs_description().getResource_set().getRs_id());
				m.put("account_id", accountId);
				m.put("sink", crk);
				m.put("source", crs);
				consentData.add(m);

			}

			String array = new Gson().toJson(consentData);

			return Response.status(Response.Status.OK).entity(array).build();

		} catch (AccountUtilsException e) {

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

	@CoberturaIgnore
	@Override
	@GET
	@Path("/consents/{accountId}/{slr}")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Get All  consents by SLR", notes = "Get All  consents by SLR", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "OK", response = ConsentRecordSink.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST"),
			@io.swagger.annotations.ApiResponse(code = 404, message = "Account Not Found"),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error")
			
	  }
	)
	
    @ApiImplicitParams({		
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "slr", value = "slr ID", dataType = "string", paramType = "path")
    })
	
	public Response getAllConsentByAccountIdSlr( @PathParam("accountId") String accountId,
			@PathParam("slr") String slr) {

		List<ConsentRecordSink> consentRecordSink;
		List consentData = new ArrayList();
		try {
			consentRecordSink = dao.getSinkConsentRecords(accountId);

			for (ConsentRecordSink crk : consentRecordSink) {

				if (crk.getCommon_part().getSlr_id().equalsIgnoreCase(slr)) {
					Map m = new HashMap();
					ConsentRecordSource crs = dao.findSourceConsentRecordByRes_id(
							crk.getCommon_part().getRs_description().getResource_set().getRs_id(), accountId);

					String slr_id = crk.getCommon_part().getSlr_id();

					ServiceEntry sinkService = csu.findByIdUTILS(crk.getCommon_part().getSubject_id());
					ServiceEntry sourceService = csu.findByIdUTILS(crs.getCommon_part().getSubject_id());

					m.put("sinkService", sinkService);
					m.put("sourceService", sourceService);
					m.put("rs_id", crk.getCommon_part().getRs_description().getResource_set().getRs_id());
					m.put("account_id", accountId);
					m.put("sink", crk);
					m.put("source", crs);
					consentData.add(m);

				}

			}

			String array = new Gson().toJson(consentData);

			return Response.status(Response.Status.OK).entity(array).build();

		} catch (AccountUtilsException e) {

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

	@CoberturaIgnore
	@Override
	@GET
	@Path("/consents/active/{accountId}/{slr}")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Get All active  consents by SLR", notes = "Get All active  consents by SLR", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "OK", response = ConsentRecordSink.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST"),
			@io.swagger.annotations.ApiResponse(code = 404, message = "Account Not Found"),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error")
			
	  }
	)
	
    @ApiImplicitParams({		
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "slr", value = "slr ID", dataType = "string", paramType = "path")
    })
	public Response getAllActiveConsentByAccountIdSlr( @PathParam("accountId") String accountId,
			 @PathParam("slr") String slr) {

		List<ConsentRecordSink> consentRecordSink;
		List consentData = new ArrayList();
		try {
			consentRecordSink = dao.getSinkConsentRecords(accountId);

			for (ConsentRecordSink crk : consentRecordSink) {

				if (crk.getCommon_part().getSlr_id().equalsIgnoreCase(slr) && crk.getConsentStatusList().get(crk.getConsentStatusList().size()-1).getConsent_status().toString().equalsIgnoreCase("ACTIVE")) {
					Map m = new HashMap();
					ConsentRecordSource crs = dao.findSourceConsentRecordByRes_id(
							crk.getCommon_part().getRs_description().getResource_set().getRs_id(), accountId);

					String slr_id = crk.getCommon_part().getSlr_id();

					ServiceEntry sinkService = csu.findByIdUTILS(crk.getCommon_part().getSubject_id());
					ServiceEntry sourceService = csu.findByIdUTILS(crs.getCommon_part().getSubject_id());

					m.put("sinkService", sinkService);
					m.put("sourceService", sourceService);
					m.put("rs_id", crk.getCommon_part().getRs_description().getResource_set().getRs_id());
					m.put("account_id", accountId);
					m.put("sink", crk);
					m.put("source", crs);
					consentData.add(m);

				}

			}

			String array = new Gson().toJson(consentData);

			return Response.status(Response.Status.OK).entity(array).build();

		} catch (AccountUtilsException e) {

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


	@CoberturaIgnore
	@Override
	@GET
	@Path("/consents/active/{accountId}/{slr}/{serviceId}")
	@Produces({ MediaType.APPLICATION_JSON })
	@ApiOperation(value = "Get active consent by SLR", notes = "Get active consent by SLR", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "OK", response = ConsentRecordSink.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST"),
			@io.swagger.annotations.ApiResponse(code = 404, message = "Account Not Found"),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error")
			
	  }
	)
	
    @ApiImplicitParams({		
		@ApiImplicitParam(name = "accountId", value = "Account ID", dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "slr", value = "slr ID", dataType = "string", paramType = "path"),
		@ApiImplicitParam(name = "serviceId", value = "s ID", dataType = "string", paramType = "path")
    })
	public Response getServiceActiveConsentByAccountIdSlr(@ApiParam(name = "accountId", value = "descrizione", required = true) @PathParam("accountId") String accountId,
			@ApiParam(name = "slr", value = "descrizione", required = true) @PathParam("slr") String slr, @ApiParam(name = "serviceId", value = "descrizione", required = true) @PathParam("serviceId") String serviceId ) {

		List<ConsentRecordSink> consentRecordSink;
		Map consent = new HashMap();
		try {
			consentRecordSink = dao.getSinkConsentRecords(accountId);

			for (ConsentRecordSink crk : consentRecordSink) {

				if (crk.getCommon_part().getSlr_id().equalsIgnoreCase(slr) && crk.getConsentStatusList().get(crk.getConsentStatusList().size()-1).getConsent_status().toString().equalsIgnoreCase("ACTIVE")) {

					ConsentRecordSource crs = dao.findSourceConsentRecordByRes_id(
							crk.getCommon_part().getRs_description().getResource_set().getRs_id(), accountId);


					if(crs.getCommon_part().getSubject_id().equalsIgnoreCase(serviceId)) {

						consent.put("rs_id", crk.getCommon_part().getRs_description().getResource_set().getRs_id());
						consent.put("account_id", accountId);
						consent.put("sink", crk);


					}


				}

			}

			String array = new Gson().toJson(consent);

			return Response.status(Response.Status.OK).entity(array).build();

		} catch (AccountUtilsException e) {

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

	/*
	 * @Override
	 * 
	 * @GET
	 * 
	 * @Path("/consentStatus/{accountId}/{rsId}/statuses")
	 * 
	 * @Produces({ MediaType.APPLICATION_JSON }) public Response
	 * getConsentStatusRecords(@PathParam("accountId") String
	 * accountId, @PathParam("rsId") String rsId) {
	 * 
	 * // try { // // List<ConsentRecordStatus> statusRecords = //
	 * null;//dao.getServiceLinkStatusRecords(accountId, slrId); // // return
	 * Response.status(Response.Status.OK) //
	 * .entity(DAOUtils.obj2Json(statusRecords, new //
	 * TypeToken<ArrayList<ConsentRecordStatus>>() { // }.getType())).build(); // //
	 * } catch (AccountUtilsException e) { // // e.printStackTrace(); //
	 * ErrorResponse error = new //
	 * ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()), //
	 * e.getClass().getSimpleName(), e.getMessage()); // // return //
	 * Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
	 * // // } catch (ConsentStatusRecordNotFoundException e) { //
	 * System.out.println(e.getMessage()); // ErrorResponse error = new //
	 * ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()), //
	 * e.getClass().getSimpleName(), e.getMessage()); // // return //
	 * Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build(); //
	 * // } catch (Exception e) { // e.printStackTrace(); // ErrorResponse error =
	 * new ErrorResponse( //
	 * String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), //
	 * e.getClass().getSimpleName(), // e.getMessage()); // // return //
	 * Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson())
	 * .build(); // } return null;
	 * 
	 * }
	 */

	/*
	 * //dashboard //recupero l'array di tutti i sinkConsentRecords //scorro questo
	 * array //per ogni elmento di questo array //stampo "Consenso" //recupero
	 * l'slrid (del sink) dal sink consent record corrente //richiamo un'api che
	 * ritorna tutto il servizio (sink) passandogli l'slrid e l'accountid //stampo
	 * il nome del sink //recupero l'rs_id //richiamo un'api che ritorna un source
	 * Consent record passandogli questo rs_id e l'accountId //dal source Consent
	 * record appena ricavato prendo il source slrid //richiamo un'api che ritorna
	 * tutto il servizio (source) passandogli l'slrid e l'accountid //stampo il nome
	 * del source //stampo l'array degli stati (ad esempio prendendelo dal sink
	 * consent record corrente //passo al prossimo sink consent record corrente
	 */
	/*
	@Override
	@GET
	@Path("/testmongo/{accountId}/{sinkId}/{sourceId}/{datasetId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response testMongo(@PathParam("accountId") String accountId, @PathParam("sinkId") String sinkId,
			@PathParam("sourceId") String sourceId, @PathParam("datasetId") String datasetId) {
		try {
			ConsentRecordSink crs = dao.getConsentRecordSinkByDatasetId(accountId, datasetId);
			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(crs, ConsentRecordSink.class).toString()).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
		}
	}

	private void traceAuditLog(String accountId, JSONObject details) {

		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080/auditlog-manager/api/v1/internal/addlog");

		JSONObject payload = new JSONObject();
		payload.put("username", accountId);
		payload.put("type", "Authorization-management");
		payload.put("objectJson", details.toString());

		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

	}*/

/*	private void sendConsentToSource(String csrToService, String sinkIdToService) {
		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080");
		JSONObject payload = new JSONObject();
		payload.put("csr", csrToService);
		payload.put("sink_id", sinkIdToService);
		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

	}*/

/*	private void sendConsentToSink(String csrToService, String sourceIdToService, String datasetIdToService) {
		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080");
		JSONObject payload = new JSONObject();
		payload.put("csr", csrToService);
		payload.put("source_id", sourceIdToService);
		payload.put("dataset_id", datasetIdToService);
		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

	}*/

}
