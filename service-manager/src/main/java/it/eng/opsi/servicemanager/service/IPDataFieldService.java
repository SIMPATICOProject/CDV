package it.eng.opsi.servicemanager.service;

import java.util.List;

import it.eng.opsi.servicemanager.data.PDataField;


public interface IPDataFieldService {

	public abstract List<PDataField> getPDataFields();

	public abstract PDataField getPDataFieldById(String id);

	public abstract List<PDataField> findPDataFieldByName(String regex);

	public abstract List<PDataField> getPDataFieldByCategory(String category);

}