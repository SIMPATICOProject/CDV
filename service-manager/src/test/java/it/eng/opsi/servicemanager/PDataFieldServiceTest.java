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
package it.eng.opsi.servicemanager;

import org.junit.*;
import org.junit.runner.RunWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.AssertTrue;

import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import it.eng.opsi.servicemanager.dao.PDataFieldDAO;
import it.eng.opsi.servicemanager.dao.ServiceEntryDAO;
import it.eng.opsi.servicemanager.data.DataMapping;
import it.eng.opsi.servicemanager.data.HumanReadableDescription;
import it.eng.opsi.servicemanager.data.PDataField;
import it.eng.opsi.servicemanager.data.ServiceEntry;
import it.eng.opsi.servicemanager.service.PDataFieldService;
import it.eng.opsi.servicemanager.service.ServiceRegistryService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = TestConfiguration.class)

public class PDataFieldServiceTest {

	@Mock
	PDataFieldDAO dao;

	@Mock
	PDataField pDataField;

	@Autowired
	@InjectMocks
	@Qualifier("PDataFieldService")

	PDataFieldService pDataFieldService;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testGetPDataFields() {

		System.out.println("testing getPdataFields");

		// Mocking ServiceEntry methods
		when(pDataField.getName()).thenReturn("aConcept");
		when(pDataField.getDescription()).thenReturn("description");
		when(pDataField.getId()).thenReturn("id");

		List<PDataField> entries = new ArrayList<PDataField>();
		entries.add(pDataField);
		// Mocking database methods
		when(dao.findAll()).thenReturn(entries);

		// Call create method
		List<PDataField> result = pDataFieldService.getPDataFields();

		// Assert expected results
		Assert.assertNotNull(result);
		Assert.assertTrue(result.size() == 1);
		Assert.assertNotNull(result.get(0).getName());
		Assert.assertNotNull(result.get(0).getDescription());
		Assert.assertNotNull(result.get(0).getId());

	}

	@Test
	public void testGetPDataFieldsByCategory() {

		System.out.println("testing getPDataFieldsByCategory");

		// Mocking ServiceEntry methods
		when(pDataField.getName()).thenReturn("aConcept");
		when(pDataField.getDescription()).thenReturn("description");
		when(pDataField.getId()).thenReturn("id");

		List<PDataField> entries = new ArrayList<PDataField>();
		entries.add(pDataField);
		// Mocking database methods
		when(dao.findByCategory(Mockito.anyString())).thenReturn(entries);

		// Call create method
		List<PDataField> result = pDataFieldService.getPDataFieldByCategory("");

		// Assert expected results
		Assert.assertNotNull(result);
		Assert.assertTrue(result.size() == 1);
		Assert.assertNotNull(result.get(0).getName());
		Assert.assertNotNull(result.get(0).getDescription());
		Assert.assertNotNull(result.get(0).getId());

	}

	@Test
	public void testGetPDataFieldsByName() {

		System.out.println("testing getPDataFieldsByName");

		// Mocking ServiceEntry methods
		when(pDataField.getName()).thenReturn("aConcept");
		when(pDataField.getDescription()).thenReturn("description");
		when(pDataField.getId()).thenReturn("id");

		List<PDataField> entries = new ArrayList<PDataField>();
		entries.add(pDataField);
		// Mocking database methods
		when(dao.findByName(Mockito.anyString())).thenReturn(entries);

		// Call create method
		List<PDataField> result = pDataFieldService.findPDataFieldByName("");

		// Assert expected results
		Assert.assertNotNull(result);
		Assert.assertTrue(result.size() == 1);
		Assert.assertNotNull(result.get(0).getName());
		Assert.assertNotNull(result.get(0).getDescription());
		Assert.assertNotNull(result.get(0).getId());

	}

	@Test
	public void testGetPDataField() {

		System.out.println("testing getPDataField");

		// Mocking ServiceEntry methods
		when(pDataField.getName()).thenReturn("aConcept");
		when(pDataField.getDescription()).thenReturn("description");
		when(pDataField.getId()).thenReturn("id");

		// Mocking database methods
		when(dao.findById(Mockito.anyString())).thenReturn(pDataField);

		// Call create method
		PDataField result = pDataFieldService.getPDataFieldById("");

		// Assert expected results
		Assert.assertNotNull(result);

		Assert.assertNotNull(result.getName());
		Assert.assertNotNull(result.getDescription());
		Assert.assertNotNull(result.getId());

	}

}