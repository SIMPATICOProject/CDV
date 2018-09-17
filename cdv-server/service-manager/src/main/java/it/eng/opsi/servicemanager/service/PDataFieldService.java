package it.eng.opsi.servicemanager.service;
 

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

 
import it.eng.opsi.servicemanager.data.PDataField;


@Path("/v1")
public class PDataFieldService implements IPDataFieldService {
	static final String api_version = "1.0";
	
	PDataFieldDAO dao = new PDataFieldDAO(); 

	
	
	
	@GET 
    @Path("/pdatafields")  
    @Produces(MediaType.APPLICATION_JSON)  
    public List<PDataField> getPDataFields(){
    	return dao.findAll();
    }
	
		
		
	@GET 
    @Path("/pdatafields/{id}")  
    @Produces(MediaType.APPLICATION_JSON)  
    public PDataField getPDataFieldById(@PathParam("id") String id){
    	return dao.findById(id);
    }
	
	
	@GET 
    @Path("/pdatafields/search/")  
    @Produces(MediaType.APPLICATION_JSON)  
    public List<PDataField> findPDataFieldByName(@QueryParam("regex") String regex){
     return dao.findByName(regex);
    }
	
	
	@GET 
    @Path("/pdatafields/category/{category}")  
    @Produces(MediaType.APPLICATION_JSON)  
    public List<PDataField> getPDataFieldByCategory(@PathParam("category") String category){
     return dao.findByCategory(category);

    }
	
	
}