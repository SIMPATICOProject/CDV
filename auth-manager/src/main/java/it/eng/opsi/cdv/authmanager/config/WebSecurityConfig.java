package it.eng.opsi.cdv.authmanager.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.client.ClientCredentialsTokenEndpointFilter;
import org.springframework.security.oauth2.provider.client.ClientDetailsUserDetailsService;
import org.springframework.security.oauth2.provider.error.OAuth2AuthenticationEntryPoint;
import org.springframework.security.web.access.ExceptionTranslationFilter;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationProvider;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import it.eng.opsi.cdv.authmanager.PasswordEncoder;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	// @Qualifier("clientDetailsService")
	private ClientDetailsService oauth2ClientDetailsService;

	@Autowired
	public void globalUserDetails(final AuthenticationManagerBuilder auth) throws Exception {
		// // @formatter:off
		// auth.inMemoryAuthentication().withUser("john").password("123").roles("USER").and().withUser("tom")
		// .password("111").roles("ADMIN");
		// // @formatter:on

		auth.authenticationProvider(authenticationProvider());

	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}

	UserDetailsService clientDetailsUserDetailsService() {
		final ClientDetailsUserDetailsService service = new ClientDetailsUserDetailsService(oauth2ClientDetailsService);

		return service;
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(final HttpSecurity http) throws Exception {

		// @formatter:off
		// http.authorizeRequests().antMatchers("/login").permitAll().anyRequest().authenticated().and().formLogin()
		// .permitAll().and().addFilterBefore(filter
		// , BasicAuthenticationFilter.class);

//		http.authorizeRequests().anyRequest().authenticated().and()
				http.authenticationProvider(authenticationProvider()).httpBasic().authenticationEntryPoint(clientAuthenticationEntryPoint())
				.and()
				.addFilterBefore(clientCredentialsTokenEndpointFilter(), BasicAuthenticationFilter.class);
//				.addFilterAfter(oAuth2ClientContextFilter(), ExceptionTranslationFilter.class);

		// @formatter:on

	}

	@Bean
	public AuthenticationProvider authenticationProvider() {

		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(clientDetailsUserDetailsService());
		authProvider.setPasswordEncoder(passwordEncoder());
		return authProvider;

	}
//
	@Bean
	public OAuth2AuthenticationEntryPoint clientAuthenticationEntryPoint() {

		OAuth2AuthenticationEntryPoint oAuthEntryPoint = new OAuth2AuthenticationEntryPoint();
		oAuthEntryPoint.setRealmName("Authorization/client");
		oAuthEntryPoint.setTypeName("Basic");

		return oAuthEntryPoint;
	}
//
	
	@Bean
	public ClientCredentialsTokenEndpointFilter clientCredentialsTokenEndpointFilter() throws Exception {

		ClientCredentialsTokenEndpointFilter clientCredentialsTokenEndpointFilter = new ClientCredentialsTokenEndpointFilter();
		clientCredentialsTokenEndpointFilter.setAuthenticationManager(authenticationManagerBean());

		return clientCredentialsTokenEndpointFilter;
	}
	
	
//
//	@Bean
//	OAuth2ClientContextFilter oAuth2ClientContextFilter() {
//
//		return new OAuth2ClientContextFilter();
//
//	}

	@Bean
	public BasicAuthenticationEntryPoint getBasicAuthenticationEntryPoint() {
		BasicAuthenticationEntryPoint basicAuthenticationEntryPoint = new BasicAuthenticationEntryPoint();
		basicAuthenticationEntryPoint.setRealmName("Basic Authentication");
	
		return basicAuthenticationEntryPoint;
	}

}
