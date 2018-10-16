import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ConfigService } from 'ng2-config';
 
@Injectable()
export class AuthGuard implements CanActivate {
    
	  
    	
    public token=null;
	public profile=null;
	public accountData=null;
	
	constructor(private router: Router,private myconfig: ConfigService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          
  	console.log("in guard");
	if(this.myconfig.getSettings('system', 'disable_auth')==='true'){
	  return true;
	}   
	  this.token=localStorage.getItem('aacTokenData');
	  this.accountData=localStorage.getItem('accountData');
	  this.profile =localStorage.getItem('userData');

      	   
	   if (this.token && this.accountData){
		  console.log("in guard true");
		  return true;
	   } else{
			console.log("in guard false");
			// not logged in so redirect to login page with the return url
			this.router.navigate(['/login']);
			return false;
        } 			
			
			
    }
	
	
	
 } 
