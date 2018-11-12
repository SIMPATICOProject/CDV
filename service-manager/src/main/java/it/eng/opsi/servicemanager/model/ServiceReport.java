package it.eng.opsi.servicemanager.model;

public class ServiceReport {
	
	public ServiceReport() {
	}
	public ServiceReport(String sector, int count) {
		super();
		
		this.sector = (sector.equalsIgnoreCase("")) ? "other" : sector;
		
		this.count = count;
	}
	private String sector;
	private int count;
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = (sector.equalsIgnoreCase("")) ? "other" : sector;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
}
