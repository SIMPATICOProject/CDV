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
package it.eng.opsi.cdv.accountmanager;

import org.junit.*;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import javax.validation.constraints.AssertTrue;
import javax.ws.rs.core.Response;

import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.google.gson.reflect.TypeToken;

import it.eng.opsi.cdv.accountmanager.dao.AccountDAO;
import it.eng.opsi.cdv.accountmanager.model.Account;
import it.eng.opsi.cdv.accountmanager.model.AccountAlreadyPresentException;
import it.eng.opsi.cdv.accountmanager.model.AccountManagerException;
import it.eng.opsi.cdv.accountmanager.model.AccountNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.AccountUtilsException;
import it.eng.opsi.cdv.accountmanager.model.PDataEntry;
import it.eng.opsi.cdv.accountmanager.model.PDataManagerCallException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecord;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusEnum;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusRecord;
import it.eng.opsi.cdv.accountmanager.service.AccountService;
import it.eng.opsi.cdv.accountmanager.utils.DAOUtils;
import it.eng.opsi.cdv.accountmanager.utils.PropertyManager;


import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.modules.junit4.PowerMockRunnerDelegate;
import org.powermock.reflect.Whitebox;


@RunWith(PowerMockRunner.class)
//@RunWith(SpringJUnit4ClassRunner.class)
@PowerMockRunnerDelegate(SpringJUnit4ClassRunner.class)
@ContextConfiguration( classes = TestConfiguration.class )
@PrepareForTest({AccountService.class,DAOUtils.class})

public class AccountServiceTest {
	
	@Mock
	AccountDAO dao;
	
	@Mock
	Account retAccMock;
	
	@Mock
	ServiceLinkStatusRecord slsr;
	
	@Mock
	List<ServiceLinkStatusRecord> ssrList;
	
	@Mock
	ServiceLinkRecord slrMock;
	
	@Mock
	PDataEntry pdataEntryMock;
		
	@Autowired
    @InjectMocks
    @Qualifier("AccountService")
	
	AccountService accService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    
    @Test
    public void testCreateAccount() {
    	    	  	
    	System.out.println("testing createAccount STARTED...");
    	PowerMockito.mockStatic(AccountService.class);
    	
    	String input_201 = "";
        try {

	    	Whitebox.setInternalState(AccountService.class,dao); 
			when(dao.storeAccount(any(Account.class))).thenReturn(retAccMock);
			Response res = accService.createAccount(input_201);
			assertEquals(201, res.getStatus());
			
		} catch (AccountManagerException  |  AccountAlreadyPresentException e) {
			e.printStackTrace();
		} 

        System.out.println("...testing createAccount CLOSED.");
        
    }
    
    @Test
    public void testExistsAccount() {
    	    	  	
    	System.out.println("testing existsAccount STARTED...");
    	PowerMockito.mockStatic(AccountService.class);
    	   	
        try {

	    	Whitebox.setInternalState(AccountService.class,dao); 
			when(dao.existsAccount(Mockito.anyString())).thenReturn(true);
			Response res = accService.existsAccount(Mockito.anyString());
			assertEquals(200, res.getStatus());
			
		} catch (AccountManagerException e) {
			e.printStackTrace();
		} 

        System.out.println("...testing existsAccount CLOSED.");
        
    }
    
   @Test
    public void testUpdateAccount() {
    	    	  	
    	System.out.println("testing updateAccount STARTED...");
    	
    	String input_201 = "{\"username\":\"a_username\"}";
    	Response res=null;
        try {

	    	Whitebox.setInternalState(AccountService.class,dao); 
			when(dao.updateAccount(any(Account.class))).thenReturn(retAccMock);
			
			res=accService.addContact(Mockito.anyString(), Mockito.anyString());
		   	assertEquals(201, res.getStatus());
		   	res=accService.addEmail(Mockito.anyString(), Mockito.anyString());
		   	assertEquals(201, res.getStatus());
		   	res=accService.addTelephone(Mockito.anyString(), Mockito.anyString());
		   	assertEquals(201, res.getStatus());
		   	res=accService.addParticular(Mockito.anyString(), Mockito.anyString());
		   	assertEquals(201, res.getStatus());
		   				
			res = accService.updateAccount(input_201, Mockito.anyString());
			assertEquals(200, res.getStatus());
			
		} catch (AccountManagerException  |  AccountNotFoundException e) {
			e.printStackTrace();
		} 

        System.out.println("...testing updateAccount CLOSED.");
        
    }
   
   @Test
   public void testDeleteAccountAll() {
   	    	  	
   	System.out.println("testing updateAccount STARTED...");
   	PowerMockito.mockStatic(AccountService.class);
	   	
   	Response res=null;
   	//when(dao.deleteAccount(Mockito.anyString()))..thenReturn(retAccMock);  
   	Whitebox.setInternalState(AccountService.class,dao); 
   	res=accService.deleteContact(Mockito.anyString(), Mockito.anyString());
   	assertEquals(200, res.getStatus());
   	res=accService.deleteEmail(Mockito.anyString(), Mockito.anyString());
   	assertEquals(200, res.getStatus());
   	res=accService.deleteTelephone(Mockito.anyString(), Mockito.anyString());
   	assertEquals(200, res.getStatus());
   	res=accService.deleteParticular(Mockito.anyString());
   	assertEquals(200, res.getStatus());
   	res=accService.deleteServiceLinkRecordById(Mockito.anyString(), Mockito.anyString());
   	assertEquals(200, res.getStatus());
   	res=accService.deleteServiceLinkRecordBySurrogateIdAndServiceId(Mockito.anyString(), Mockito.anyString());
   	assertEquals(200, res.getStatus());
    res = accService.deleteAccount(Mockito.anyString());
	assertEquals(200, res.getStatus());
	System.out.println("...testing updateAccount CLOSED.");
       
   }
    
    @Test
    public void testCreateAccountWith400Exception() {
    	    	  	
    	System.out.println("testing exception createAccount STARTED...");
    	PowerMockito.mockStatic(AccountService.class);
    	
    	String input_400 = "aaaa";
    	Response res=null;
        Whitebox.setInternalState(AccountService.class,dao); //per rendere "private static AccountDAO dao" non più static
        res = accService.createAccount(input_400);
		assertEquals(400, res.getStatus());
			
		System.out.println("...testing createAccount CLOSED.");
        
    }
    
       
    
    @Test
    public void testGetAccountNoData() {
    	    	  	
    	System.out.println("testing getAccount STARTED...");
    	
    	try {

        	Whitebox.setInternalState(AccountService.class,dao); 
			when(dao.getAccount(Mockito.anyString())).thenReturn(retAccMock);
			Response res = accService.getAccount(Mockito.anyString(), false);
			assertEquals(200, res.getStatus());
			
		} catch (AccountManagerException  |  AccountNotFoundException e) {
			e.printStackTrace();
		} 

        System.out.println("...testing createAccount CLOSED.");
        
    }
    
    
    @Test
    public void testGetAccountWithData() {
    	    	  	
    	System.out.println("testing getAccount STARTED...");
    	
		    	
    	try {
    		 PowerMockito.mockStatic(AccountService.class);
    		 
 			 Whitebox.setInternalState(AccountService.class,dao); 
        	 when( pdataEntryMock.getName() ).thenReturn( "aPdata" );
             when( pdataEntryMock.getConceptId()).thenReturn( "aConceptId" );
             when(  pdataEntryMock.getType()).thenReturn( "aType" );
             when(  pdataEntryMock.getValues()).thenReturn( Arrays.asList("1", "2", "3") );
            
             List<PDataEntry> entries= new ArrayList<PDataEntry>();
             entries.add(pdataEntryMock);
             PowerMockito.when(accService.callGetAllPData(Mockito.anyString())).thenReturn(entries);
			 when(dao.getAccount(Mockito.anyString())).thenReturn(retAccMock);
			
			Response res = accService.getAccount(Mockito.anyString(), true);
			assertEquals(200, res.getStatus());
			
		} catch (AccountManagerException  |  AccountNotFoundException | PDataManagerCallException e) {
			e.printStackTrace();
		} 

        System.out.println("...testing createAccount CLOSED.");
        
    }

    @Test
    public void testCreateServiceLink_200() {
    	    	  	
    	System.out.println("testing getServiceLinkRecords STARTED...");
    	
    	String input_200 = "{\"serviceId\":\"serviceId_value\",\"serviceUri\":\"serviceUri_value\",\"serviceName\":\"serviceName_value\",\"userId\":\"userId_value\"}";
		try {
			Whitebox.setInternalState(AccountService.class,dao);
			
			when(dao.existsServiceLinkRecord(Mockito.anyString(), Mockito.anyString())).thenReturn(true);
			ServiceLinkRecord slr = new ServiceLinkRecord("serviceId_value","serviceUri_value","serviceName_value","surrogateId_value");
			when(dao.getServiceLinkRecordByServiceId(Mockito.anyString(), Mockito.anyString())).thenReturn(slrMock);
			
			when(slrMock.getServiceLinkStatusRecords()).thenReturn(ssrList);
			
			when(ssrList.size()).thenReturn(2);
			when(ssrList.get(Mockito.anyInt())).thenReturn(slsr);
			when(slsr.getServiceLinkStatus()).thenReturn(ServiceLinkStatusEnum.ACTIVE);
			
			Response res = accService.createServiceLinkRecord(input_200, "accountId_value");
			assertEquals(200, res.getStatus());
			
			
		} catch (AccountManagerException | ServiceLinkRecordNotFoundException e) {
			e.printStackTrace();
		}
    	
    	System.out.println("...testing getServiceLinkRecords CLOSED.");
    	
    }
    
    
    
    
    
    @Test
    public void testCreateServiceLink_400() {
    	    	  	
    	System.out.println("testing getServiceLinkRecords_400 STARTED...");
    	
    	
    	String input_400 = "{\"serviceId\":\"\",\"serviceUri\":\"\",\"serviceName\":\"\",\"userId\":\"\"}";
    	try {
			Whitebox.setInternalState(AccountService.class,dao);
			
			when(dao.existsServiceLinkRecord(Mockito.anyString(), Mockito.anyString())).thenReturn(true);
			ServiceLinkRecord slr = new ServiceLinkRecord("serviceId_value","serviceUri_value","serviceName_value","surrogateId_value");
			when(dao.getServiceLinkRecordByServiceId(Mockito.anyString(), Mockito.anyString())).thenReturn(slrMock);
			
			when(slrMock.getServiceLinkStatusRecords()).thenReturn(ssrList);
			
			when(ssrList.size()).thenReturn(2);
			when(ssrList.get(Mockito.anyInt())).thenReturn(slsr);
			when(slsr.getServiceLinkStatus()).thenReturn(ServiceLinkStatusEnum.ACTIVE);
			
			Response res = accService.createServiceLinkRecord(input_400, "accountId_value");
			assertEquals(400, res.getStatus());
			
			
		} catch (AccountManagerException | ServiceLinkRecordNotFoundException e) {
			e.printStackTrace();
		}
    	
    	System.out.println("...testing getServiceLinkRecords_400 CLOSED.");
    	
    }
}
