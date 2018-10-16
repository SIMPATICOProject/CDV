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

import it.eng.opsi.cdv.pdatamanager.model.DataMapping;
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
	List<DataMapping> responseList;
	
	@Mock
	PDataRepository repo;
	
	@Mock
	PDataEntry pde;

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
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
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
			assertEquals(200, res.getStatus());
			
		} catch (Exception  e) {
			e.printStackTrace();
		}

    	System.out.println("...testing getServicePDataByConsent_OK CLOSED.");
    } 
    
	
    @Test
    public void testPostServicePDataByConsent_OK() {
    	    	  	
    	System.out.println("testing postServicePDataByConsent_OK STARTS...");
    	
    	String input = "{\"slr_id\":\"slr_id_value\",\"slr_token\":\"slr_token_vaue\",\"user_id\":\"user_id_value\",\"cr_id\":\"cr_id_value\",\"cr_token\":\"cr_token_value\",\"properties\":[]}";
    	
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
    		assertEquals(200, res.getStatus());
    		
    	} catch (Exception  e) {
			e.printStackTrace();
		}
    	
		System.out.println("...testing postServicePDataByConsent_OK CLOSED.");
    }
    
}
