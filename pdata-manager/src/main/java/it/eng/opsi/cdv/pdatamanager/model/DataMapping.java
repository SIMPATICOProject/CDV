//
// Questo file è stato generato dall'architettura JavaTM per XML Binding (JAXB) Reference Implementation, v2.2.8-b130911.1802 
// Vedere <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Qualsiasi modifica a questo file andrà persa durante la ricompilazione dello schema di origine. 
// Generato il: 2016.11.24 alle 03:49:07 PM CET 
//

package it.eng.opsi.cdv.pdatamanager.model;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * <p>
 * Classe Java per DataMapping complex type.
 * 
 * <p>
 * Il seguente frammento di schema specifica il contenuto previsto contenuto in
 * questa classe.
 * 
 * <pre>
 * &lt;complexType name="DataMapping">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="property" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="conceptId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="type" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DataMapping", propOrder = { "property", "conceptId", "name", "type" })
public class DataMapping {

	@XmlElement(required = true)
	protected String property;
	@XmlElement(required = true)
	protected String conceptId;
	@XmlElement(required = true)
	protected String name;
	@XmlElement(required = true)
	protected String type;



	/**
	 * Recupera il valore della proprietà property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getProperty() {
		return property;
	}

	/**
	 * Imposta il valore della proprietà property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setProperty(String value) {
		this.property = value;
	}

	/**
	 * Recupera il valore della proprietà conceptId.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getConceptId() {
		return conceptId;
	}

	/**
	 * Imposta il valore della proprietà conceptId.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setConceptId(String value) {
		this.conceptId = value;
	}

	/**
	 * Recupera il valore della proprietà name.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getName() {
		return name;
	}

	/**
	 * Imposta il valore della proprietà name.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setName(String value) {
		this.name = value;
	}

	/**
	 * Recupera il valore della proprietà type.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getType() {
		return type;
	}

	/**
	 * Imposta il valore della proprietà type.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setType(String value) {
		this.type = value;
	}

	

	@Override
	public boolean equals(Object obj) {

		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DataMapping other = (DataMapping) obj;

		if (this.getConceptId().equals(other.getConceptId())) {
			return true;
		} else
			return false;
	}

	@Override
	public int hashCode() {
		return this.getConceptId().hashCode();
	}

}
