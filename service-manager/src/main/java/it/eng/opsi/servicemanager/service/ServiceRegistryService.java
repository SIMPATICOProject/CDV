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
package it.eng.opsi.servicemanager.service;

import it.eng.opsi.servicemanager.dao.ServiceEntryDAO;
import it.eng.opsi.servicemanager.data.DataMapping;
import it.eng.opsi.servicemanager.data.ServiceEntry;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.jhades.JHades;
import org.springframework.stereotype.Service;

@Service("ServiceRegistryService")

@Path("/v1")
public class ServiceRegistryService {
	static final String api_version = "1.0";
	ServiceEntryDAO dao = new ServiceEntryDAO();
	static {

	}

	@GET
	@Path("/services")
	@Produces(MediaType.APPLICATION_JSON)
	public List<ServiceEntry> getServices() {
		return dao.findAll();
	}

	@POST
	@Path("/services/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ServiceEntry create(ServiceEntry service) {
		return dao.create(service);
	}

	@GET
	@Path("/services/search/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<ServiceEntry> findServicesByName(@QueryParam("regex") String regex) {
		return dao.findByName(regex);
	}

	@GET
	@Path("/services/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ServiceEntry findById(@PathParam("id") String id) {
		return dao.findById(id);
	}

	@PUT
	@Path("/services/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ServiceEntry update(ServiceEntry service, @PathParam("id") String id) {
		dao.update(service, id);
		return service;
	}

	@DELETE
	@Path("/services/{id}")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public void remove(@PathParam("id") String id) {
		dao.remove(id);
	}

	@GET
	@Path("/services/{id}/servicedatamapping")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DataMapping> getServiceDataMapping(@PathParam("id") String id) {

		return dao.getDataMapping(id);
	}

	public static void main(String[] args) {
		new JHades().printClassLoaderNames().printClasspath().overlappingJarsReport().multipleClassVersionsReport();

	}

}