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
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * Main entity of the registered service containing its description
 * 
 * <p>Classe Java per anonymous complex type.
 * 
 * <p>Il seguente frammento di schema specifica il contenuto previsto contenuto in questa classe.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="serviceId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceDescriptionTitle" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceDescriptionVersion" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceIconURI" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="keywords" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="createdOnDate" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="modifiedOnDate" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="modifiedByUserId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="createdByUserId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceProviderId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="humanReadableDescription" type="{data.servicemanager.opsi.eng.it}HumanReadableDescription"/>
 *         &lt;element name="technicalDescriptionId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceDataDescription" type="{data.servicemanager.opsi.eng.it}ServiceDataDescription"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "serviceId",
    "serviceDescriptionTitle",
    "serviceDescriptionVersion",
    "serviceIconURI",
    "keywords",
    "createdOnDate",
    "modifiedOnDate",
    "modifiedByUserId",
    "createdByUserId",
    "serviceProviderId",
    "humanReadableDescription",
    "technicalDescriptionId",
    "serviceDataDescription"
})
@XmlRootElement(name = "ServiceEntry")
public class ServiceEntry {

    @XmlElement(required = true)
    protected String serviceId;
    @XmlElement(required = true)
    protected String serviceDescriptionTitle;
    @XmlElement(required = true)
    protected String serviceDescriptionVersion;
    @XmlElement(required = true)
    protected String serviceIconURI;
    protected List<String> keywords;
    protected long createdOnDate;
    protected long modifiedOnDate;
    @XmlElement(required = true)
    protected String modifiedByUserId;
    @XmlElement(required = true)
    protected String createdByUserId;
    @XmlElement(required = true)
    protected String serviceProviderId;
    @XmlElement(required = true)
    protected HumanReadableDescription humanReadableDescription;
    @XmlElement(required = true)
    protected String technicalDescriptionId;
    @XmlElement(required = true)
    protected ServiceDataDescription serviceDataDescription;

    /**
     * Recupera il valore della proprietà serviceId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceId() {
        return serviceId;
    }

    /**
     * Imposta il valore della proprietà serviceId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceId(String value) {
        this.serviceId = value;
    }

    /**
     * Recupera il valore della proprietà serviceDescriptionTitle.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceDescriptionTitle() {
        return serviceDescriptionTitle;
    }

    /**
     * Imposta il valore della proprietà serviceDescriptionTitle.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceDescriptionTitle(String value) {
        this.serviceDescriptionTitle = value;
    }

    /**
     * Recupera il valore della proprietà serviceDescriptionVersion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceDescriptionVersion() {
        return serviceDescriptionVersion;
    }

    /**
     * Imposta il valore della proprietà serviceDescriptionVersion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceDescriptionVersion(String value) {
        this.serviceDescriptionVersion = value;
    }

    /**
     * Recupera il valore della proprietà serviceIconURI.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceIconURI() {
        return serviceIconURI;
    }

    /**
     * Imposta il valore della proprietà serviceIconURI.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceIconURI(String value) {
        this.serviceIconURI = value;
    }

    /**
     * Gets the value of the keywords property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the keywords property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getKeywords().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getKeywords() {
        if (keywords == null) {
            keywords = new ArrayList<String>();
        }
        return this.keywords;
    }

    /**
     * Recupera il valore della proprietà createdOnDate.
     * 
     */
    public long getCreatedOnDate() {
        return createdOnDate;
    }

    /**
     * Imposta il valore della proprietà createdOnDate.
     * 
     */
    public void setCreatedOnDate(long value) {
        this.createdOnDate = value;
    }

    /**
     * Recupera il valore della proprietà modifiedOnDate.
     * 
     */
    public long getModifiedOnDate() {
        return modifiedOnDate;
    }

    /**
     * Imposta il valore della proprietà modifiedOnDate.
     * 
     */
    public void setModifiedOnDate(long value) {
        this.modifiedOnDate = value;
    }

    /**
     * Recupera il valore della proprietà modifiedByUserId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModifiedByUserId() {
        return modifiedByUserId;
    }

    /**
     * Imposta il valore della proprietà modifiedByUserId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModifiedByUserId(String value) {
        this.modifiedByUserId = value;
    }

    /**
     * Recupera il valore della proprietà createdByUserId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCreatedByUserId() {
        return createdByUserId;
    }

    /**
     * Imposta il valore della proprietà createdByUserId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCreatedByUserId(String value) {
        this.createdByUserId = value;
    }

    /**
     * Recupera il valore della proprietà serviceProviderId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceProviderId() {
        return serviceProviderId;
    }

    /**
     * Imposta il valore della proprietà serviceProviderId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceProviderId(String value) {
        this.serviceProviderId = value;
    }

    /**
     * Recupera il valore della proprietà humanReadableDescription.
     * 
     * @return
     *     possible object is
     *     {@link HumanReadableDescription }
     *     
     */
    public HumanReadableDescription getHumanReadableDescription() {
        return humanReadableDescription;
    }

    /**
     * Imposta il valore della proprietà humanReadableDescription.
     * 
     * @param value
     *     allowed object is
     *     {@link HumanReadableDescription }
     *     
     */
    public void setHumanReadableDescription(HumanReadableDescription value) {
        this.humanReadableDescription = value;
    }

    /**
     * Recupera il valore della proprietà technicalDescriptionId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTechnicalDescriptionId() {
        return technicalDescriptionId;
    }

    /**
     * Imposta il valore della proprietà technicalDescriptionId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTechnicalDescriptionId(String value) {
        this.technicalDescriptionId = value;
    }

    /**
     * Recupera il valore della proprietà serviceDataDescription.
     * 
     * @return
     *     possible object is
     *     {@link ServiceDataDescription }
     *     
     */
    public ServiceDataDescription getServiceDataDescription() {
        return serviceDataDescription;
    }

    /**
     * Imposta il valore della proprietà serviceDataDescription.
     * 
     * @param value
     *     allowed object is
     *     {@link ServiceDataDescription }
     *     
     */
    public void setServiceDataDescription(ServiceDataDescription value) {
        this.serviceDataDescription = value;
    }

}
