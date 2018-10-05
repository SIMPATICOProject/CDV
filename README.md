[![Build Status](https://travis-ci.org/SIMPATICOProject/CDV.svg?branch=master)](https://travis-ci.org/SIMPATICOProject/CDV)
[![codecov](https://codecov.io/gh/SIMPATICOProject/CDV/branch/master/graph/badge.svg)](https://codecov.io/gh/SIMPATICOProject/CDV)

# Citizen Data Vault 
Citizen Data Vault (CDV) is a Personal Data Service and Repository that enables citizen (and company) to gather, store, update, correct, analyse, and share personal data.
Of particular importance is the ability to grant and withdraw consent to third parties for access to data about oneself.
With CDV Citizens have a practical mean to manage their data and privacy. 

# CDV features
- Manage Personal Data and Metadata (Ontology)
- Register Services
- Data service and Personal Data Ontology Mapping
- Manage Data consent
- Store Personal Data
- Retrieve Personal Data

# CDV Architecture
All the above features are provided by a set of components. The CDV architecture, multilayered and service based is depicted in the figure below. A set of internal and external APIs are provided by the Service Data Service enabling the interaction with the data owner (user) via the CDV Dashboard or with external modules/services via a set of secure REST API.

![CDV Architecture](doc/architecture.png)

# CDV Components

CDV Components are split to their own folders

- [ Account Manager ](cdv-server/account-manager/README.md)
- [ Service Manager ](cdv-server/service-manager/)
- [ Consent Manager ](cdv-server/consent-Manager/)
- [ PData Manager ](cdv-server/pdata-manager/)
- [ Auth Manager ](cdv-server/auth-manager/)
- [ PData Repository ](cdv-server/pdata-repository/)
- [ Data Security Manager ](cdv-server/data-security-manager/)
- [ PData Source Connectors ](cdv-server/pdata-source-connectors/)

## Prerequisites

-   [Git](https://git-scm.com/downloads)
-   [Maven](https://maven.apache.org/download.cgi)
-   [MySQL 5.7.*](https://dev.mysql.com/downloads/mysql/)
- 	Java 1.8.*+
- 	Tomcat 8.*+
- 	MongoDB 3.3.*+


### Proxy configurations

In order to use the different tools behind a proxy please execute the
following commands (*username* and *password* are your credential,
*proxyhost* is the host name or the IP address of the proxy and
*proxyport* is the TCP port of the proxy):

-   **Git**: open a command prompt and execute:

    -   `git config --global http.proxy http://username:password@proxyhost:proxyport`

    -   `git config --global https.proxy http://username:password@proxyhost:proxyport`
    
-   **Maven**: edit the file “*Path\_Of\_Maven/conf/settings.xml*”:
    -   add to the “*&lt;proxies&gt;*” section the proper configuration following the example provided in the same file (please refer to maven guide https://maven.apache.org/guides/mini/guide-proxies.html)


## Create WAR packages

Open a command prompt and Execute the following command to clone the
repository:

-   `git clone <Git repository path>/CDV.git`

Move in the specific CDV module folder

-   `cd CDV`

In this folder you will find the CDV modules subfolders. In order to create all war packages please run the following command:

-   `mvn package`

All generated war packages will be located inside each module "target" subfolder. Copy all the WAR artifacts to the “webapps” folder of Tomcat installation, start it up and wait until they are deployed.

Currently the implemented and mandatory modules are the following:

-   CDV APIs
    -   account-manager.war
    -   data-security-manager.war
    -   pdata-manager.war
    -   service-manager.war

-   CDV Dashboard
    -   cdv-dashboard


## Deployment

Deployment and configuration instructions for each component can be found in each module's documentation.

## Documentation

Documentation is available for each component in their respective folders.


## Installation with docker

### Configuration

Create keystore with the script:

* `cdv-server/generate-keystore.sh <alias> <password> <filename>`

if no parameters are supplied defaults value will be: <alias>=masterkey, <password>=password, <filename>=keystore

The inserted <alias> <password> <filename> should be used inside the following properties. 


Configure properties :

* `cdv-server/docker_config/*`
* `cdv-dashboard/docker_config/config.json`

see documentation in each component for further info for each property.

About CORS problems please see the following CORS Problems section

### build and run

update `cdv.env` file configuration.
input your database credentials (should be the same as the ones you used to configure the component)

* to start the daemon execute `docker-compose start`
* to force rebuilding of the docker containers, use `docker-compose start --build`

* to stop the daemon execute `docker-compose stop`
* to restart as a daemon execute `docker-compose start`

## CORS Problems

To solve possible problems on Cross-Origin Resource Sharing (CORS) between CDV server modules and CDV Dashboard or other clients, you can:
* just tell your browser to ignore CORS (for example chromium-browser --disable-web-security --user-data-dir) - this is the fastest if you just want to play around, but of course it is not a production solution.
* set CORS headers on CDV server machine to allow access from the client ones, for example using CORS filter:

```
<!--CORS Filter-->
  <filter>
  <filter-name>CorsFilter</filter-name>
  <filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
  <init-param>
    <param-name>cors.allowed.origins</param-name>
    <param-value>*</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.methods</param-name>
    <param-value>GET,POST,HEAD,OPTIONS,PUT,DELETE</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.headers</param-name>
    <param-value>Access-Control-Allow-Origin,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization,accountId</param-value>
  </init-param>
  <init-param>
    <param-name>cors.exposed.headers</param-name>
    <param-value>Access-Control-Allow-Origin,Access-Control-Allow-Credentials</param-value>
  </init-param>
  <init-param>
    <param-name>cors.support.credentials</param-name>
    <param-value>true</param-value>
  </init-param>
  <init-param>
    <param-name>cors.preflight.maxage</param-name>
    <param-value>1800</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>CorsFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```

* use an "edge" (or "gateway") server that internally re-routes requests via reverse-proxying.
 





## Support / Contact / Contribution
[Citizen Data Vault](Link|email|contact)

## Copying and License
This code is licensed under [MIT License](LICENSE)