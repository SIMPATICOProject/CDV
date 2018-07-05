package it.eng.opsi.cdv.datasecuritymanager.crypt.utils;

import java.io.Closeable;
import java.io.IOException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class PersistenceManager implements Closeable{
	
	private static SessionFactory factory;
	private Session session;
	private Transaction transaction;
	
	static{
		factory = new Configuration().configure("it/eng/opsi/cdv/datasecuritymanager/crypt/config/hibernate/hibernate.cfg.xml").buildSessionFactory(); 
	}
	
	//Factory management
	private void initFactory(){
	
		try{
			if(factory==null)
				factory = new Configuration().configure().buildSessionFactory(); 
		}
		catch (Throwable ex) {
	         System.err.println("Failed to create sessionFactory object." + ex);
	         throw new ExceptionInInitializerError(ex); 
	    }
		
	}
	
	protected SessionFactory getFactory(){
		
		initFactory();
		return factory;
		
	}
	
	//Session management
	private void initSession(){
		
		if(this.session == null)
			this.session = getFactory().openSession();
		
		return;
		
	}
	
	public Session getSession(){
		
		initSession();		
		return this.session;
	
	}
	
	private void closeSession(){
		
		if(this.session != null && this.session.isOpen())
			session.close();
		
		return;
		
	}
	
	//Transaction management
	public void initTransaction(){
		
		if(this.transaction == null)
			this.transaction = this.getSession().beginTransaction();
		
		return;
		
	}
	
	private void closeTransaction(){
		
		if(this.transaction != null){
			this.transaction.commit();
			this.transaction = null;
		}
		
		return;
		
	}
	
	public void rollback(){
		
		if(this.transaction != null)
			this.transaction.rollback();
		
		return;
		
	}

	@Override
	public void close() throws IOException {
		
		closeTransaction();
		closeSession();
		
	}
	
}
