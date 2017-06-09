import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Http ,Headers } from '@angular/http';
import { ConfigService } from 'ng2-config';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  environment=this.myconfig.getSettings('system');

  constructor(fb:FormBuilder, private myconfig: ConfigService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
     this.environment=this.myconfig.getSettings('system');
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
	  console.log("in login");
	  
      var ifeClientID = this.environment.clientId;
      var endpoint = this.environment.aacServer;
      var authority = this.environment.authority;
	  var base = window.location.href;
	  var usename=null;
      var arr = base.split("/");
	 
      var url = endpoint + '/eauth/authorize/' + authority + '?' + 
                    'response_type=token' +
                    '&redirect_uri=' + arr[0] + '//' + arr[2] + this.environment.cdvDashboardUrl + // login window URL
                    '&client_id=' + ifeClientID; //Client id from the AAC console
	  				
      
      var win = window.open(url, 'AuthPopup', 'width=1024,height=768,resizable=true,scrollbars=true,status=true');
     
      
	  window.addEventListener('message', function (event) {
	  
	    
		console.log(JSON.stringify(event.data));
		
		console.log("logged");
		
      }, false);	  
     
            	  
	  
     }
	  
    }
	
	
	public login_simp(){
	
	  var ifeClientID = this.environment.clientId;
      var endpoint = this.environment.aacServer;
      var authority = this.environment.authority;
	  var base = window.location.href;
	  var usename=null;
      var arr = base.split("/");
	 
      var url = endpoint + '/eauth/authorize/' + authority + '?' + 
                    'response_type=token' +
                    '&redirect_uri=' + arr[0] + '//' + arr[2] + this.environment.cdvDashboardUrl + // login window URL
                    '&client_id=' + ifeClientID; //Client id from the AAC console
	  				
      
      var win = window.open(url, 'AuthPopup', 'width=1024,height=768,resizable=true,scrollbars=true,status=true');
     
      
	  window.addEventListener('message', function (event) {
	  
	    
		console.log(JSON.stringify(event.data));
		
		console.log("logged");
		
      }, false);
	
	
	}
  }

