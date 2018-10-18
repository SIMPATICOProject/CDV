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
import javax.ws.rs.core.Response;

import org.jhades.JHades;
import org.springframework.stereotype.Service;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.SwaggerDefinition;

@Service("ServiceRegistryService")

@Path("/ServiceRegistryService")
@Api(value = "/ServiceRegistryService", authorizations = {
	      @io.swagger.annotations.Authorization(
		          value="cdvoauth", 
		          scopes = { @io.swagger.annotations.AuthorizationScope(scope = ":", description = "descrizione autorizzazione") }
		          )})
@SwaggerDefinition(
        info = @io.swagger.annotations.Info(
                description = "Descrizione modulo",
                version = "0.0.1",			//bypassato da web.xml
                title = "Service Manager ServiceRegistry",	//bypassato da web.xml
                termsOfService = "http://example.io/terms.html",
                contact = @io.swagger.annotations.Contact(
                   name = "Edward Moore", 
                   email = "ed.moore@example.io", 
                   url = "http://example.io"
                ),
                license = @io.swagger.annotations.License(
                   name = "Example License 2.0", 
                   url = "http://www.example.org/licenses/LICENSE-2.0"
                )
        ),
        consumes = {"application/json", "application/xml"},
        produces = {"application/json", "application/xml"},
        schemes = {SwaggerDefinition.Scheme.HTTP, SwaggerDefinition.Scheme.HTTPS},
        tags = {
        		@io.swagger.annotations.Tag(name = "Nome_Tag", description = "Descrizione del tag")
        }, 
        externalDocs = @io.swagger.annotations.ExternalDocs(value = "Documento_Allegato", url = "http://example.io/attachment.html")/*,
        securityDefinition = @io.swagger.annotations.SecurityDefinition(
			basicAuthDefinitions = {
	                @BasicAuthDefinition(key = "basicAuth")},
	        apiKeyAuthDefinitions = {
	                @ApiKeyAuthDefinition(key = "apiKeyAuth", name = "apiKey", in = ApiKeyAuthDefinition.ApiKeyLocation.HEADER)},
	        oAuth2Definitions = {
	       		 @io.swagger.annotations.OAuth2Definition(key = "oAuth2AccessCode", flow = io.swagger.annotations.OAuth2Definition.Flow.ACCESS_CODE),
	       		 @io.swagger.annotations.OAuth2Definition(key = "oAuth2Password", flow = io.swagger.annotations.OAuth2Definition.Flow.PASSWORD)
})*/
)
public class ServiceRegistryService {
	static final String api_version = "1.0";
	ServiceEntryDAO dao = new ServiceEntryDAO();
	static {

	}

	@GET
	@Path("/services")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class/*, authorizations = {
		      @io.swagger.annotations.Authorization(
	          value="OAuth2", 
	          scopes = { @io.swagger.annotations.AuthorizationScope(scope = "basic", description = "descrizione autorizzazione INT") }
	          )}*/)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public List<ServiceEntry> getServices() {
		return dao.findAll();
	}

	@POST
	@Path("/services/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public ServiceEntry create(@ApiParam(name = "service", value = "descrizione", required = true) ServiceEntry service) {
		return dao.create(service);
	}

	@GET
	@Path("/services/search/")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public List<ServiceEntry> findServicesByName(@ApiParam(name = "regex", value = "descrizione", required = true) @QueryParam("regex") String regex) {
		return dao.findByName(regex);
	}

	@GET
	@Path("/services/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public ServiceEntry findById(@ApiParam(name = "id", value = "descrizione", required = true) @PathParam("id") String id) {
		return dao.findById(id);
	}

	@PUT
	@Path("/services/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public ServiceEntry update(@ApiParam(name = "service", value = "descrizione", required = true) ServiceEntry service, @ApiParam(name = "id", value = "descrizione", required = true) @PathParam("id") String id) {
		dao.update(service, id);
		return service;
	}

	@DELETE
	@Path("/services/{id}")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public void remove(@ApiParam(name = "id", value = "descrizione", required = true) @PathParam("id") String id) {
		dao.remove(id);
	}

	@GET
	@Path("/services/{id}/servicedatamapping")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "descrizione compatta", notes = "Descrizione estesa", response = Response.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 201, message = "CREATED", response = Response.class),
			@io.swagger.annotations.ApiResponse(code = 400, message = "BAD REQUEST")}
	)
	public List<DataMapping> getServiceDataMapping(@ApiParam(name = "id", value = "descrizione", required = true) @PathParam("id") String id) {

		return dao.getDataMapping(id);
	}

	public static void main(String[] args) {
		new JHades().printClassLoaderNames().printClasspath().overlappingJarsReport().multipleClassVersionsReport();

	}

}