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
// package it.eng.opsi.cdv.authmanager.config;
//
// import java.util.Arrays;
//
// import javax.sql.DataSource;
//
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Qualifier;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Primary;
// import org.springframework.context.annotation.PropertySource;
// import org.springframework.core.env.Environment;
// import org.springframework.core.io.Resource;
// import org.springframework.jdbc.datasource.DriverManagerDataSource;
// import org.springframework.jdbc.datasource.init.DataSourceInitializer;
// import org.springframework.jdbc.datasource.init.DatabasePopulator;
// import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
// import org.springframework.security.authentication.AuthenticationManager;
// import
// org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import
// org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
// import
// org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
// import
// org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
// import
// org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
// import
// org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
// import
// org.springframework.security.oauth2.provider.token.DefaultTokenServices;
// import org.springframework.security.oauth2.provider.token.TokenEnhancer;
// import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
// import org.springframework.security.oauth2.provider.token.TokenStore;
// import
// org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
//
//// @Configuration
//// @PropertySource({ "classpath:persistence.properties" })
//// @EnableAuthorizationServer
// public class OAuth2AuthorizationServerConfigInMemory extends
// AuthorizationServerConfigurerAdapter {
//
// @Autowired
// private Environment env;
//
// @Autowired
// @Qualifier("authenticationManagerBean")
// private AuthenticationManager authenticationManager;
//
// @Value("classpath:schema.sql")
// private Resource schemaScript;
//
// @Override
// public void configure(final AuthorizationServerSecurityConfigurer
// oauthServer) throws Exception {
// oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
// }
//
// @Override
// public void configure(final ClientDetailsServiceConfigurer clients) throws
// Exception {// @formatter:off
// clients
//// .jdbc(dataSource())
// .inMemory().withClient("sampleClientId").authorizedGrantTypes("implicit")
// .scopes("read", "write", "foo",
// "bar").autoApprove(false).accessTokenValiditySeconds(3600)
//
// .and().withClient("fooClientIdPassword").secret("secret")
// .authorizedGrantTypes("password", "authorization_code",
// "refresh_token").scopes("foo", "read", "write")
// .accessTokenValiditySeconds(3600) // 1 hour
// .refreshTokenValiditySeconds(2592000) // 30 days
//
// .and().withClient("barClientIdPassword").secret("secret")
// .authorizedGrantTypes("password", "authorization_code",
// "refresh_token").scopes("bar", "read", "write")
// .accessTokenValiditySeconds(3600) // 1 hour
// .refreshTokenValiditySeconds(2592000) // 30 days
// ;
// } // @formatter:on
//
// @Override
// public void configure(final AuthorizationServerEndpointsConfigurer endpoints)
// throws Exception {
// // @formatter:off
// final TokenEnhancerChain tokenEnhancerChain = new TokenEnhancerChain();
//// tokenEnhancerChain.setTokenEnhancers(Arrays.asList(tokenEnhancer()));
// endpoints.tokenStore(tokenStore())
// // .accessTokenConverter(accessTokenConverter())
// .tokenEnhancer(tokenEnhancerChain).authenticationManager(authenticationManager);
// // @formatter:on
// }
//
// /*
// @Bean
// public TokenStore tokenStore() {
// return new JwtTokenStore(accessTokenConverter());
// }
//
// @Bean
// public JwtAccessTokenConverter accessTokenConverter() {
// final JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
// // converter.setSigningKey("123");
// final KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(new
// ClassPathResource("mytest.jks"), "mypass".toCharArray());
// converter.setKeyPair(keyStoreKeyFactory.getKeyPair("mytest"));
// return converter;
// }
// */
// @Bean
// @Primary
// public DefaultTokenServices tokenServices() {
// final DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
// defaultTokenServices.setTokenStore(tokenStore());
// defaultTokenServices.setSupportRefreshToken(true);
// return defaultTokenServices;
// }
//
//// @Bean
//// public TokenEnhancer tokenEnhancer() {
//// return new CustomTokenEnhancer();
//// }
//
// // JDBC token store configuration
//
// @Bean
// public DataSourceInitializer dataSourceInitializer(final DataSource
// dataSource) {
// final DataSourceInitializer initializer = new DataSourceInitializer();
// initializer.setDataSource(dataSource);
// initializer.setDatabasePopulator(databasePopulator());
// return initializer;
// }
//
// private DatabasePopulator databasePopulator() {
// final ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
// populator.addScript(schemaScript);
// return populator;
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
// @Bean
// public TokenStore tokenStore() {
// return new JdbcTokenStore(dataSource());
// }
//
// }
