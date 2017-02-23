//
// Questo file è stato generato dall'architettura JavaTM per XML Binding (JAXB) Reference Implementation, v2.2.8-b130911.1802 
// Vedere <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Qualsiasi modifica a questo file andrà persa durante la ricompilazione dello schema di origine. 
// Generato il: 2017.01.25 alle 05:43:36 PM CET 
//


package it.eng.opsi.servicemanager.data;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java per Dataset complex type.
 * 
 * <p>Il seguente frammento di schema specifica il contenuto previsto contenuto in questa classe.
 * 
 * <pre>
 * &lt;complexType name="Dataset">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="contactPoint" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="description" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="issued" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="keyword" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="language" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="modified" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="publisher" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceDataType" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="spatial" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="title" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="dataStructureSpecification" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="dataMapping" type="{data.servicemanager.opsi.eng.it}DataMapping" maxOccurs="unbounded"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Dataset", propOrder = {
    "contactPoint",
    "description",
    "issued",
    "keyword",
    "language",
    "modified",
    "publisher",
    "serviceDataType",
    "spatial",
    "title",
    "dataStructureSpecification",
    "dataMapping"
})
public class Dataset {

    @XmlElement(required = true)
    protected String contactPoint;
    @XmlElement(required = true)
    protected String description;
    protected long issued;
    protected List<String> keyword;
    @XmlElement(required = true)
    protected String language;
    protected long modified;
    @XmlElement(required = true)
    protected String publisher;
    @XmlElement(required = true)
    protected String serviceDataType;
    @XmlElement(required = true)
    protected String spatial;
    @XmlElement(required = true)
    protected String title;
    @XmlElement(required = true)
    protected String dataStructureSpecification;
    @XmlElement(required = true)
    protected List<DataMapping> dataMapping;

    /**
     * Recupera il valore della proprietà contactPoint.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getContactPoint() {
        return contactPoint;
    }

    /**
     * Imposta il valore della proprietà contactPoint.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setContactPoint(String value) {
        this.contactPoint = value;
    }

    /**
     * Recupera il valore della proprietà description.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescription() {
        return description;
    }

    /**
     * Imposta il valore della proprietà description.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescription(String value) {
        this.description = value;
    }

    /**
     * Recupera il valore della proprietà issued.
     * 
     */
    public long getIssued() {
        return issued;
    }

    /**
     * Imposta il valore della proprietà issued.
     * 
     */
    public void setIssued(long value) {
        this.issued = value;
    }

    /**
     * Gets the value of the keyword property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the keyword property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getKeyword().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getKeyword() {
        if (keyword == null) {
            keyword = new ArrayList<String>();
        }
        return this.keyword;
    }

    /**
     * Recupera il valore della proprietà language.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLanguage() {
        return language;
    }

    /**
     * Imposta il valore della proprietà language.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLanguage(String value) {
        this.language = value;
    }

    /**
     * Recupera il valore della proprietà modified.
     * 
     */
    public long getModified() {
        return modified;
    }

    /**
     * Imposta il valore della proprietà modified.
     * 
     */
    public void setModified(long value) {
        this.modified = value;
    }

    /**
     * Recupera il valore della proprietà publisher.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPublisher() {
        return publisher;
    }

    /**
     * Imposta il valore della proprietà publisher.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPublisher(String value) {
        this.publisher = value;
    }

    /**
     * Recupera il valore della proprietà serviceDataType.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceDataType() {
        return serviceDataType;
    }

    /**
     * Imposta il valore della proprietà serviceDataType.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceDataType(String value) {
        this.serviceDataType = value;
    }

    /**
     * Recupera il valore della proprietà spatial.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSpatial() {
        return spatial;
    }

    /**
     * Imposta il valore della proprietà spatial.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSpatial(String value) {
        this.spatial = value;
    }

    /**
     * Recupera il valore della proprietà title.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTitle() {
        return title;
    }

    /**
     * Imposta il valore della proprietà title.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTitle(String value) {
        this.title = value;
    }

    /**
     * Recupera il valore della proprietà dataStructureSpecification.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDataStructureSpecification() {
        return dataStructureSpecification;
    }

    /**
     * Imposta il valore della proprietà dataStructureSpecification.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDataStructureSpecification(String value) {
        this.dataStructureSpecification = value;
    }

    /**
     * Gets the value of the dataMapping property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the dataMapping property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDataMapping().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DataMapping }
     * 
     * 
     */
    public List<DataMapping> getDataMapping() {
        if (dataMapping == null) {
            dataMapping = new ArrayList<DataMapping>();
        }
        return this.dataMapping;
    }

}
