/*******************************************************************************
 * The MIT License (MIT) Copyright (c) 2016, 2018 Engineering Ingegneria
 * Informatica S.p.A
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *******************************************************************************/
package it.eng.opsi.cdv.accountmanager.security.config;

// package it.eng.opsi.cdv.accountmanager.simpatico.security.config;
//
// import javax.sql.DataSource;
//
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.PropertySource;
// import org.springframework.core.env.Environment;
// import org.springframework.http.HttpMethod;
// import org.springframework.jdbc.datasource.DriverManagerDataSource;
// import
// org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import
// org.springframework.security.config.annotation.web.builders.WebSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import
// org.springframework.security.web.access.channel.ChannelProcessingFilter;
// import
// org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
// import
// org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// import
// org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
// import
// org.springframework.security.web.context.SecurityContextPersistenceFilter;
// import
// org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter;
// import org.springframework.web.filter.CorsFilter;
//
// @Configuration
// @EnableWebSecurity
// @EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
// @PropertySource({ "classpath:persistence.properties" })
// public class ResourceServerSecurityWebConfig extends
// WebSecurityConfigurerAdapter {
//
// @Autowired
// private Environment env;
//
// @Override
// protected void configure(HttpSecurity http) throws Exception {
//
// http.csrf().disable();
// http.authorizeRequests().anyRequest().permitAll();//.and().addFilterBefore(tokenFilter(),
// //UsernamePasswordAuthenticationFilter.class);
//
//
// }
//
//
//
//
// // @Bean
// public AACFilter tokenFilter() throws Exception {
// return new AACFilter();
// }
//
// @Bean
// public DataSource dataSource() {
// final DriverManagerDataSource dataSource = new DriverManagerDataSource();
// dataSource.setDriverClassName(env.getProperty("jdbc.driverClassName"));
// dataSource.setUrl(env.getProperty("jdbc.url"));
// dataSource.setUsername(env.getProperty("jdbc.user"));
// dataSource.setPassword(env.getProperty("jdbc.pass"));
// return dataSource;
// }
//
// }
