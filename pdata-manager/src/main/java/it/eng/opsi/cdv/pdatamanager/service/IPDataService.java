package it.eng.opsi.cdv.pdatamanager.service;

import javax.ws.rs.core.Response;

public interface IPDataService {

	public abstract Response savePData(final String input, String accountId, String modeString);

	public abstract Response getAllPData(String accountId, String format);

	public abstract Response getPData(String accountId, String conceptId);

	public abstract Response updatePData(String input, String accountId, String modeString);

	public abstract Response updatePData(String input, String accountId, String conceptId, String modeString);

	public abstract Response deleteAllPData(String accountId);

	public abstract Response deletePDataValue(String conceptId, String accountId, String value);

	public Response deletePData(String conceptId, String accountId);

	public abstract Response postServicePData(String input, String modeString);

	public abstract Response getServicePData(String input);

	public abstract Response downloadAllPData(String accountId, String fileFormat);

}
