package it.eng.opsi.cdv.pdatasourceconnectors.api;

import java.util.List;

import it.eng.opsi.cdv.pdatasourceconnectors.model.PDataConnectorException;
import it.eng.opsi.cdv.pdatasourceconnectors.model.PDataEntry;
import it.eng.opsi.cdv.pdatasourceconnectors.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatasourceconnectors.model.PDataWriteMode;


public interface IPDataConnector {
	
	public abstract List<PDataEntry> getAllPData(String accountId)
			throws PDataNotFoundException, PDataConnectorException;

	public abstract PDataEntry getPData(String conceptId, String accountId)
			throws PDataNotFoundException, PDataConnectorException;

	public abstract List<PDataEntry> getPData(List<String> conceptIds, String accountId)
			throws PDataConnectorException;

	public abstract List<PDataEntry> storePData(String accountId, List<PDataEntry> values, PDataWriteMode mode)
			throws PDataConnectorException;

	public abstract PDataEntry storePData(String accountId, PDataEntry value, PDataWriteMode mode)
			throws PDataConnectorException;

	public abstract void deletePData(String conceptId, String accountId)
			throws PDataNotFoundException, PDataConnectorException;

	public abstract void deletePDataValue(String conceptId, String accountId, String value)
			throws PDataNotFoundException, PDataConnectorException;

	public abstract void deleteAllPData(String accountId) throws PDataNotFoundException, PDataConnectorException;

	public abstract boolean existsPData(String conceptId, String accountId) throws PDataConnectorException;

}
