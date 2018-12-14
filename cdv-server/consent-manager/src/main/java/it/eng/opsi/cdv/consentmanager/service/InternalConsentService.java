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


import java.util.List;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;
import com.google.gson.reflect.TypeToken;
import io.jsonwebtoken.MalformedJwtException;
import it.eng.opsi.cdv.consentmanager.dao.AccountDAO;
import it.eng.opsi.cdv.consentmanager.model.ErrorResponse;
import it.eng.opsi.cdv.consentmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordSink;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordStatus;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.ConsentRecordStatusEnum;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.DataMapping;
import it.eng.opsi.cdv.consentmanager.model.consentRecord.Dataset;
import it.eng.opsi.cdv.consentmanager.utils.DAOUtils;
import it.eng.opsi.cdv.consentmanager.utils.JWTUtils;
import it.eng.opsi.cdv.consentmanager.utils.PropertyManager;


@Path("/internal")
public class InternalConsentService {
	
	
	private static AccountDAO dao = new AccountDAO(PropertyManager.getProperty("ACCOUNT_REPOSITORY_COLLECTION"));

		
	@POST
	@Path("/verifySinkConsent")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response verifySinkConsent(final String input) {

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

			if (slrId.equals(record.getCommon_part().getSlr_id()) && surrogateId.equals(record.getCommon_part().getSurrogate_id())
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
	
	

	



}
