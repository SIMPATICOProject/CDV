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

	public abstract List<PDataEntry> getPData(List<String> conceptIds, String accountId) throws PDataConnectorException;

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
