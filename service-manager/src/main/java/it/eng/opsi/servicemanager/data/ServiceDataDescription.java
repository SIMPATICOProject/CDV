//
// Questo file è stato generato dall'architettura JavaTM per XML Binding (JAXB) Reference Implementation, v2.2.8-b130911.1802 
// Vedere <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Qualsiasi modifica a questo file andrà persa durante la ricompilazione dello schema di origine. 
// Generato il: 2017.01.25 alle 05:43:36 PM CET 
//


package it.eng.opsi.servicemanager.data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * Collection of metadata about service data
 * 
 * <p>Classe Java per ServiceDataDescription complex type.
 * 
 * <p>Il seguente frammento di schema specifica il contenuto previsto contenuto in questa classe.
 * 
 * <pre>
 * &lt;complexType name="ServiceDataDescription">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="dataset" type="{data.servicemanager.opsi.eng.it}Dataset"/>
 *         &lt;element name="description" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="schemaId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="serviceDataDescriptionUri" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="taxonomy" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="title" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="issued" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="modified" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ServiceDataDescription", propOrder = {
    "dataset",
    "description",
    "schemaId",
    "serviceDataDescriptionUri",
    "taxonomy",
    "title",
    "issued",
    "modified"
})
public class ServiceDataDescription {

    @XmlElement(required = true)
    protected Dataset dataset;
    @XmlElement(required = true)
    protected String description;
    @XmlElement(required = true)
    protected String schemaId;
    @XmlElement(required = true)
    protected String serviceDataDescriptionUri;
    @XmlElement(required = true)
    protected String taxonomy;
    @XmlElement(required = true)
    protected String title;
    protected long issued;
    protected long modified;

    /**
     * Recupera il valore della proprietà dataset.
     * 
     * @return
     *     possible object is
     *     {@link Dataset }
     *     
     */
    public Dataset getDataset() {
        return dataset;
    }

    /**
     * Imposta il valore della proprietà dataset.
     * 
     * @param value
     *     allowed object is
     *     {@link Dataset }
     *     
     */
    public void setDataset(Dataset value) {
        this.dataset = value;
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
     * Recupera il valore della proprietà schemaId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSchemaId() {
        return schemaId;
    }

    /**
     * Imposta il valore della proprietà schemaId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSchemaId(String value) {
        this.schemaId = value;
    }

    /**
     * Recupera il valore della proprietà serviceDataDescriptionUri.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceDataDescriptionUri() {
        return serviceDataDescriptionUri;
    }

    /**
     * Imposta il valore della proprietà serviceDataDescriptionUri.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceDataDescriptionUri(String value) {
        this.serviceDataDescriptionUri = value;
    }

    /**
     * Recupera il valore della proprietà taxonomy.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTaxonomy() {
        return taxonomy;
    }

    /**
     * Imposta il valore della proprietà taxonomy.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTaxonomy(String value) {
        this.taxonomy = value;
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

}
