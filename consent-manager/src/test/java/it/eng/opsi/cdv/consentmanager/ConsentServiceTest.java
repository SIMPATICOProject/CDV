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
package it.eng.opsi.cdv.consentmanager;

import org.json.JSONObject;
import org.junit.*;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.core.Response;

import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import it.eng.opsi.cdv.consentmanager.dao.AccountDAO;
import it.eng.opsi.cdv.consentmanager.model.ServiceLinkRecord;
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
import it.eng.opsi.cdv.consentmanager.service.ConsentService;
import it.eng.opsi.cdv.consentmanager.utils.ConsentServiceUtils;
import it.eng.opsi.cdv.consentmanager.utils.DAOUtils;
import it.eng.opsi.servicemanager.data.ServiceEntry;

import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.modules.junit4.PowerMockRunnerDelegate;

@RunWith(PowerMockRunner.class)
@PowerMockRunnerDelegate(SpringJUnit4ClassRunner.class)
@ContextConfiguration( classes = TestConfiguration.class )
@PrepareForTest({ConsentService.class, AccountDAO.class, ConsentServiceUtils.class})
@PowerMockIgnore({"javax.*.*", "com.sun.*", "org.xml.*"})

public class ConsentServiceTest {
	
	@Mock
	AccountDAO dao;
	
	@Mock
	List<Object> lo;
	
	@Mock
	ConsentRecordSink crSink;
	
	@Mock
	ConsentRecordSource css;
	
	@Mock
	List<ConsentRecordStatus> ssrList;
	
	@Mock
	ConsentRecordStatus c;
	
	@Mock
	ServiceEntry skService;
	
	@Mock
	ConsentForm cform;
	
	@Mock
	CommonPart cp;
	
	@Mock
	RSDescription rsd;
	
	@Mock
	ResourceSet res;
	
	@Mock
	Dataset dsn;
	
	@Mock
	List<Dataset> lds;
	
	@Mock
	ConsentRecordSink csd;
	
	@Mock
	ConsentRecordSource crs;
	
	@Mock
	ServiceEntry se;
	
	@Mock
	ConsentServiceUtils csu;
	
	@Mock
	ServiceLinkRecord slr;
	
	@Mock
	JSONObject jo;
	
	@Autowired
	@InjectMocks
	@Qualifier("ConsentService")
	
	ConsentService consentServ;
	
    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    
    @Test
    public void testGiveConsent_CREATED_1255() {
    	    	  	
    	System.out.println("testing giveConsent_CREATED_1255 STARTS...");
    	
    	ConsentForm cf = new ConsentForm();
    	cf.setSourceId("source_id_value");
    	cf.setSinkId("sink_id_value");
    	cf.setSourceName("source_name_value");
    	cf.setSinkName("sink_name_value");
    	cf.setSinkHumanReadbleDescription("sinkHumanReadbleDescription_value");
    	cf.setSourceHumanReadbleDescription("sourceHumanReadbleDescription_value");
    	
    	ResourceSet rs = new ResourceSet();
    	rs.setRs_id("rs_id_value");
    	rs.setAnonymousUsage("anonymousUsage_value");
    	
    	List<Dataset> dataset = new ArrayList<Dataset>();
    	Dataset ds = new Dataset();
    	
    	ds.set_id("_id_value");
    	ds.setContactPoint("contactPoint_value");
    	ds.setDescription("description_value");
    	ds.setIssued("issued_value");
    	List<String> key = new ArrayList<String>();
    	ds.setKeyword(key);
    	List<String> pur = new ArrayList<String>();
    	ds.setPurpose(pur);
    	ds.setLanguage("language_value");
    	ds.setModified("modified_value");
    	ds.setPublisher("publisher_value");
    	ds.setServiceDataType("serviceDataType_value");
    	ds.setSpatial("spatial_value");
    	ds.setTitle("title_value");
    	ds.setDataStructureSpecification("dataStructureSpecification_value");
    	ds.setStatus(true);
    	Date d = new Date();
    	ds.setCreated(d);
    	List<DataMapping> dm = new ArrayList<DataMapping>();
    	ds.setDataMapping(dm);
    	dataset.add(ds);
    	
    	rs.setDataset(dataset);
    	cf.setResourceSet(rs);
    	
    	String jsonCF = "";
		try {

			PowerMockito.mockStatic(ConsentServiceUtils.class);
			
			jsonCF = DAOUtils.obj2Json(cf,ConsentForm.class);
			
			when(cform.getSinkId()).thenReturn("sink_id_value");
			when(cform.getSourceId()).thenReturn("source_id_value");
			
			when(dao.getConsentRecordsByServicendDatasetId(Mockito.anyString(),Mockito.anyString(),
					Mockito.anyString(),Mockito.anyString())).thenReturn(lo);
			when(lo.get(0)).thenReturn(crSink);
			when(lo.get(1)).thenReturn(css);
			
			when(crSink.getConsentStatusList()).thenReturn(ssrList);
			ConsentRecordStatusEnum lastStatus = ConsentRecordStatusEnum.WITHDRAWN;
			when(ssrList.size()).thenReturn(2);
			when(ssrList.get(Mockito.anyInt())).thenReturn(c);
			when(c.getConsent_status()).thenReturn(lastStatus);
			
			ServiceLinkRecord slr1 = new ServiceLinkRecord("1slr","2slr","3slr","4slr");
			slr1.set_id("id_slr1");
			when(dao.getServiceLinkRecordByServiceId(Mockito.anyString(), Mockito.anyString())).thenReturn(slr1);
			
			when(csu.findByIdUTILS(Mockito.anyString())).thenReturn(se);
			when(se.getPublicServiceID()).thenReturn("service_id_value");
			
			Response res = consentServ.giveConsent(jsonCF, "account_id_value");
	    	assertEquals(201, res.getStatus());
	    	
			
		} catch (Exception e) {
			e.printStackTrace();
		}

    	System.out.println("...testing giveConsent_CREATED_1255 CLOSED.");
    	
    }


    @Test
    public void testGiveConsent_ACCEPTED_861() {
    	    	  	
    	System.out.println("testing giveConsent_ACCEPTED_861 STARTS...");
    	
    	PowerMockito.mockStatic(ConsentServiceUtils.class);

    	ConsentForm cf = new ConsentForm();
    	cf.setSourceId("source_id_value");
    	cf.setSinkId("sink_id_value");
    	cf.setSourceName("source_name_value");
    	cf.setSinkName("sink_name_value");
    	cf.setSinkHumanReadbleDescription("sinkHumanReadbleDescription_value");
    	cf.setSourceHumanReadbleDescription("sourceHumanReadbleDescription_value");
    	
    	ResourceSet rs = new ResourceSet();
    	rs.setRs_id("rs_id_value");
    	rs.setAnonymousUsage("anonymousUsage_value");
    	
    	List<Dataset> dataset = new ArrayList<Dataset>();
    	Dataset ds = new Dataset();
    	
    	ds.set_id("_id_value");
    	ds.setContactPoint("contactPoint_value");
    	ds.setDescription("description_value");
    	ds.setIssued("issued_value");
    	List<String> key = new ArrayList<String>();
    	ds.setKeyword(key);
    	List<String> pur = new ArrayList<String>();
    	ds.setPurpose(pur);
    	ds.setLanguage("language_value");
    	ds.setModified("modified_value");
    	ds.setPublisher("publisher_value");
    	ds.setServiceDataType("serviceDataType_value");
    	ds.setSpatial("spatial_value");
    	ds.setTitle("title_value");
    	ds.setDataStructureSpecification("dataStructureSpecification_value");
    	ds.setStatus(true);
    	Date d = new Date();
    	ds.setCreated(d);
    	List<DataMapping> dm = new ArrayList<DataMapping>();
    	ds.setDataMapping(dm);
    	dataset.add(ds);
    	
    	rs.setDataset(dataset);
    	cf.setResourceSet(rs);
    	
    	String jsonCF = "";
		try {

			
			jsonCF = DAOUtils.obj2Json(cf,ConsentForm.class);

			when(cform.getSinkId()).thenReturn("sink_id_value");
			when(cform.getSourceId()).thenReturn("source_id_value");
			
			when(dao.getConsentRecordsByServicendDatasetId(Mockito.anyString(),Mockito.anyString(),
					Mockito.anyString(),Mockito.anyString())).thenReturn(lo);
			when(lo.get(0)).thenReturn(crSink);
			when(lo.get(1)).thenReturn(css);
			
			when(crSink.getConsentStatusList()).thenReturn(ssrList);
			ConsentRecordStatusEnum lastStatus = ConsentRecordStatusEnum.ACTIVE;
			when(ssrList.size()).thenReturn(2);
			when(ssrList.get(Mockito.anyInt())).thenReturn(c);
			when(c.getConsent_status()).thenReturn(lastStatus);
			
			Response res = consentServ.giveConsent(jsonCF, "account_id_value");
	    	assertEquals(202, res.getStatus());
	    	
			
		} catch (Exception e) {
			e.printStackTrace();
		}

    	System.out.println("...testing giveConsent_ACCEPTED_861 CLOSED.");
    	
    }
    
    
    @Test
    public void testGiveConsent_CREATED_969() {
    	    	  	
    	System.out.println("testing giveConsent_CREATED_969 STARTS...");
    	
    	PowerMockito.mockStatic(ConsentServiceUtils.class);
    	
    	ConsentForm cf = new ConsentForm();
    	cf.setSourceId("source_id_value");
    	cf.setSinkId("sink_id_value");
    	cf.setSourceName("source_name_value");
    	cf.setSinkName("sink_name_value");
    	cf.setSinkHumanReadbleDescription("sinkHumanReadbleDescription_value");
    	cf.setSourceHumanReadbleDescription("sourceHumanReadbleDescription_value");
    	
    	ResourceSet rs = new ResourceSet();
    	rs.setRs_id("rs_id_value");
    	rs.setAnonymousUsage("anonymousUsage_value");
    	
    	List<Dataset> dataset = new ArrayList<Dataset>();
    	Dataset ds = new Dataset();
    	
    	ds.set_id("_id_value");
    	ds.setContactPoint("contactPoint_value");
    	ds.setDescription("description_value");
    	ds.setIssued("issued_value");
    	List<String> key = new ArrayList<String>();
    	ds.setKeyword(key);
    	List<String> pur = new ArrayList<String>();
    	ds.setPurpose(pur);
    	ds.setLanguage("language_value");
    	ds.setModified("modified_value");
    	ds.setPublisher("publisher_value");
    	ds.setServiceDataType("serviceDataType_value");
    	ds.setSpatial("spatial_value");
    	ds.setTitle("title_value");
    	ds.setDataStructureSpecification("dataStructureSpecification_value");
    	ds.setStatus(true);
    	Date d = new Date();
    	ds.setCreated(d);
    	List<DataMapping> dm = new ArrayList<DataMapping>();
    	ds.setDataMapping(dm);
    	dataset.add(ds);
    	
    	rs.setDataset(dataset);
    	cf.setResourceSet(rs);
    	
    	String jsonCF = "";
		try {

			jsonCF = DAOUtils.obj2Json(cf,ConsentForm.class);
			List<Object> loi = new ArrayList<Object>();
			Object ob = new Object();
			loi.add(ob);
			
			when(cform.getSinkId()).thenReturn("sink_id_value");
			when(cform.getSourceId()).thenReturn("source_id_value");
			
			when(dao.getConsentRecordsByServicendDatasetId(Mockito.anyString(),Mockito.anyString(),
					Mockito.anyString(),Mockito.anyString())).thenReturn(lo);
			when(lo.get(0)).thenReturn(crSink);
			when(lo.get(1)).thenReturn(css);
			
			when(crSink.getConsentStatusList()).thenReturn(ssrList);
			ConsentRecordStatusEnum lastStatus = ConsentRecordStatusEnum.DISABLED;
			when(ssrList.size()).thenReturn(2);
			when(ssrList.get(Mockito.anyInt())).thenReturn(c);
			when(c.getConsent_status()).thenReturn(lastStatus);
			
			when(cp.getCr_id()).thenReturn("valore");
			when(crSink.getCommon_part()).thenReturn(cp);
			when(css.getCommon_part()).thenReturn(cp);

			when(rsd.getResource_set()).thenReturn(res);
			when(cp.getRs_description()).thenReturn(rsd);
			//when(crSink.getCommon_part()).thenReturn(cp);

			when(res.getDataset()).thenReturn(lds);
			when(lds.size()).thenReturn(2);
			when(lds.get(Mockito.anyInt())).thenReturn(dsn);
			
			when(dao.getConsentRecordSinkByConsentId(Mockito.anyString(), Mockito.anyString())).thenReturn(csd);
			//when(res.getDataset()).thenReturn(lds);
			//when(rsd.getResource_set()).thenReturn(res);
			//when(cp.getRs_description()).thenReturn(rsd);
			when(csd.getCommon_part()).thenReturn(cp);
			
			when(cp.getSubject_id()).thenReturn("sub_id_value");
			//when(cp.getRs_description()).thenReturn(rsd);
			when(dao.findServiceById(Mockito.anyString())).thenReturn(se);
			when(se.getPublicServiceID()).thenReturn("sink_service_id_value");		
			
			when(dsn.get_id()).thenReturn("id_value");
			when(dao.getConsentRecordSourceByDatasetId(Mockito.anyString(), Mockito.anyString())).thenReturn(crs);
			//when(res.getDataset()).thenReturn(lds);
			//when(rsd.getResource_set()).thenReturn(res);
			//when(cp2.getRs_description()).thenReturn(rsd);
			when(crs.getCommon_part()).thenReturn(cp);
			
			Response res = consentServ.giveConsent(jsonCF, "account_id_value");
	    	assertEquals(201, res.getStatus());
	    	
			
		} catch (Exception e) {
			e.printStackTrace();
		}

    	System.out.println("...testing giveConsent_CREATED_969 CLOSED.");
    	
    }
    
}
