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
package it.eng.opsi.cdv.auditlogmanager.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.language.bm.Rule.RPattern;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.conn.params.ConnManagerParams;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;

import eu.trentorise.smartcampus.network.JsonUtils;
import eu.trentorise.smartcampus.network.RemoteConnector;
import eu.trentorise.smartcampus.network.RemoteException;
import eu.trentorise.smartcampus.profileservice.ProfileServiceException;
import eu.trentorise.smartcampus.profileservice.model.AccountProfile;
import eu.trentorise.smartcampus.profileservice.model.BasicProfile;
import eu.trentorise.smartcampus.profileservice.model.BasicProfiles;

/**
 * Class used to connect with the profile service.
 * 
 */
public class CityEnablerBasicProfileService {

	private static String profileManagerURL;

	/** Basic profile path */
	private static final String BASIC_PROFILE = "user";
	/** account profile path */
	private static final String ACCOUNT_PROFILE = "accountprofile/";

	private static final String ALL = "all/";

	/**
	 * 
	 * @param serverURL
	 *            address of the server to connect to
	 */
	public CityEnablerBasicProfileService(String serverURL) {
		this.profileManagerURL = serverURL;
		if (!profileManagerURL.endsWith("/"))
			profileManagerURL += '/';
	}

	/**
	 * Return the basic profile associated to the access token owner
	 * 
	 * @param token
	 *            a user access token
	 * @return a basic profile
	 * @throws ProfileServiceException
	 */
	public BasicProfile getBasicProfile(String token) throws SecurityException, ProfileServiceException {
		try {
			String json = RemoteConnector.getJSON(profileManagerURL, BASIC_PROFILE + "?access_token=" + token, token);
			System.out.println("json in getBasicProfile in auditlogmanager" + json);
			JSONObject jsonObj = new JSONObject(json);
			jsonObj.put("userId", jsonObj.get("id"));
			jsonObj.put("name", jsonObj.get("displayName"));
			jsonObj.put("surname", "");
			jsonObj.put("socialId", "");
			return JsonUtils.toObject(jsonObj.toString(), BasicProfile.class);
		} catch (RemoteException e) {
			throw new ProfileServiceException(e);
		}
	}
	/*
	 * public String removeProfile(String token) throws SecurityException,
	 * ProfileServiceException { try { System.out.println("removeProfile");
	 * BasicProfile basicProfile = getBasicProfile(token);
	 * System.out.println("basicProfile.getUserId(): "+basicProfile.getUserId());
	 * 
	 * final HttpResponse resp; //final HttpDelete delete = new
	 * HttpDelete("http://217.172.12.145:5000/"+"v3/OS-SCIM/v2/Users/"+basicProfile.
	 * getUserId()); final HttpDelete delete = new
	 * HttpDelete(PropertyManager.getProperty("KEYSTONE_URL")+"v3/users/"+
	 * basicProfile.getUserId());
	 * 
	 * 
	 * System.out.println("url: "+PropertyManager.getProperty("KEYSTONE_URL")+
	 * "v3/users/"+basicProfile.getUserId());
	 * 
	 * //delete.setHeader("Accept", "application/json");
	 * delete.setHeader("X-Auth-token", token);
	 * System.out.println("removeProfile 2"); resp = new
	 * DefaultHttpClient().execute(delete);
	 * System.out.println("removeProfile 3 "+resp.getStatusLine().getStatusCode() );
	 * System.out.println("removeProfile 4 "+resp.getEntity().toString()); //String
	 * response = EntityUtils.toString(resp.getEntity(),"\"UTF-8\"");
	 * 
	 * //System.out.println("response "+response); if
	 * (resp.getStatusLine().getStatusCode() == 204) { return ""; } if
	 * (resp.getStatusLine().getStatusCode() == HttpStatus.SC_FORBIDDEN ||
	 * resp.getStatusLine().getStatusCode() == HttpStatus.SC_UNAUTHORIZED) { throw
	 * new SecurityException(); } throw new SecurityException("Error validating " +
	 * resp.getStatusLine());
	 * 
	 * } catch (ClientProtocolException e) { e.printStackTrace(); throw new
	 * SecurityException(e.getMessage(), e); } catch (ParseException e) {
	 * e.printStackTrace(); throw new SecurityException(e.getMessage(), e); } catch
	 * (IOException e) { e.printStackTrace(); throw new
	 * SecurityException(e.getMessage(), e); } }
	 */

	/**
	 * Return the account profile associated to the access token owner
	 * 
	 * @param token
	 *            a user access token
	 * @return a basic profile
	 * @throws ProfileServiceException
	 */
	public AccountProfile getAccountProfile(String token) throws SecurityException, ProfileServiceException {
		try {
			String json = RemoteConnector.getJSON(profileManagerURL, ACCOUNT_PROFILE + "me", token);
			return AccountProfile.valueOf(json);
		} catch (RemoteException e) {
			throw new ProfileServiceException(e);
		}
	}

	/**
	 * Return the basic profile associated to the access token owner
	 * 
	 * @param token
	 *            a user or client access token
	 * @return a basic profile
	 * @throws ProfileServiceException
	 */
	public BasicProfile getBasicProfileBySocialId(String socialId, String token)
			throws SecurityException, ProfileServiceException {
		try {
			String json = RemoteConnector.getJSON(profileManagerURL, BASIC_PROFILE + "social/" + socialId, token);
			return JsonUtils.toObject(json, BasicProfile.class);
		} catch (RemoteException e) {
			throw new ProfileServiceException(e);
		}
	}

	/**
	 * Return a basic profile of a user identified by his userId
	 * 
	 * @param userId
	 *            id of the user
	 * @param token
	 *            an user or client access token
	 * @return a basic profile
	 * @throws ProfileServiceException
	 */
	public BasicProfile getBasicProfile(String userId, String token) throws SecurityException, ProfileServiceException {
		try {
			String json = RemoteConnector.getJSON(profileManagerURL, BASIC_PROFILE + ALL + userId + "/", token);
			JSONObject jsonObj = new JSONObject(json);
			jsonObj.put("userId", jsonObj.get("id"));
			jsonObj.put("name", jsonObj.get("displayName"));
			jsonObj.put("surname", "");
			jsonObj.put("socialId", "");

			return JsonUtils.toObject(jsonObj.toString(), BasicProfile.class);
		} catch (RemoteException e) {
			throw new ProfileServiceException(e);
		}
	}

	/**
	 * Return a (filtered) list of profiles
	 * 
	 * @param filter
	 *            if not null, filter the results by full name (name and surname)
	 * @param token
	 *            an user or client access token
	 * @return a list of basic profile
	 * @throws ProfileServiceException
	 */
	public List<BasicProfile> getBasicProfiles(String filter, String token)
			throws SecurityException, ProfileServiceException {
		String query = null;
		if (filter != null) {
			try {
				query = "?filter=" + URLEncoder.encode(filter == null ? "" : filter, "utf8");
			} catch (UnsupportedEncodingException e1) {
				throw new ProfileServiceException(e1);
			}
		} else {
			query = "";
		}

		String json;
		try {
			json = RemoteConnector.getJSON(profileManagerURL, BASIC_PROFILE + ALL + query, token);
		} catch (RemoteException e1) {
			throw new ProfileServiceException(e1);
		}

		try {
			return JsonUtils.toObject(json, BasicProfiles.class).getProfiles();
		} catch (Exception e) {
			return Collections.emptyList();
		}
	}

	/**
	 * Returns the list of basic profiles of a list of users
	 * 
	 * @param userIds
	 * @param token
	 *            a user or client access token
	 * @return
	 * @throws ProfileServiceException
	 */
	public List<BasicProfile> getBasicProfilesByUserId(List<String> userIds, String token)
			throws ProfileServiceException {
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("userIds", userIds);
		try {
			String json = RemoteConnector.getJSON(profileManagerURL, BASIC_PROFILE + "profiles", token, parameters);
			return JsonUtils.toObject(json, BasicProfiles.class).getProfiles();
		} catch (RemoteException e) {
			throw new ProfileServiceException(e);
		}
	}

	/**
	 * Returns the list of account profiles of a list of users
	 * 
	 * @param userIds
	 * @param token
	 *            a user or client access token
	 * @return
	 * @throws ProfileServiceException
	 */
	public List<AccountProfile> getAccountProfilesByUserId(List<String> userIds, String token)
			throws ProfileServiceException {
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("userIds", userIds);
		try {
			String json = RemoteConnector.getJSON(profileManagerURL, ACCOUNT_PROFILE + "profiles", token, parameters);
			Map<String, Object> map = JsonUtils.toObject(json, Map.class);
			List<Object> list = (List<Object>) map.get("profiles");
			List<AccountProfile> profiles = new ArrayList<AccountProfile>();
			if (list != null) {
				for (Object o : list) {
					profiles.add(AccountProfile.valueOf((Map) o));
				}
			}
			return profiles;
		} catch (RemoteException e) {
			throw new ProfileServiceException(e);
		}
	}

}
