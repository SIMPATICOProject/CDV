package it.eng.opsi.cdv.datasecuritymanager.crypt.model;

public class UserKey {
	
	private String userid;
	private String key;
	
	public UserKey(){}
	
	public UserKey(String userid, String key){
		this.setUserid(userid);
		this.setKey(key);
	}

	/**
	 * @return the userid
	 */
	public String getUserid() {
		return userid;
	}

	/**
	 * @param userid the userid to set
	 */
	public void setUserid(String userid) {
		this.userid = userid;
	}

	/**
	 * @return the key
	 */
	public String getKey() {
		return key;
	}

	/**
	 * @param key the key to set
	 */
	public void setKey(String key) {
		this.key = key;
	}
	
	

}
