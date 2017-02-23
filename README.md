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

![CDV Architecture](architecture.png)

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
- MySQL 5.*+
- Java 1.8.*+
- Tomcat 8.*+
- MongoDB 3.3.*+
- Git
- Maven


## Deployment

Deployment instructions for each component can be found from module's documentation.

## Documentation

Documentation is available for each component in their respective folders.

## Support / Contact / Contribution
[Citizen Data Vault](Link|email|contact)

## Copying and License
This code is licensed under [MIT License](LICENSE)