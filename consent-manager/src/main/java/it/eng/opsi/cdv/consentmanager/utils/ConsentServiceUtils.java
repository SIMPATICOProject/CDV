package it.eng.opsi.cdv.consentmanager.utils;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONObject;

import it.eng.opsi.cdv.consentmanager.model.AccountUtilsException;
import it.eng.opsi.servicemanager.data.ServiceEntry;

public class ConsentServiceUtils {

	
	public ServiceEntry findByIdUTILS(String serviceId) throws ConsentManagerException, AccountUtilsException {

		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client
				.target(PropertyManager.getProperty("SERVICEMANAGER_HOST") + "/api/v1/services/{id}")
				.resolveTemplate("id", serviceId);
		Invocation.Builder invocationBuilder = webTarget.request();
		Response response = invocationBuilder.get();

		int status = response.getStatus();
		String res = response.readEntity(String.class);

		if (status == 200) {

			return DAOUtils.json2Obj(res, ServiceEntry.class);

		} else {

			throw new ConsentManagerException(
					"There was an error while retrieving Service Description from Service Manager");
		}
	}

	public static void traceAuditLogUTILS(String accountId, JSONObject details) {

		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080/auditlog-manager/api/v1/internal/addlog");

		JSONObject payload = new JSONObject();
		payload.put("username", accountId);
		payload.put("type", "Authorization-management");
		payload.put("objectJson", details.toString());

		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

	}

	public static void sendConsentToSinkUTILS(String csrToService, String sourceIdToService, String datasetIdToService) {
		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080");
		JSONObject payload = new JSONObject();
		payload.put("csr", csrToService);
		payload.put("source_id", sourceIdToService);
		payload.put("dataset_id", datasetIdToService);
		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

	}

	public static void sendConsentToSourceUTILS(String csrToService, String sinkIdToService) {
		Client client = ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080");
		JSONObject payload = new JSONObject();
		payload.put("csr", csrToService);
		payload.put("sink_id", sinkIdToService);
		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(payload.toString(), MediaType.APPLICATION_JSON));

	}

}
