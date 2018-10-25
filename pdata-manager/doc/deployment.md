
# Detailed Documentation
- [API documentation](api/)
- [Database documentation](database/)


## Prerequisites

The following tools should be properly installed on your computer:

-   [Git](https://git-scm.com/downloads)
-   [Maven](https://maven.apache.org/download.cgi)
-   [MongoDB 3.3.*](https://www.mongodb.com/download-center#community)

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



## Deployment

### Database creation

The PData Manager relies on a MongoDB database to store all the accounts information.

So before deploying the application, it is necessary to create a new database, by importing in the MongoDB server the provided dump file.
- Open a command prompt and Execute the following commands to import the dump file:
    - `cd CDV/pdata-manager`
    - `mongorestore --db pDataRepository dump\pDataRepository`

**NOTE:**
This dump already contains the statement that creates the **pDataValues** collection automatically.

### Module WAR deployment
After executing the [Create WAR packages](#create-war-package) step, all generated war packages will be located inside the module "target" subfolder. Copy the "pdata-manager.war" artifact to the “webapps” folder of Tomcat installation, start it up and wait until it is deployed.

### Configuration

Once all the WAR files are deployed and the server has started, modify
the following configuration files, located in the deployed folders of
Tomcat “webapps” folder.

-   **\pdata-manager\WEB-INF\classes\application.properties** change the properties:
    -  **SERVICEMANAGER_HOST**, **ACCOUNTMANAGER_HOST**, **DATASECURITYMANAGER_HOST** with the URL where each module is available.
        -    By default, they are the same as the current module: 
                - http://localhost:8080/service-manager, http://localhost:8080/account-manager, http://localhost:8080/data-security-manager
    - **MONGO_DB_HOST**, **USER_MONGO**, **PASSWORD_MONGO** with the ones configured during the MongoDB installation. (e.g. for **MONGO_DB_HOST**: localhost:27017)
    - **AAC_URL** with the URL where the AAC is available ( e.g. http://localhost:8080/aac)


### Server Restart and Data Security Manager access


In order to apply the previous changes, restart the Tomcat server. Once
the server restarted, the module services will be exposed in
*http://BASEPATH/pdata-manager*

**Note**. Change the “BASEPATH” value with the actual host and port
where is exposed the runtime environment

## Support / Contact / Contribution-

[*vincenzo.savarino@eng.it*](mailto:vincenzo.savarino@eng.it)

## Copying and License

This code is licensed under MIT licence
