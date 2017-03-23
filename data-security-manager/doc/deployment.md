
# Detailed Documentation
- [API documentation](api/)
- [Database documentation](database/)


## Prerequisites

The following tools should be properly installed on your computer:

-   [Git](https://git-scm.com/downloads)
-   [Maven](https://maven.apache.org/download.cgi)
-   [MySQL 5.7.*](https://dev.mysql.com/downloads/mysql/)

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

The Data Security Manager relies on a MySQL database to store all the user secret keys.

So before deploying the application, it is necessary to create a new
database, by importing in the MySQL server the provided SQL dump file:

-   **data\_security\_manager.sql**

This dump already contains the statement that creates the “**data\_security\_manager**” DB automatically.

### Keystore creation
The Data Security Manager relies on a JCEKS keystore to store the master key and app key.
So before deploying the application, it is necessary to create a new JCEKS keystore, a masterkey and an appkey, by typing the following commands:
-   `keytool -genseckey -alias masterkey -keyalg AES -keystore "<keystorepath>" -keysize 128 -storetype jceks`
-   `keytool -genseckey -alias appkey<id> -keyalg DESede -keystore "<keystorepath>" -keysize 168 -storetype jceks`

**NOTE**: 
- The **"keystorepath"** must be replaced by a custom path that must match with the one used in the following steps.
- Replace **"id"** with an identification of the application that will use the module (i.e "CDV").
- The **"masterkey"** alias can be different, but it must match with the one specified in the **crypt.masterkey.alias**, as described in the next [Configuration](#configuration) step.

### Module WAR deployment
After executing the [Create WAR packages](#create-war-package) step, all generated war packages will be located inside the module "target" subfolder. Copy the "data-security-manager.war" artifact to the “webapps” folder of Tomcat installation, start it up and wait until it is deployed.

### Configuration

Once all the WAR files are deployed and the server has started, modify
the following configuration files, located in the deployed folders of
Tomcat “webapps” folder.

-   **\data-security-manager\WEB-INF\classes\application.properties** change the properties:
    -  **ks.path** with the keystore location selected in the previous keystore creation step.
    -  **ks.password** with the keystore password selected in the previous keystore creation step.
    - **crypt.masterkey.alias** with the masterkey alias selected in the previous [Keystore creation](#keystore-creation) step. (i.e. "masterkey")


### Server Restart and Data Security Manager access


In order to apply the previous changes, restart the Tomcat server. Once
the server restarted, the module services will be exposed in
*http://BASEPATH/data-security-manager*

**Note**. Change the “BASEPATH” value with the actual host and port
where is exposed the runtime environment

## Support / Contact / Contribution-

[*vincenzo.savarino@eng.it*](mailto:vincenzo.savarino@eng.it)

## Copying and License

This code is licensed under XXX licence
