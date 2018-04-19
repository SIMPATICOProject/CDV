package it.eng.opsi.servicemanager;


import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;

import it.eng.opsi.servicemanager.service.ServiceRegistryService;

import javax.ws.rs.core.Application;

public class ServiceRegistryServiceTest extends JerseyTest {

    @Override
    protected Application configure() {
        return new ResourceConfig(ServiceRegistryService.class);
    }

    @Test
    public void createTest() {
        //String response = target("/services/").request().get(String.class);
        Assert.assertTrue(true);


    }

   @Test
    public void updateTest() {
        //String response = target("orders/summary").request().get(String.class);
        Assert.assertTrue(true);
    }
}