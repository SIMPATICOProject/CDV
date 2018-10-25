// Angular 2
// rc2 workaround
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';
// Environment Providers

let PROVIDERS: any[] = [
  // common env directives
  
];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateModuleRef = function identity<T>(value: T): T { return value; };

if ('production' === ENV || 'renderer' === ENV) {
  // Production
  //disableDebugTools();
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in production
  ];

} else {

  _decorateModuleRef = (modRef: any) => {
    const appRef = modRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];

    let _ng = (<any>window).ng;
    enableDebugTools(cmpRef);
    (<any>window).ng.probe = _ng.probe;
    (<any>window).ng.coreTokens = _ng.coreTokens;
    return modRef;
  };

  // Development
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in development
  ];

}

export const decorateModuleRef = _decorateModuleRef;
export const envTest = "envTest";

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
export const environment = { 
 
  host:"http://localhost:8080", 
  aacServer:"http://localhost:8080/aac",
  //API Account Manager
  account:"/account-manager/api/v1/accounts/",
  //PData Manager
  pData:"/pdata-manager/api/v1/pData/",
  downloadPData:"/pdata-manager/api/v1/pData/download",
  //Service Manager
  pDataFields:"/service-manager/api/v1/pdatafields",
  //aac client ids
  clientId:"80e7a735-04bf-4737-b6ca-46caac64f823",
  authority:"google",
  //cdv dashboard relative url
  cdvDashboardUrl:"/cdv-dashboard/simp_login/login2.html",
  //disable login for token 
  disable_auth:"true"
  
};