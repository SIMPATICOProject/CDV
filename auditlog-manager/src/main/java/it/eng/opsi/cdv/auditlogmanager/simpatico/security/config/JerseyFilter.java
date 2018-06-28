package it.eng.opsi.cdv.auditlogmanager.simpatico.security.config;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import eu.trentorise.smartcampus.profileservice.model.BasicProfile;
import eu.trentorise.smartcampus.profileservice.BasicProfileService;
import it.eng.opsi.cdv.auditlogmanager.model.ErrorResponse;
//import it.eng.opsi.cdv.auditlogmanager.utils.CityEnablerBasicProfileService;
import it.eng.opsi.cdv.auditlogmanager.utils.PropertyManager;
import javax.ws.rs.core.MultivaluedMap;

@Provider
public class JerseyFilter implements ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext request) throws IOException {

        try {

            String path = request.getUriInfo().getPath();

            if (!path.toLowerCase().contains("internal")) {
                System.out.println("prima del Token ");
                String authToken = extractToken(request);
                System.out.println("Token " + authToken);

                if (authToken != null && !authToken.isEmpty()) {

                    System.out.println("pre basicProfile");
                    BasicProfile basicProfile
                            = new BasicProfileService(PropertyManager.getProperty("AAC_URL"))
                                    .getBasicProfile(authToken);
                    System.out.println("basicProfile loaded successfully: " + basicProfile.getUserId());
                    MultivaluedMap<String, String> params = request.getUriInfo().getPathParameters();

                    System.out.println(params.toString());
                    String username = params.getFirst("username");
                    
                    String userId = request.getHeaderString("userId");
                    if (!userId.equals(basicProfile.getUserId())) {

                        ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotProvided", "Token was not provided");

                        request.abortWith(Response.status(Response.Status.UNAUTHORIZED).type(MediaType.APPLICATION_JSON)
                                .entity(errorResponse.toJson().toString()).build());

                    }
                } else {
                    throw new SecurityException();
                }

            }
            System.out.println("exit");
        } catch (SecurityException e) {
            //e.printStackTrace();
            System.err.println("The provided token is not valid, not present or expired.");
            ErrorResponse errorResponse = new ErrorResponse("401", "TokenNotValid",
                    "The provided token is not valid, not present or expired: ");

            request.abortWith(Response.status(Response.Status.UNAUTHORIZED).type(MediaType.APPLICATION_JSON)
                    .entity(errorResponse.toJson().toString()).build());

        } catch (Exception e) {

            e.printStackTrace();

            ErrorResponse errorResponse = new ErrorResponse("500", "InternalServerError",
                    "There was an internal server error");

            request.abortWith(Response.status(Response.Status.INTERNAL_SERVER_ERROR).type(MediaType.APPLICATION_JSON)
                    .entity(errorResponse.toJson().toString()).build());

        }

    }

    private String extractToken(ContainerRequestContext request) {
        String completeToken = request.getHeaderString(HttpHeaders.AUTHORIZATION);
        if (completeToken == null) {
            return null;
        }
        if (completeToken.toLowerCase().startsWith("bearer")) {
            completeToken = completeToken.substring("bearer".length()).trim();
        }
        return completeToken;
    }

}
