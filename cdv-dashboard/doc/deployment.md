# Detailed Documentation
- [Deployment](deployment.md)


## Prerequisites
CDV-Dashboard is based on ng2-admin dashboard template.
The following tools should be properly installed on your computer:

- [Git](https://git-scm.com/downloads)
- [NodeJs (with NPM)](https://nodejs.org/en/download/)

**Note**: Make sure you have Node version >= 4.0 and NPM >= 3

### Proxy configurations

In order to use the different tools behind a proxy please execute the
following commands (*username* and *password* are your credential,
*proxyhost* is the host name or the IP address of the proxy and
*proxyport* is the TCP port of the proxy):

-   **Git**: open a command prompt and execute:

    -   `git config --global http.proxy http://username:password@proxyhost:proxyport`

    -   `git config --global https.proxy http://username:password@proxyhost:proxyport`
    
-   **Npm**: open a command prompt and execute:

    -   `npm config set proxy http://username:password@proxyhost:proxyport`

    -   `npm config set https-proxy http://username:password@proxyhost:proxyport`


## Clone repository and install dependencies

You will need to clone the source code of cdv-dashboard:

After the repository is cloned, go inside of the repository directory and install dependencies:

```bash
cd cdv-dashboard
npm install
```
This will setup a working copy of cdv-dashboard on your local machine.	

To run a local copy in development mode, execute:

```bash
npm start
```

Go to http://0.0.0.0:3000 or http://localhost:3000 in your browser.

## Deployment

To deploy in production mode and build the sources, execute:

```bash
npm run build:prod
```

This will clear up your cdv-dashboard/dist folder (where release files are located)and generate a release build.
Now you can copy the sources from the `dist` folder to a `cdv-dashboard` and use it with any backend framework or 
simply put it under a web server (for example in the same server you deployied the other cdv components).


### Configuration

Once all the bundle files are deployed and the server has started, modify
the cdv-dashboard/config.json configuration file:
- host:"http://localhost:8080",  put your CDV host server URL
 
- aacServer:"http://localhost:8080/aac", put your AAC component server URL - see https://github.com/SIMPATICOProject/aac

- clientId:"80e7a735-04bf-4737-b6ca-46caac64f823", put your AAC client Id - see https://github.com/SIMPATICOProject/aac

- authority:"google",  put your AAC authority type for client-  see https://github.com/SIMPATICOProject/aac

- "locale": "en",  put your language locale. Currently available languages: Italian (it) and English (en). For other languages create translation files in /assets/i18n


in cdv-dashboard/simp_login/simp_login.js modify the following variables:

- var host = "https://simpatico.eng.it";

- var endpoint = host+"" ;

- var cdvDashboardURL= "/cdv-dashboard/";

## Support / Contact / Contribution-

[*vincenzo.savarino@eng.it*](mailto:vincenzo.savarino@eng.it)

## Copying and License

This code is licensed under MIT licence


