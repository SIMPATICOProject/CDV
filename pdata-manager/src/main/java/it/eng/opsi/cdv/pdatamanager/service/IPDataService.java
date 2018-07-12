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
