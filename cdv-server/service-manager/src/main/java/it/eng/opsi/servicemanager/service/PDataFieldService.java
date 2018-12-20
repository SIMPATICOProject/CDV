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

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
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
import it.eng.opsi.servicemanager.dao.PDataFieldDAO;
import it.eng.opsi.servicemanager.data.PDataCategory;
import it.eng.opsi.servicemanager.data.PDataField;

@Service("PDataFieldService")

@Path("/v1")
@Api(value = "/PDataFieldService")
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

public class PDataFieldService implements IPDataFieldService {
	static final String api_version = "1.0";

	PDataFieldDAO dao = new PDataFieldDAO();

	@GET
	@Path("/pdatafields")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "gets all pdatafields", notes = "gets all pdatafields", response = PDataField.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = PDataField.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Sercer Error") })
	public List<PDataField> getPDataFields() {
		return dao.findAll();
	}

	@GET
	@Path("/pdatafields/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "gets pdatafield by id", notes = "gets pdatafield by id", response = PDataField.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = PDataField.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Sercer Error") })
	public PDataField getPDataFieldById(
			@ApiParam(name = "id", value = "concept id", required = true) @PathParam("id") String id) {
		return dao.findById(id);
	}

	@GET
	@Path("/pdatafields/search/")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "gets pdatafield by name", notes = "gets pdatafield by name", response = PDataField.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = PDataField.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Sercer Error") })
	public List<PDataField> findPDataFieldByName(
			@ApiParam(name = "regex", value = "name criteria", required = true) @QueryParam("regex") String regex) {
		return dao.findByName(regex);
	}

	@GET
	@Path("/pdatafields/category/{category}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "gets pdatafield by name", notes = "gets pdatafield by name", response = PDataField.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = PDataField.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Sercer Error") })
	public List<PDataField> getPDataFieldByCategory(
			@ApiParam(name = "category", value = "category name", required = true) @PathParam("category") String category) {
		return dao.findByCategory(category);

	}

	@GET
	@Path("/pdatafields/category/tree")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "gets pdatafields tree by category", notes = "gets pdatafields tree by category", response = PDataCategory.class)
	@io.swagger.annotations.ApiResponses(value = {
			@io.swagger.annotations.ApiResponse(code = 200, message = "Success", response = PDataCategory.class),
			@io.swagger.annotations.ApiResponse(code = 500, message = "Internal Sercer Error") })
	public List<PDataCategory> getPDataCategoryTree() {
		return dao.getPDataTree();

	}

}