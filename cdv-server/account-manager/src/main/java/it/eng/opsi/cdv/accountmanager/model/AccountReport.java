package it.eng.opsi.cdv.accountmanager.model;

import java.time.ZoneId;
import java.time.ZonedDateTime;

public class AccountReport {
	
	public AccountReport() {
	}
	public AccountReport(int nslr, int ncr) {
		super();
		
		this.nslr =  nslr;
		this.ncr = ncr;
		this.created = ZonedDateTime.now(ZoneId.of("UTC"));
	}
	
	private int nslr;
	private int ncr;
	private ZonedDateTime created;
	
	public int getNslr() {
		return nslr;
	}
	public void setNslr(int nslr) {
		this.nslr = nslr;
	}
	public int getNcr() {
		return ncr;
	}
	public void setNcr(int ncr) {
		this.ncr = ncr;
	}
	public ZonedDateTime getCreated() {
		return created;
	}

	public void setCreated(ZonedDateTime created) {
		this.created = created;
	}
	
}
