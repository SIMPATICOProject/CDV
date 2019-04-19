import {Injectable} from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Account,PData } from '../models/account';
import { ConfigService } from 'ng2-config';
import * as _ from "lodash";
@Injectable()
export class SmartTablesService {
private concept_list: any[];
private logfields:any[];

  constructor(private http: Http, private myconfig: ConfigService){}

  token="Bearer "+ JSON.parse(localStorage.getItem('aacTokenData')).access_token;
  accountId=localStorage.getItem('accountData');
  userId=JSON.parse(localStorage.getItem('userData')).userId;
  environment=this.myconfig.getSettings('system');

	unwindBy(arr){
	  var res =[];

    for (var i=0;i<arr.length;i++){
      var obj ={};
      obj['type'] = arr[i]['type'];
      var objectJson = JSON.parse(arr[i]['objectJson']);
      obj['objectJsonMethod'] = objectJson.method;
      obj['objectJsonOperation'] = objectJson.operation;

     // var dateString = "20100809_010203";
      var dateString = objectJson.date;
      var reggie = /(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})/;
      var dateArray = reggie.exec(dateString);
      var dateObject = new Date(
        (+dateArray[1]),
        (+dateArray[2])-1, // Careful, month starts at 0!
        (+dateArray[3]),
        (+dateArray[4]),
        (+dateArray[5]),
        (+dateArray[6])
      );

      obj['objectJsonCreated'] = dateObject.toLocaleString();

      res[i] = obj;
    }


	  return res;
	  //return [{type: '<ul><li>cioai</li><li>ciaoaioc</li></ul>'}];
	 //  var ele=  _.transform(arr, function(r, o){
		// Array.prototype.push.apply(r,
		//   _.map(o[field], function(v){ return _.set(_.clone(o), field, v); })
		// );
	 //  }, []);
    //
	 //  console.log(ele);
    // return ele; //questa funzione elimina dai dati ricevuti quelli senza il value popolato
    //questo si significa che cancellare un valore vuol dire svuotare il campo
	}


  getConcepts(): Observable<any[]> {
	   var headers = new Headers();
    headers.append('Authorization', this.token);
		headers.append('userId', this.userId);
		headers.append('Content-Type', "application/json");

		return this.http
			.get(this.environment.host+this.environment.auditlog+'getlogs-by-username/'+this.accountId,{
				headers : headers
			}).map((responseData) => this.unwindBy(responseData.json()));
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
    var headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('userId', this.userId);
    headers.append('Content-Type', "application/json");

	this.http
		.get(this.environment.host+this.environment.auditlog+'getlogs-by-username/'+this.accountId,{headers : headers}
		).map((responseData) => responseData.json()).subscribe(result => {
                      this.logfields = result.map(function(elem){
                                             // return { conceptId : elem.id, name : elem.name, type:elem.semanticType, values:[], category:elem.category, description:elem.description  }
                                              return {type: elem.type, objectJsonMethod: elem.objectJsonMethod, objectJsonOperation: elem.objectJsonOperation, objectJsonCreated: elem.objectJsonCreated}
                                          });
											return this.logfields;
		});
return this.logfields;
	}
}
