package it.eng.opsi.cdv.pdatamanager.service;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;
import com.google.gson.reflect.TypeToken;

import it.eng.opsi.cdv.pdatamanager.model.ErrorResponse;
import it.eng.opsi.cdv.pdatamanager.utils.PDataConverter;
import it.eng.opsi.cdv.pdatamanager.utils.PropertyManager;
import it.eng.opsi.cdv.pdatarepository.api.PDataRepository;
import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataNotFoundException;
import it.eng.opsi.cdv.pdatarepository.utils.DAOUtils;


@Path("/internal")
public class InternalPDataService {

	private static PDataRepository repo = new PDataRepository(
			it.eng.opsi.cdv.pdatamanager.utils.PropertyManager.getProperty("PDATA_REPOSITORY_COLLECTION"),
			PropertyManager.getProperties());

	@DELETE
	@Path("/pData")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteAllPData(@HeaderParam("accountId") String accountId) {

		if (StringUtils.isNotBlank(accountId)) {

			try {
				repo.deleteAllPData(accountId);

				return Response.status(Response.Status.OK).build();

			} catch (PDataNotFoundException e) {

				System.out.println(e.getMessage());
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {
				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}

	}

	@GET
	@Path("/pData")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN })
	public Response getAllPData(@HeaderParam("accountId") String accountId, @QueryParam("format") String format) {
		List<PDataEntry> entries = null;
		if (StringUtils.isNotBlank(accountId)) {

			try {

				if (format == null || format.equalsIgnoreCase("JSON")) {

					entries = repo.getAllPData(accountId);
					return Response.status(Response.Status.OK)
							.entity(DAOUtils.obj2Json(entries, new TypeToken<ArrayList<PDataEntry>>() {
							}.getType())).build();

				} else if (format.equalsIgnoreCase("CSV")) {

					entries = repo.getAllPData(accountId);
					String result = PDataConverter.pDataToCSV(entries);
					return Response.status(Response.Status.OK).header("Content-Type", "text/plain").entity(result)
							.build();
				} else {

					ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
							"formatNotValid", "The specified format parameter is not valid");
					return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

				}

			} catch (PDataNotFoundException e) {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

			} catch (Exception e) {

				e.printStackTrace();
				ErrorResponse error = new ErrorResponse(
						String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
						e.getClass().getSimpleName(), e.getMessage());

				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

			}

		} else {

			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					"AccountIdMissing", "The account Id is empty or missing");
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		}

	}

}
