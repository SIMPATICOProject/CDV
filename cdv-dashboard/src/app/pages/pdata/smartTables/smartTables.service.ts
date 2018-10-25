import {Injectable} from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Account,PData } from '../models/account';
import { ConfigService } from 'ng2-config';
import * as _ from "lodash";
@Injectable()
export class SmartTablesService {
private concept_list: any[]; 
private pDataFields:any[];  

  constructor(private http: Http, private myconfig: ConfigService){}

  token="Bearer "+ JSON.parse(localStorage.getItem('aacTokenData')).access_token;
  accountId=localStorage.getItem('accountData');
  environment=this.myconfig.getSettings('system');

	unwindBy(arr, field){
	  return _.transform(arr, function(r, o){ 
		Array.prototype.push.apply(r, 
		  _.map(o[field], function(v){ return _.set(_.clone(o), field, v); })
		);
	  }, []);
	}
	
	
  getConcepts(): Observable<any[]> {
	   var headers = new Headers();
    headers.append('Authorization', this.token);
		headers.append('accountId', this.accountId);
		headers.append('Content-Type', "application/json");

		return this.http
			.get(this.environment.host+this.environment.pData,{
				headers : headers
			}).map((responseData) => this.unwindBy(responseData.json(),"values")); 
		}
	addPData(conceptArray):Observable<any> {
	    var headers = new Headers();
			headers.append('Authorization', this.token);
			headers.append('accountId', this.accountId);
			headers.append('Content-Type', "application/json");

			return this.http
				.post(this.environment.host+this.environment.pData+"?mode=append",JSON.stringify(conceptArray),{
					headers : headers
				});//.map((responseData) => responseData.json()); 
		}
	updatePData(conceptArray):Observable<any> {
	    var headers = new Headers();
			headers.append('Authorization', this.token);
			headers.append('accountId', this.accountId);
			headers.append('Content-Type', "application/json");

			return this.http
				.put(this.environment.host+this.environment.pData+"?mode=overwrite",JSON.stringify(conceptArray),{
					headers : headers
				});//.map((responseData) => responseData.json()); 
		}
	deletePDataValue(event):Observable<any> {
	    var headers = new Headers();
			headers.append('Authorization', this.token);
			headers.append('accountId', this.accountId);
			headers.append('Content-Type', "application/json");
      var conceptId=event.data.conceptId;
      var value=event.data.values;
			return this.http
				.delete(this.environment.host+this.environment.pData+conceptId+"/"+value,{
					headers : headers
				});//.map((responseData) => responseData.json()); 
		}		
	getPDataFields(): any[] {
		
	this.http
		.get(this.environment.host+this.environment.pDataFields
		).map((responseData) => responseData.json()).subscribe(result => { 
                      this.pDataFields = result.map(function(elem){
                                              return { conceptId : elem.id, name : elem.name, type:elem.semanticType, values:[], category:elem.category, description:elem.description  }
                                          });   
											return this.pDataFields;
		});
return this.pDataFields;  
	}
}
