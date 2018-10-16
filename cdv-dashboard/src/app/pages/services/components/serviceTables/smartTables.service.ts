import {Injectable} from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { ConfigService } from 'ng2-config';
import { Observable } from 'rxjs';
@Injectable()
export class ServicesTablesService {

  private services:any[];

  token="Bearer "+ JSON.parse(localStorage.getItem('aacTokenData')).access_token;
  accountId=localStorage.getItem('accountData');
  userId=JSON.parse(localStorage.getItem('userData')).userId;
  environment=this.myconfig.getSettings('system');
  
  getData(): Observable<any> {
		
	return this.http
		.get(this.environment.host+this.environment.services
		).map((responseData) => responseData.json());  
	}
	
   createServiceLink(serviceId,serviceUri,serviceName){
	    var headers = new Headers();
		var serviceLink = JSON.stringify({
					"serviceId": serviceId,
					"serviceUri": serviceUri,
					"userId": this.userId,
					"serviceName": serviceName
				});
				
		console.log("serviceLink "+ serviceLink);		
		headers.append('Authorization', this.token);
		headers.append('Content-Type', "application/json");
		
		return this.http
			.post(this.environment.host+this.environment.account+this.accountId+"/serviceLinks",serviceLink,{
				headers : headers
			});
	}
	
  constructor(private http: Http, private myconfig: ConfigService){}

}
