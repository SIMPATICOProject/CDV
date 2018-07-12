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
package it.eng.opsi.cdv.pdatarepository.api;

import java.util.List;
import java.util.Properties;

import it.eng.opsi.cdv.pdatarepository.dao.PDataDAO;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatarepository.model.PDataRepositoryException;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.model.PDataWriteMode;

public class PDataRepository implements IPDataRepository {

	// private static String pDataCollection =
	// PropertyManager.getProperty("MONGO_COLLECTION");
	private PDataDAO dao;

	public PDataRepository(String collectionName, Properties props) {
		dao = new PDataDAO(collectionName, props);
	}

	public void finalizeRepository() {
		dao.finalizeDAO();
	}

	@Override
	public List<PDataEntry> getAllPData(String accountId)
			throws PDataRepositoryException, PDataNotFoundException, PDataUtilsException {

		return dao.getAllPData(accountId);
	}

	@Override
	public PDataEntry getPData(String conceptId, String accountId)
			throws PDataRepositoryException, PDataNotFoundException, PDataUtilsException {

		return dao.getPData(conceptId, accountId);
	}

	@Override
	public List<PDataEntry> getPData(List<String> conceptIds, String accountId)
			throws PDataRepositoryException, PDataUtilsException {

		return dao.getPData(conceptIds, accountId);
	}

	@Override
	public List<PDataEntry> storePData(String accountId, List<PDataEntry> values, PDataWriteMode mode)
			throws PDataRepositoryException {
		return dao.storePData(accountId, values, mode);
	}

	@Override
	public PDataEntry storePData(String accountId, PDataEntry value, PDataWriteMode mode)
			throws PDataRepositoryException {
		return dao.storePData(accountId, value, mode);

	}

	@Override
	public void deletePData(String conceptId, String accountId)
			throws PDataNotFoundException, PDataRepositoryException {
		dao.deletePData(conceptId, accountId);

	}

	@Override
	public void deletePDataValue(String conceptId, String accountId, String value)
			throws PDataNotFoundException, PDataRepositoryException {
		dao.deletePDataValue(conceptId, accountId, value);

	}

	@Override
	public void deleteAllPData(String accountId) throws PDataNotFoundException, PDataRepositoryException {
		dao.deleteAllPData(accountId);
	}

	@Override
	public boolean existsPData(String conceptId, String accountId) throws PDataRepositoryException {
		return dao.existsPData(conceptId, accountId);

	}

}
