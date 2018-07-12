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
package it.eng.opsi.cdv.consentmanager.model.consentRecord;

public class ConsentForm {
	private String resourcesetId;
	private String sourceId;
	private String sinkId;
	private String sourceName;
	private String sinkName;
	private String sinkHumanReadbleDescription;
	private String sourceHumanReadbleDescription;
	private ResourceSet resourceSet;

	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public String getSinkName() {
		return sinkName;
	}

	public void setSinkName(String sinkName) {
		this.sinkName = sinkName;
	}

	public String getSinkHumanReadbleDescription() {
		return sinkHumanReadbleDescription;
	}

	public void setSinkHumanReadbleDescription(String sinkHumanReadbleDescription) {
		this.sinkHumanReadbleDescription = sinkHumanReadbleDescription;
	}

	public String getResourcesetId() {
		return resourcesetId;
	}

	public void setResourcesetId(String resourcesetId) {
		this.resourcesetId = resourcesetId;
	}

	public String getSourceId() {
		return sourceId;
	}

	public void setSourceId(String sourceId) {
		this.sourceId = sourceId;
	}

	public String getSinkId() {
		return sinkId;
	}

	public void setSinkId(String sinkId) {
		this.sinkId = sinkId;
	}

	public ResourceSet getResourceSet() {
		return resourceSet;
	}

	public void setResourceSet(ResourceSet resourceSet) {
		this.resourceSet = resourceSet;
	}

	@Override
	public String toString() {
		return "ConsentForm [resourcesetId=" + resourcesetId + ", sourceId=" + sourceId + ", sinkId=" + sinkId
				+ ", sourceName=" + sourceName + ", sinkName=" + sinkName + ", sinkHumanReadbleDescription="
				+ sinkHumanReadbleDescription + ", sourceHumanReadbleDescription=" + sourceHumanReadbleDescription
				+ "]";
	}

	public String getSourceHumanReadbleDescription() {
		return sourceHumanReadbleDescription;
	}

	public void setSourceHumanReadbleDescription(String sourceHumanReadbleDescription) {
		this.sourceHumanReadbleDescription = sourceHumanReadbleDescription;
	}

}
