package it.eng.opsi.cdv.accountmanager.service;

import java.util.ArrayList;
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
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

import com.google.gson.reflect.TypeToken;
import it.eng.opsi.cdv.accountmanager.dao.AccountDAO;
import it.eng.opsi.cdv.accountmanager.model.Account;
import it.eng.opsi.cdv.accountmanager.model.AccountAlreadyPresentException;
import it.eng.opsi.cdv.accountmanager.model.AccountManagerException;
import it.eng.opsi.cdv.accountmanager.model.AccountNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.AccountUtilsException;
import it.eng.opsi.cdv.accountmanager.model.Contact;
import it.eng.opsi.cdv.accountmanager.model.ContactNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.Email;
import it.eng.opsi.cdv.accountmanager.model.EmailNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ErrorResponse;
import it.eng.opsi.cdv.accountmanager.model.PDataEntry;
import it.eng.opsi.cdv.accountmanager.model.PDataManagerCallException;
import it.eng.opsi.cdv.accountmanager.model.Particular;
import it.eng.opsi.cdv.accountmanager.model.ParticularNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecord;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusEnum;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusRecord;
import it.eng.opsi.cdv.accountmanager.model.ServiceLinkStatusRecordNotFoundException;
import it.eng.opsi.cdv.accountmanager.model.Telephone;
import it.eng.opsi.cdv.accountmanager.model.TelephoneNotFoundException;
import it.eng.opsi.cdv.accountmanager.utils.DAOUtils;
import it.eng.opsi.cdv.accountmanager.utils.PropertyManager;

@Component
@Path("/v1")
public class AccountService implements IAccountService {

	private static AccountDAO dao = new AccountDAO(PropertyManager.getProperty("ACCOUNT_REPOSITORY_COLLECTION"));

	// static {
	// new JHades().overlappingJarsReport();
	// }
	@Override
	@POST
	@Path("/accounts")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response createAccount(final String input) {

		try {
			Account account = DAOUtils.json2Obj(input, Account.class);

			Account created = dao.storeAccount(account);

			return Response.status(Response.Status.CREATED).entity(DAOUtils.obj2Json(created, Account.class).toString())
					.build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountManagerException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (AccountAlreadyPresentException e) {

			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.CONFLICT.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.CONFLICT).entity(error.toJson()).build();

		}

	}

	@Override
	@PUT
	@Path("/accounts/{accountId}")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public Response updateAccount(String input, @PathParam("accountId") String accountId) {

		try {
			Account account = DAOUtils.json2Obj(input, Account.class);
			account.setId(accountId);

			Account updated = dao.updateAccount(account);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(updated, Account.class).toString())
					.build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@DELETE
	@Path("/accounts/{accountId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteAccount(@PathParam("accountId") String accountId) {

		try {
			// Delete PData by calling the internal PData Manager API
			callDeletePData(accountId);

			dao.deleteAccount(accountId);

			return Response.status(Response.Status.OK).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException | PDataManagerCallException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getAccount(@PathParam("accountId") String accountId, @QueryParam("withPData") boolean withPData) {

		try {

			Account account = dao.getAccount(accountId);

			if (!withPData)
				return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(account, Account.class)).build();
			else {

				// Call PData Manager in order to retrieve the Account PData and
				// to append to the response
				List<PDataEntry> pDataList = callGetAllPData(accountId);
				JSONObject out = new JSONObject(DAOUtils.obj2Json(account, Account.class));
				out.append("pData", pDataList);

				return Response.status(Response.Status.OK).entity(out.toString()).build();

			}
		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/download")
	@Produces({ MediaType.APPLICATION_OCTET_STREAM, MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN })
	public Response downloadAccountAndPData(@PathParam("accountId") String accountId) {

		try {

			Account account = dao.getAccount(accountId);

			// Call PData Manager in order to retrieve the Account PData and
			// to append to the response
			List<PDataEntry> pDataList = callGetAllPData(accountId);
			JSONObject out = new JSONObject(DAOUtils.obj2Json(account, Account.class));
			out.append("pData", pDataList);

			return Response.ok(out.toString())
					.header("Content-Disposition", "attachment;filename=" + accountId + "_AccountData" + ".json")
					.build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/exists")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response existsAccount(@PathParam("accountId") String accountId) {

		try {

			JSONObject out = new JSONObject();
			out.put("result", dao.existsAccount(accountId));

			return Response.status(Response.Status.OK).entity(out.toString()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/accounts/{accountId}/telephones")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response addTelephone(String input, @PathParam("accountId") String accountId) {

		Telephone phone;

		try {
			phone = DAOUtils.json2Obj(input, Telephone.class);

			Telephone created = dao.addTelephone(phone, accountId);

			return Response.status(Response.Status.CREATED)
					.entity(DAOUtils.obj2Json(created, Telephone.class).toString()).build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/telephones/{telephoneId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getTelephone(@PathParam("accountId") String accountId,
			@PathParam("telephoneId") String telephoneId) {

		try {

			Telephone phone = dao.getTelephone(accountId, telephoneId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(phone, Telephone.class)).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (TelephoneNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/telephones")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getTelephones(@PathParam("accountId") String accountId) {

		try {

			List<Telephone> phone = dao.getTelephones(accountId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(phone, new TypeToken<ArrayList<Telephone>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (TelephoneNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@PUT
	@Path("/accounts/{accountId}/telephones/{telephoneId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response updateTelephone(String input, @PathParam("accountId") String accountId,
			@PathParam("telephoneId") String telephoneId) {

		try {

			Telephone phone = DAOUtils.json2Obj(input, Telephone.class);
			phone.set_id(telephoneId);

			Telephone updated = dao.updateTelephone(phone, accountId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(updated, Telephone.class).toString())
					.build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (TelephoneNotFoundException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@DELETE
	@Path("/accounts/{accountId}/telephones/{telephoneId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteTelephone(@PathParam("accountId") String accountId,
			@PathParam("telephoneId") String telephoneId) {

		try {
			dao.deleteTelephone(telephoneId, accountId);
			return Response.status(Response.Status.OK).build();

		} catch (TelephoneNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/accounts/{accountId}/contacts")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response addContact(String input, @PathParam("accountId") String accountId) {

		Contact contact;

		try {
			contact = DAOUtils.json2Obj(input, Contact.class);

			Contact created = dao.addContact(contact, accountId);

			return Response.status(Response.Status.CREATED).entity(DAOUtils.obj2Json(created, Contact.class).toString())
					.build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/contacts/{contactId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getContact(@PathParam("accountId") String accountId, @PathParam("contactId") String contactId) {

		try {

			Contact contact = dao.getContact(accountId, contactId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(contact, Contact.class)).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ContactNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/contacts")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getContacts(@PathParam("accountId") String accountId) {

		try {

			List<Contact> contacts = dao.getContacts(accountId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(contacts, new TypeToken<ArrayList<Contact>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ContactNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@PUT
	@Path("/accounts/{accountId}/contacts/{contactId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response updateContact(String input, @PathParam("accountId") String accountId,
			@PathParam("contactId") String contactId) {

		try {

			Contact contact = DAOUtils.json2Obj(input, Contact.class);
			contact.set_id(contactId);

			Contact updated = dao.updateContact(contact, accountId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(updated, Contact.class).toString())
					.build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ContactNotFoundException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@DELETE
	@Path("/accounts/{accountId}/contacts/{contactId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteContact(@PathParam("accountId") String accountId, @PathParam("contactId") String contactId) {

		try {
			dao.deleteContact(contactId, accountId);
			return Response.status(Response.Status.OK).build();

		} catch (ContactNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/accounts/{accountId}/emails")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response addEmail(String input, @PathParam("accountId") String accountId) {

		Email email;

		try {
			email = DAOUtils.json2Obj(input, Email.class);

			Email created = dao.addEmail(email, accountId);

			return Response.status(Response.Status.CREATED).entity(DAOUtils.obj2Json(created, Email.class).toString())
					.build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/emails/{emailId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getEmail(@PathParam("accountId") String accountId, @PathParam("emailId") String emailId) {

		try {

			Email email = dao.getEmail(accountId, emailId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(email, Email.class)).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (EmailNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/emails")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getEmails(@PathParam("accountId") String accountId) {

		try {

			List<Email> emails = dao.getEmails(accountId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(emails, new TypeToken<ArrayList<Email>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (EmailNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@PUT
	@Path("/accounts/{accountId}/emails/{emailId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response updateEmail(String input, @PathParam("accountId") String accountId,
			@PathParam("emailId") String emailId) {

		try {

			Email email = DAOUtils.json2Obj(input, Email.class);
			email.set_id(emailId);

			Email updated = dao.updateEmail(email, accountId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(updated, Email.class).toString())
					.build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (EmailNotFoundException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@DELETE
	@Path("/accounts/{accountId}/emails/{emailId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteEmail(@PathParam("accountId") String accountId, @PathParam("emailId") String emailId) {

		try {
			dao.deleteEmail(emailId, accountId);
			return Response.status(Response.Status.OK).build();

		} catch (EmailNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/accounts/{accountId}/particular")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response addParticular(String input, @PathParam("accountId") String accountId) {

		Particular particular;

		try {
			particular = DAOUtils.json2Obj(input, Particular.class);

			Particular created = dao.addParticular(particular, accountId);

			return Response.status(Response.Status.CREATED)
					.entity(DAOUtils.obj2Json(created, Particular.class).toString()).build();

		} catch (AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/particular")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getParticular(@PathParam("accountId") String accountId) {

		try {

			Particular particular = dao.getParticular(accountId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(particular, Particular.class)).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ParticularNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	// Viene utilizzato addParticular, essendocene solo uno
	// @Override
	// @PUT
	// @Path("/accounts/{accountId}/particular")
	// @Consumes({ MediaType.APPLICATION_JSON })
	// @Produces({ MediaType.APPLICATION_JSON })
	// public Response updateParticular(String input, @PathParam("accountId")
	// String accountId) {
	//
	// try {
	//
	// Particular particular = DAOUtils.json2Obj(input, Particular.class);
	//
	//
	// Particular updated = dao.updateParticular(particular, accountId);
	//
	// return
	// Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(updated,
	// Particular.class).toString())
	// .build();
	//
	// } catch (AccountUtilsException e) {
	// e.printStackTrace();
	// ErrorResponse error = new
	// ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
	// e.getClass().getSimpleName(), e.getMessage());
	// return
	// Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();
	//
	// } catch (ParticularNotFoundException e) {
	// e.printStackTrace();
	// ErrorResponse error = new
	// ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
	// e.getClass().getSimpleName(), e.getMessage());
	// return
	// Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();
	//
	// } catch (AccountManagerException e) {
	// e.printStackTrace();
	// ErrorResponse error = new ErrorResponse(
	// String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()),
	// e.getClass().getSimpleName(),
	// e.getMessage());
	// return
	// Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
	//
	// }
	//
	// }

	@Override
	@DELETE
	@Path("/accounts/{accountId}/particular")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteParticular(@PathParam("accountId") String accountId) {

		try {
			dao.deleteParticular(accountId);
			return Response.status(Response.Status.OK).build();

		} catch (ParticularNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/accounts/{accountId}/serviceLinks")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response createServiceLinkRecord(String input, @PathParam("accountId") String accountId) {

		try {
			// INPUT

			JSONObject jsonInput = new JSONObject(input);
			String serviceId = jsonInput.optString("serviceId");
			String serviceUri = jsonInput.optString("serviceUri");
			String surrogateId = jsonInput.optString("userId");

			if (StringUtils.isNotBlank(serviceId) && StringUtils.isNotBlank(serviceUri)
					&& StringUtils.isNotBlank(surrogateId)) {

				ServiceLinkStatusRecord statusRecord = new ServiceLinkStatusRecord(ServiceLinkStatusEnum.ACTIVE);
				ServiceLinkRecord record;

				if (dao.existsServiceLinkRecord(accountId, serviceId)) {

					record = dao.getServiceLinkRecordByServiceId(accountId, serviceId);
					List<ServiceLinkStatusRecord> ssrList = record.getServiceLinkStatusRecords();
					ServiceLinkStatusEnum lastStatus = ssrList.get(ssrList.size() - 1).getServiceLinkStatus();

					if (lastStatus.equals(ServiceLinkStatusEnum.ACTIVE)) {

						return Response.status(Response.Status.OK)
								.entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class).toString()).build();
					}

				} else {
					record = dao.addServiceLinkRecord(accountId,
							new ServiceLinkRecord(serviceId, serviceUri, surrogateId));
				}

				ServiceLinkStatusRecord createdStatusRecord = dao.addServiceLinkStatusRecord(accountId, record.get_id(),
						statusRecord);
				record.addServiceLinkStatusRecord(createdStatusRecord);

				return Response.status(Response.Status.CREATED)
						.entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class).toString()).build();

			} else {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
						StringUtils.isNotBlank(surrogateId)
								? StringUtils.isBlank(serviceId) ? "ServiceIdMissing" : "ServiceUriMissing"
								: " SurrogateIdMissing",
						StringUtils.isNotBlank(surrogateId)
								? StringUtils.isBlank(serviceId) ? "The serviceId is empty or missing"
										: "The serviceUri is empty or missing"
								: "The userId (surrogate) is empty or missing");
				return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

			}

		} catch (JSONException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException | AccountUtilsException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		}

	}

	@Override
	@PUT
	@Path("/accounts/{accountId}/serviceLinks/{slrId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response disableServiceLinkRecord(@PathParam("accountId") String accountId,
			@PathParam("slrId") String slrId) {

		try {

			ServiceLinkRecord record = dao.getServiceLinkRecord(accountId, slrId);
			List<ServiceLinkStatusRecord> ssrList = record.getServiceLinkStatusRecords();
			ServiceLinkStatusEnum lastStatus = ssrList.get(ssrList.size() - 1).getServiceLinkStatus();

			if (lastStatus.equals(ServiceLinkStatusEnum.ACTIVE)) {

				dao.addServiceLinkStatusRecord(accountId, slrId,
						new ServiceLinkStatusRecord(ServiceLinkStatusEnum.REMOVED));
				return Response.status(Response.Status.OK).build();
			} else {
				ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.CONFLICT.getStatusCode()),
						"ServiceLinkRecordAlreadyDisabled", "The Service Link Record with id: " + slrId
								+ " for the Account id: " + accountId + "is already disabled");
				return Response.status(Response.Status.CONFLICT).entity(error.toJson()).build();

			}

		} catch (ServiceLinkRecordNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountNotFoundException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/serviceLinks")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkRecords(@PathParam("accountId") String accountId) {

		try {

			List<ServiceLinkRecord> records = dao.getServiceLinkRecords(accountId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(records, new TypeToken<ArrayList<ServiceLinkRecord>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/serviceLinks/{slrId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkRecord(@PathParam("accountId") String accountId, @PathParam("slrId") String slrId) {

		try {

			ServiceLinkRecord record = dao.getServiceLinkRecord(accountId, slrId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class))
					.build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/services/{serviceId}/serviceLinks")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkRecordByServiceId(@PathParam("accountId") String accountId,
			@PathParam("serviceId") String serviceId) {

		try {

			ServiceLinkRecord record = dao.getServiceLinkRecordByServiceId(accountId, serviceId);

			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class))
					.build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/users/{surrogateId}/services/{serviceId}/serviceLink")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkRecordBySurrogateIdAndServiceId(@PathParam("surrogateId") String surrogateId,
			@PathParam("serviceId") String serviceId) {

		try {

			ServiceLinkRecord record = dao.getServiceLinkRecordBySurrogateIdAndServiceId(surrogateId, serviceId);
			record.setAccountId(null);
			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class))
					.build();
		} catch (JSONException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/users/{surrogateId}/serviceLink")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkRecordBySurrogateId(@PathParam("surrogateId") String surrogateId) {

		try {

			ServiceLinkRecord record = dao.getServiceLinkRecordBySurrogateId(surrogateId);
			record.setAccountId(null);
			return Response.status(Response.Status.OK).entity(DAOUtils.obj2Json(record, ServiceLinkRecord.class))
					.build();
		} catch (JSONException e) {
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@GET
	@Path("/accounts/{accountId}/serviceLinks/{slrId}/statuses")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkStatusRecords(@PathParam("accountId") String accountId,
			@PathParam("slrId") String slrId) {

		try {

			List<ServiceLinkStatusRecord> statusRecords = dao.getServiceLinkStatusRecords(accountId, slrId);

			return Response.status(Response.Status.OK)
					.entity(DAOUtils.obj2Json(statusRecords, new TypeToken<ArrayList<ServiceLinkStatusRecord>>() {
					}.getType())).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkStatusRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@DELETE
	@Path("/accounts/{accountId}/serviceLinks/{slrId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteServiceLinkRecordById(@PathParam("accountId") String accountId,
			@PathParam("slrId") String slrId) {

		try {
			dao.deleteServiceLinkRecordById(accountId, slrId);
			return Response.status(Response.Status.OK).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	@Override
	@DELETE
	@Path("/users/{surrogateId}/services/{serviceId}/serviceLink")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response deleteServiceLinkRecordBySurrogateIdAndServiceId(@PathParam("surrogateId") String surrogateId,
			@PathParam("serviceId") String serviceId) {

		try {
			dao.deleteServiceLinkRecordBySurrogateIdAndServiceId(surrogateId, serviceId);
			return Response.status(Response.Status.OK).build();

		} catch (ServiceLinkRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (AccountManagerException e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	// @Override
	@GET
	@Path("/accounts/{accountId}/serviceLinks/{slrId}/statuses/{ssrId}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getServiceLinkStatusRecord(@PathParam("accountId") String accountId,
			@PathParam("slrId") String slrId, @PathParam("ssrId") String ssrId) {

		try {

			ServiceLinkStatusRecord statusRecord = dao.getServiceLinkStatusRecord(accountId, slrId, ssrId);

			return Response.status(Response.Status.BAD_REQUEST)
					.entity(DAOUtils.obj2Json(statusRecord, ServiceLinkStatusRecord.class)).build();

		} catch (AccountUtilsException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkStatusRecordNotFoundException e) {
			System.out.println(e.getMessage());
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.NOT_FOUND.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.NOT_FOUND).entity(error.toJson()).build();

		} catch (Exception e) {
			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();
		}

	}

	@Override
	@POST
	@Path("/verifySLR")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response verifyServiceLinkRecord(final String input) {

		try {

			JSONObject inputJson = new JSONObject(input);
			String slrId = inputJson.getString("slrId");
			String surrogateId = inputJson.getString("surrogateId");

			ServiceLinkRecord record = dao.getServiceLinkRecordById(slrId);
			List<ServiceLinkStatusRecord> slrStatuses = record.getServiceLinkStatusRecords();

			// TODO hash match checking of the input SLR with the stored one

			// check if SLR has active SSR
			// check if input slrId and surrogateId matches with the retrieved
			// ones

			if (slrId.equals(record.get_id()) && surrogateId.equals(record.getSurrogateId())
					&& slrStatuses.stream()
							.filter(status -> status.getServiceLinkStatus().equals(ServiceLinkStatusEnum.ACTIVE))
							.count() != 0
					&& surrogateId.equals(record.getSurrogateId())) {

				JSONObject result = new JSONObject();
				result.put("result", "success");
				result.put("message", "The provided SLR has been verified successfully");
				result.put("accountId", record.getAccountId());
				result.put("serviceId", record.getServiceId());
				result.put("username", record.getUsername());

				return Response.status(Response.Status.OK).entity(result.toString()).build();

			} else {

				JSONObject result = new JSONObject();
				result.put("result", "failed");
				result.put("message", "The provided SLR has no active status");
				return Response.status(Response.Status.OK).entity(result.toString()).build();

			}

		} catch (JSONException e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(String.valueOf(Response.Status.BAD_REQUEST.getStatusCode()),
					e.getClass().getSimpleName(), e.getMessage());

			return Response.status(Response.Status.BAD_REQUEST).entity(error.toJson()).build();

		} catch (ServiceLinkRecordNotFoundException e) {

			System.out.println(e.getMessage());
			JSONObject result = new JSONObject();
			result.put("result", "failed");
			result.put("message", "The provided SLR Id does not match with any SLR");
			return Response.status(Response.Status.OK).entity(result.toString()).build();

		} catch (Exception e) {

			e.printStackTrace();
			ErrorResponse error = new ErrorResponse(
					String.valueOf(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()), e.getClass().getSimpleName(),
					e.getMessage());

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error.toJson()).build();

		}

	}

	private static void callDeletePData(String accountId) throws PDataManagerCallException {

		Response response = null;
		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(PropertyManager.getProperty("PDATAMANAGER_HOST") + "/api/internal/pData");

			Invocation.Builder invocationBuilder = webTarget.request().header("accountId", accountId);
			response = invocationBuilder.delete();

			int status = response.getStatus();

			if (status == 200)
				return;
			else if (status == 404 && response.hasEntity()
					&& response.readEntity(String.class).contains("PDataNotFoundException"))
				return;
			else
				throw new PDataManagerCallException(
						"There was an error while deleting the Personal Data of Account with id: " + accountId);

		} catch (JSONException e) {
			e.printStackTrace();
			throw new PDataManagerCallException(
					"There was an error while deleting the Personal Data of Account with id: " + accountId);
		} finally {
			if (response != null)
				response.close();
		}

	}

	private static List<PDataEntry> callGetAllPData(String accountId) throws PDataManagerCallException {

		Response response = null;
		try {

			Client client = ClientBuilder.newClient();
			WebTarget webTarget = client
					.target(PropertyManager.getProperty("PDATAMANAGER_HOST") + "/api/internal/pData");

			Invocation.Builder invocationBuilder = webTarget.request().header("accountId", accountId);
			response = invocationBuilder.get();

			int status = response.getStatus();

			if (status == 200) {

				return DAOUtils.json2Obj(response.readEntity(String.class), new TypeToken<ArrayList<PDataEntry>>() {
				}.getType());

			} else if (status == 404 && response.hasEntity()
					&& response.readEntity(String.class).contains("PDataNotFoundException"))
				return new ArrayList<PDataEntry>();
			else
				throw new PDataManagerCallException(
						"There was an error while retrieving the Personal Data of Account with id: " + accountId);

		} catch (JSONException | AccountUtilsException e) {
			e.printStackTrace();
			throw new PDataManagerCallException(
					"There was an error while retrieving the Personal Data of Account with id: " + accountId);
		} finally {
			if (response != null)
				response.close();
		}

	}

}
