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
package it.eng.opsi.cdv.pdatamanager;

import org.junit.*;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.ws.rs.core.Response;

import org.mockito.MockitoAnnotations;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.google.gson.reflect.TypeToken;

import it.eng.opsi.cdv.pdatamanager.model.AccountManagerCallException;
import it.eng.opsi.cdv.pdatamanager.model.DataMapping;
import it.eng.opsi.cdv.pdatamanager.model.ServiceManagerCallException;
import it.eng.opsi.cdv.pdatamanager.service.PDataService;
import it.eng.opsi.cdv.pdatarepository.api.PDataRepository;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataWriteMode;
import it.eng.opsi.cdv.pdatarepository.utils.DAOUtils;

import org.powermock.api.mockito.PowerMockito;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.modules.junit4.PowerMockRunnerDelegate;
import org.powermock.reflect.Whitebox;


@RunWith(PowerMockRunner.class)
@PowerMockRunnerDelegate(SpringJUnit4ClassRunner.class)
@ContextConfiguration( classes = TestConfiguration.class )
@PrepareForTest({PDataService.class,DAOUtils.class,PDataRepository.class})

public class PdataServiceTest {
	
	@Mock
	HashMap<String, String> resultTest;
	
	@Mock
	HashMap<String, String> resultTest2;
	
	@Mock
	HashMap<String, PDataEntry> serviceMap;
	
	@Mock
	List<DataMapping> responseList;
	
	@Mock
	PDataRepository repo;
	
	@Mock
	PDataEntry pde;
	
	@Mock
	PDataEntry reporesult;

	@Autowired
    @InjectMocks
    @Qualifier("PDataService")
	
	PDataService pdService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    
    @Test
    public void testGetServicePDataByConsent_OK() {
    	    	  	
    	System.out.println("testing getServicePDataByConsent_OK STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("success");
			
			DataMapping mapping = new DataMapping();
			mapping.setConceptId("Sex");
			mapping.setName("Sex");
			mapping.setProperty("AventeTitolo_Sesso");
			mapping.setType("String");

			List<DataMapping> mappings = new ArrayList<DataMapping>();
			mappings.add(mapping);
			
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(mappings);
    		
    		
    		Whitebox.setInternalState(PDataService.class,serviceMap);
    		when(serviceMap.get("AventeTitolo_Sesso")).thenReturn(pde);
			when(pde.getValues()).thenReturn(null);
			when(pde.getConceptId()).thenReturn("Sex");
			
			Whitebox.setInternalState(PDataService.class,repo);
			when(repo.getPData(Mockito.anyString(), Mockito.anyString())).thenReturn(reporesult);
			when(reporesult.getValues()).thenReturn(null);
			when(reporesult.getConceptId()).thenReturn("Sex");
			
	    	Response res = pdService.getServicePDataByConsent(input);
			assertEquals(200, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_OK CLOSED.");
    } 
    
    @Test
    public void testGetServicePDataByConsent_400() {
    	    	  	
    	System.out.println("testing getServicePDataByConsent_400 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("success");
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePDataByConsent(input);
			assertEquals(400, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_400 CLOSED.");
    } 
    
    
    @Test
    public void testGetServicePDataByConsent_500() {
    	    	  	
    	System.out.println("testing getServicePDataByConsent_500 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(AccountManagerCallException.class);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("success");
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePDataByConsent(input);
			assertEquals(500, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_500 CLOSED.");
    } 
    
    @Test
    public void testGetServicePDataByConsent_404() {
    	    	  	
    	System.out.println("testing getServicePDataByConsent_404 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(NullPointerException.class);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("success");
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePDataByConsent(input);
			assertEquals(404, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_404 CLOSED.");
    } 
    
    
    
    @Test
    public void testGetServicePDataByConsent_NoVerifySLR() {
    	    	  	
    	System.out.println("testing getServicePDataByConsent_NoVerifySLR STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("unsuccess");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("success");
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePDataByConsent(input);
			assertEquals(400, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_NoVerifySLR CLOSED.");
    } 
    
    @Test
    public void testGetServicePDataByConsent_NoVerifyCR() {
    	    	  	
    	System.out.println("testing getServicePDataByConsent_NoVerifyCR STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("unsuccess");
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePDataByConsent(input);
			assertEquals(400, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_NoVerifyCR CLOSED.");
    } 
    
	
    @Test
    public void testPostServicePDataByConsent_OK() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_OK STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[{\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		DataMapping datamapping= new DataMapping();
    		datamapping.setConceptId("conceptID");
    		datamapping.setName("aName");
    		datamapping.setProperty("AventeTitolo_Sesso");
    		responseList.add(datamapping);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePDataByConsent(input, "APPEND");		
    		assertEquals(200, res.getStatus());
    		res = pdService.postServicePDataByConsent(input, "");
    		assertEquals(200, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_OK CLOSED.");
    }
    
    
    @Test
    public void testPostServicePDataByConsent_500() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_500 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[{\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(AccountManagerCallException.class);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		DataMapping datamapping= new DataMapping();
    		datamapping.setConceptId("conceptID");
    		datamapping.setName("aName");
    		datamapping.setProperty("AventeTitolo_Sesso");
    		responseList.add(datamapping);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePDataByConsent(input, "APPEND");		
    		assertEquals(500, res.getStatus());
    		res = pdService.postServicePDataByConsent(input, "");
    		assertEquals(500, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_500 CLOSED.");
    }
    
    @Test
    public void testPostServicePDataByConsent_404() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_404 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[{\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(NullPointerException.class);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		DataMapping datamapping= new DataMapping();
    		datamapping.setConceptId("conceptID");
    		datamapping.setName("aName");
    		datamapping.setProperty("AventeTitolo_Sesso");
    		responseList.add(datamapping);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePDataByConsent(input, "APPEND");		
    		assertEquals(404, res.getStatus());
    		res = pdService.postServicePDataByConsent(input, "");
    		assertEquals(404, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_404 CLOSED.");
    }
    
   
    
    
    @Test
    public void testPostServicePDataByConsent_JSONException() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_JSONException STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePDataByConsent(input, "APPEND");		
    		assertEquals(400, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_JSONException CLOSED.");
    }
    
    
    
    @Test
    public void testPostServicePDataByConsent_NoVerifySLR() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_NoVerifySLR STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("unsuccess");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePDataByConsent(input, "APPEND");		
    		assertEquals(400, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_NoVerifySLR CLOSED.");
    }
    
    @Test
    public void testPostServicePDataByConsent_NoVerifyCR() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_NoVerifyCR STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("unsuccess");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePDataByConsent(input, "APPEND");		
    		assertEquals(400, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_NoVerifyCR CLOSED.");
    }
    
    @Test
    public void testGetServicePData_OK() {
    	    	  	
    	System.out.println("testing getServicePData_OK STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]}";
    	
		try {
			
			
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.when(pdService.callGetServiceMap(Mockito.anyString(), Mockito.anyString())).thenReturn(serviceMap);
			when(serviceMap.get("AventeTitolo_Sesso")).thenReturn(pde);
			when(pde.getValues()).thenReturn(null);
			when(pde.getConceptId()).thenReturn("Sex");
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			Whitebox.setInternalState(PDataService.class,repo);
			when(repo.getPData(Mockito.anyString(), Mockito.anyString())).thenReturn(reporesult);
			when(reporesult.getValues()).thenReturn(null);
			when(reporesult.getConceptId()).thenReturn("Sex");
			
			
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePData(input);
			assertEquals(200, res.getStatus());
			 
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePData_OK CLOSED.");
    } 
    
    
    
    
    
    @Test
    public void testGetServicePData_NoVerifySLR() {
    	    	  	
    	System.out.println("testing getServicePData_NoVerifySLR STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("unsuccess");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
			when(resultTest2.get("result")).thenReturn("success");
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePData(input);
			assertEquals(400, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePData_NoVerifySLR CLOSED.");
    } 
    
   
    @Test
    public void testGetServicePData_400() {
    	    	  	
    	System.out.println("testing getServicePData_400 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePData(input);
			assertEquals(400, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePData_400 CLOSED.");
    } 
    
    
    @Test
    public void testGetServicePData_500() {
    	    	  	
    	System.out.println("testing getServicePData_500 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(ServiceManagerCallException.class);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePData(input);
			assertEquals(500, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePData_500 CLOSED.");
    } 
    
    
    @Test
    public void testGetServicePData_404() {
    	    	  	
    	System.out.println("testing getServicePData_500 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"AventeTitolo_Sesso\"]}";
    	
		try {
			
			PowerMockito.mockStatic(PDataService.class);
			PowerMockito.mockStatic(DAOUtils.class);
			
			PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(NullPointerException.class);
			when(resultTest.get("result")).thenReturn("success");
			when(resultTest.get("username")).thenReturn("username_value");
			when(resultTest.get("serviceId")).thenReturn("serviceId_value");
			
			
			when(resultTest2.get("datamapping")).thenReturn("valore_lista");
			DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
			
	    	Response res = pdService.getServicePData(input);
			assertEquals(404, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePData_404 CLOSED.");
    } 
	
    @Test
    public void testPostServicePData_OK() {
    	    	  	
    	System.out.println("testing postServicePData_OK STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[{\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		DataMapping datamapping= new DataMapping();
    		datamapping.setConceptId("conceptID");
    		datamapping.setName("aName");
    		datamapping.setProperty("AventeTitolo_Sesso");
    		responseList.add(datamapping);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePData(input, "APPEND");		
    		assertEquals(200, res.getStatus());
    		res = pdService.postServicePData(input, "");		
    		assertEquals(200, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePData_OK CLOSED.");
    }
    
    
    @Test
    public void testPostServicePData_JSONException() {
    	    	  	
    	System.out.println("testing postServicePData_JSONException STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePData(input, "APPEND");		
    		assertEquals(400, res.getStatus());
    		res = pdService.postServicePData(input, "");		
    		assertEquals(400, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
    	System.out.println("...testing postServicePData_JSONException CLOSED.");
    }
    
    
    
    @Test
    public void testPostServicePData_500() {
    	    	  	
    	System.out.println("testing postServicePData_500 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[{\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
			 PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(ServiceManagerCallException.class);
			    
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		DataMapping datamapping= new DataMapping();
    		datamapping.setConceptId("conceptID");
    		datamapping.setName("aName");
    		datamapping.setProperty("AventeTitolo_Sesso");
    		responseList.add(datamapping);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePData(input, "APPEND");		
    		assertEquals(500, res.getStatus());
    		res = pdService.postServicePData(input, "");		
    		assertEquals(500, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePData_500 CLOSED.");
    }
    
    @Test
    public void testPostServicePData_404() {
    	    	  	
    	System.out.println("testing postServicePData_404 STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[{\"key\": \"AventeTitolo_Sesso\", \"values\": [\"M\"]}]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
			 PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenThrow(NullPointerException.class);
			    
    		when(resultTest.get("result")).thenReturn("success");
    		when(resultTest.get("username")).thenReturn("username_value");
    		
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		DataMapping datamapping= new DataMapping();
    		datamapping.setConceptId("conceptID");
    		datamapping.setName("aName");
    		datamapping.setProperty("AventeTitolo_Sesso");
    		responseList.add(datamapping);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePData(input, "APPEND");		
    		assertEquals(404, res.getStatus());
    		res = pdService.postServicePData(input, "");		
    		assertEquals(404, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePData_404 CLOSED.");
    }
    
    
    
   
    
    @Test
    public void testPostServicePData_NoVerifySLR() {
    	    	  	
    	System.out.println("testing postServicePData_NoVerifySLR STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
    	try {
    		
    		PowerMockito.mockStatic(DAOUtils.class);
			PowerMockito.mockStatic(PDataService.class);
			
    		PowerMockito.when(pdService.callVerifySLR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest);
    		when(resultTest.get("result")).thenReturn("unsuccess");
    		when(resultTest.get("username")).thenReturn("username_value");
    		PowerMockito.when(pdService.callVerifyCR(Mockito.anyString(), Mockito.anyString(), Mockito.anyString(),Mockito.anyString(), Mockito.anyString())).thenReturn(resultTest2);
    		when(resultTest2.get("result")).thenReturn("success");
    		
    		when(resultTest2.get("datamapping")).thenReturn("valore_lista");
    		DAOUtils daout = Mockito.mock(DAOUtils.class);
    		PowerMockito.when(daout.json2Obj("valore_lista",new TypeToken<List<DataMapping>>(){}.getType())).thenReturn(responseList);
    		
    		Whitebox.setInternalState(PDataService.class,repo);
    		when(repo.storePData(Mockito.anyString(), any(PDataEntry.class),any(PDataWriteMode.class))).thenReturn(pde);

    		Response res = pdService.postServicePData(input, "APPEND");		
    		assertEquals(400, res.getStatus());
    		res = pdService.postServicePData(input, "");		
    		assertEquals(400, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePData_NoVerifySLR CLOSED.");
    }
    
}
