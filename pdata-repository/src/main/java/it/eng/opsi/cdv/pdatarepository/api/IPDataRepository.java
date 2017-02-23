package it.eng.opsi.cdv.pdatarepository.api;

import java.util.List;

import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatarepository.model.PDataRepositoryException;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.model.PDataValueAlreadyPresentException;
import it.eng.opsi.cdv.pdatarepository.model.PDataWriteMode;

public interface IPDataRepository {

	public abstract List<PDataEntry> getAllPData(String accountId)
			throws PDataRepositoryException, PDataNotFoundException, PDataUtilsException;

	public abstract PDataEntry getPData(String conceptId, String accountId)
			throws PDataNotFoundException, PDataRepositoryException, PDataUtilsException;

	public abstract List<PDataEntry> getPData(List<String> conceptIds, String accountId)
			throws PDataRepositoryException, PDataUtilsException;

	
	public abstract List<PDataEntry> storePData(String accountId, List<PDataEntry> values, PDataWriteMode mode)
			throws PDataRepositoryException;

	public abstract PDataEntry storePData(String accountId, PDataEntry value, PDataWriteMode mode)
			throws PDataRepositoryException;

	public abstract void deletePData(String conceptId, String accountId) throws PDataNotFoundException, PDataRepositoryException;

	public abstract void deleteAllPData(String accountId) throws PDataNotFoundException, PDataRepositoryException;

	public abstract boolean existsPData(String conceptId, String accountId) throws PDataRepositoryException;

}
