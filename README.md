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

- [ Account Manager ](account-manager/README.md)
- [ Service Manager ](service-manager/)
- [ Consent Manager ](consent-Manager/)
- [ PData Manager ](pdata-manager/)
- [ Auth Manager ](auth-manager/)
- [ PData Repository ](pdata-repository/)
- [ Data Security Manager ](data-security-manager/)
- [ PData Source Connectors ](pdata-source-connectors/)

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

## Support / Contact / Contribution
[Citizen Data Vault](Link|email|contact)

## Copying and License
This code is licensed under [MIT License](LICENSE)