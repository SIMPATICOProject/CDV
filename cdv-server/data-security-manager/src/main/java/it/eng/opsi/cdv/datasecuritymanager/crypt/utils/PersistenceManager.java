/*******************************************************************************
 * The MIT License (MIT)
 * Copyright (c) 2016, 2018  Engineering Ingegneria Informatica S.p.A
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *******************************************************************************/
package it.eng.opsi.cdv.datasecuritymanager.crypt.utils;

import java.io.Closeable;
import java.io.IOException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class PersistenceManager implements Closeable {

	private static SessionFactory factory;
	private Session session;
	private Transaction transaction;

	static {
		factory = new Configuration()
				.configure("it/eng/opsi/cdv/datasecuritymanager/crypt/config/hibernate/hibernate.cfg.xml")
				.buildSessionFactory();
	}

	// Factory management
	private void initFactory() {

		try {
			if (factory == null)
				factory = new Configuration().configure().buildSessionFactory();
		} catch (Throwable ex) {
			System.err.println("Failed to create sessionFactory object." + ex);
			throw new ExceptionInInitializerError(ex);
		}

	}

	protected SessionFactory getFactory() {

		initFactory();
		return factory;

	}

	// Session management
	private void initSession() {

		if (this.session == null)
			this.session = getFactory().openSession();

		return;

	}

	public Session getSession() {

		initSession();
		return this.session;

	}

	private void closeSession() {

		if (this.session != null && this.session.isOpen())
			session.close();

		return;

	}

	// Transaction management
	public void initTransaction() {

		if (this.transaction == null)
			this.transaction = this.getSession().beginTransaction();

		return;

	}

	private void closeTransaction() {

		if (this.transaction != null) {
			this.transaction.commit();
			this.transaction = null;
		}

		return;

	}

	public void rollback() {

		if (this.transaction != null)
			this.transaction.rollback();

		return;

	}

	@Override
	public void close() throws IOException {

		closeTransaction();
		closeSession();

	}

}
