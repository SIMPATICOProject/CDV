package it.eng.opsi.cdv.pdatarepository.model;

import java.time.ZoneId;
import java.time.ZonedDateTime;

public class PDataReport {
	
	public PDataReport() {
	}
	public PDataReport(String name, int count) {
		super();
		
		this.name = name;
		this.count = count;
		this.created = ZonedDateTime.now(ZoneId.of("UTC"));
	}
	private String name;
	private int count;
	private ZonedDateTime created;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public ZonedDateTime getCreated() {
		return created;
	}

	public void setCreated(ZonedDateTime created) {
		this.created = created;
	}
}
