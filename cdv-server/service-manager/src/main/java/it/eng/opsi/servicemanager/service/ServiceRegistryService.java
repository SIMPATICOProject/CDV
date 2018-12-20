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
import it.eng.opsi.servicemanager.model.ServiceReport;

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
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Service;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.SwaggerDefinition;

@Service("ServiceRegistryService")

@Path("/v1")
@Api(value = "/ServiceRegistryService")
@SwaggerDefinition(
		info = @io.swagger.annotations.Info(description = "Technical specification of Service Manager APIs", 
		version = "1.2", 
		title = "Service Manager APIs", 
		termsOfService = "", 
		license = @io.swagger.annotations.License(name = "The MIT License (MIT)", url = "")), 
        consumes = {
				"application/json",
				"application/xml" }, 
        produces = { "application/json", "application/xml" }, 
        schemes = {
				SwaggerDefinition.Scheme.HTTP, SwaggerDefinition.Scheme.HTTPS })
public class ServiceRegistryService {
	static final String api_version = "1.0";
	ServiceEntryDAO dao = new ServiceEntryDAO();
	static {

	}

	@GET
	@Path("/services")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Gets Service List", notes = "Gets Service List", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	
	public List<ServiceEntry> getServices() {
		return dao.findAll();
	}

	@POST
	@Path("/services/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Create new service", notes = "Create new service", response = ServiceEntry.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	
	public ServiceEntry create(
			@ApiParam(name = "service", value = "service model", required = true) ServiceEntry service) {
		return dao.create(service);
	}

	@GET
	@Path("/services/search/")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "finds services by name", notes = "finds services by name", response = ServiceEntry.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public List<ServiceEntry> findServicesByName(
			@ApiParam(name = "regex", value = "string criteria to search files", required = true) @QueryParam("regex") String regex) {
		return dao.findByName(regex);
	}
	
	
	@GET
	@Path("/services/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "finds services by id", notes = "finds services by id", response = ServiceEntry.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public ServiceEntry findById(
			@ApiParam(name = "id", value = "service id", required = true) @PathParam("id") String id) {
		return dao.findById(id);
	}
	

	
	@GET
	@Path("/services/searchByUrl/")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "finds services by url", notes = "finds services by url", response = ServiceEntry.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public ServiceEntry findServiceByUrl(
			@ApiParam(name = "url", value = "service url", required = true) @QueryParam("url") String url) {
		return dao.findByURL(url);
	}

	@PUT
	@Path("/services/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Updates a service", notes = "Updates a service", response = ServiceEntry.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public ServiceEntry update(@ApiParam(name = "service", value = "updated service model", required = true) ServiceEntry service,
			@ApiParam(name = "id", value = "service id", required = true) @PathParam("id") String id) {
		dao.update(service, id);
		return service;
	}

	@DELETE
	@Path("/services/{id}")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@ApiOperation(value = "remove a service", notes = "remove a service", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceEntry.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public void remove(@ApiParam(name = "id", value = "service id", required = true) @PathParam("id") String id) {
		dao.remove(id);
	}

	@GET
	@Path("/services/{id}/servicedatamapping")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "gets service datamapping by id", notes = "gets service datamapping by id", response = DataMapping.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = DataMapping.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public List<DataMapping> getServiceDataMapping(
			@ApiParam(name = "id", value = "service id", required = true) @PathParam("id") String id) {

		return dao.getDataMapping(id);
	}

	@GET
	@Path("/service_report/sector")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "get services report per sector", notes = "get services report per sector", response = ServiceReport.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceReport.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public List<ServiceReport> getServiceReportbySector() {
		return dao.getServiceReportbySector();
	}

	@GET
	@Path("/service_report/type")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "get services report per type", notes = "get services report per type", response = ServiceReport.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = ServiceReport.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Server Error") })
	public List<ServiceReport> getServiceReportbyType() {
		return dao.getServiceReportbyType();
	}

	
}