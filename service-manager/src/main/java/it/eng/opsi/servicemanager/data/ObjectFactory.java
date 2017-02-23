//
// Questo file è stato generato dall'architettura JavaTM per XML Binding (JAXB) Reference Implementation, v2.2.8-b130911.1802 
// Vedere <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Qualsiasi modifica a questo file andrà persa durante la ricompilazione dello schema di origine. 
// Generato il: 2017.01.25 alle 05:43:36 PM CET 
//


package it.eng.opsi.servicemanager.data;

import javax.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the it.eng.opsi.servicemanager.data package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {


    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: it.eng.opsi.servicemanager.data
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ServiceEntry }
     * 
     */
    public ServiceEntry createServiceEntry() {
        return new ServiceEntry();
    }

    /**
     * Create an instance of {@link HumanReadableDescription }
     * 
     */
    public HumanReadableDescription createHumanReadableDescription() {
        return new HumanReadableDescription();
    }

    /**
     * Create an instance of {@link ServiceDataDescription }
     * 
     */
    public ServiceDataDescription createServiceDataDescription() {
        return new ServiceDataDescription();
    }

    /**
     * Create an instance of {@link Dataset }
     * 
     */
    public Dataset createDataset() {
        return new Dataset();
    }

    /**
     * Create an instance of {@link DataMapping }
     * 
     */
    public DataMapping createDataMapping() {
        return new DataMapping();
    }

}
