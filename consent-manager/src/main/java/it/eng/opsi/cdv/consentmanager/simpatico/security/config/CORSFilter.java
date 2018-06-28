package it.eng.opsi.cdv.consentmanager.simpatico.security.config;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

@Provider
public class CORSFilter implements ContainerResponseFilter {

    @Override
    public void filter(ContainerRequestContext request,
            ContainerResponseContext response) throws IOException {

        response.getHeaders().add("Access-Control-Allow-Origin", "*"); // If you want to be more restrictive it could be localhost:4200
        response.getHeaders().add("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS"); // You can add HEAD, DELETE, TRACE, PATCH
        response.getHeaders().add("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, Accept-Language"); // etc

        if (request.getMethod().equals("OPTIONS")) {
            response.setStatus(200);
        }

    }
}
