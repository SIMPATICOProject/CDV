import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'ng2-config';
import * as _ from "lodash";

@Injectable()
export class ConsentsService {
  private concept_list: any[];

  constructor(private http: Http, private myconfig: ConfigService) { }

  token = "Bearer " + JSON.parse(localStorage.getItem('aacTokenData')).access_token;
  accountId = localStorage.getItem('accountData');
  environment = this.myconfig.getSettings('system');

  unwindBy(arr) {
    /*  var res =[];
  
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
      
      *return res;
      **/


    return arr;

  }


  getConsents(): Observable<any[]> {
    var headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('accountId', this.accountId);
    headers.append('Content-Type', "application/json");
    var res = this.http
      .get(this.environment.host + this.environment.consent + 'consents/' + this.accountId, {
        headers: headers
      }).map((responseData) => this.unwindBy(responseData.json()));

    console.log("get consent-service: " + res)
    return res;
  }
  
  getServices(): Observable < any[] > {
		var headers = new Headers();
		headers.append('Authorization', this.token);
		headers.append('Content-Type', "application/json");

		return this.http
		.get(this.environment.host + this.environment.account + this.accountId + "/serviceLinks", {
			headers: headers
		}).map((responseData) => responseData.json());
	}
  
  
  updateConsentStatus(rsid: string, status: string): Observable<any[]> {
    var body = {}
    let headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('accountId', this.accountId);
    headers.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: headers });
    let url = this.environment.host + this.environment.consent + 'changeConsentRecordStatus/' + this.accountId + '/' + rsid + '/' + status;
    ///changeConstentRecordStatus/{accountId}/{rsid}/{status}
    var res = this.http
      .post(url, body, options).map((responseData) => this.unwindBy(responseData.json()));

    console.log("change consent-service: " + res)
    return res;
  }

  updateDataset(sinkRecord: string, sourceRecord: string): Observable<any[]> {
    console.log(sinkRecord)
    console.log(sourceRecord)

    let body = new URLSearchParams();
    body.set('consent_record_sink', JSON.stringify(sinkRecord));
    body.set('consent_record_source', JSON.stringify(sourceRecord));
    let headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let url = this.environment.host + this.environment.consent + 'updateConsent/' + this.accountId + '/';
    var res = this.http
      .post(url, body.toString(), options).map((responseData) => this.unwindBy(responseData.json()));

    console.log("update Dataset: " + res)
    return res;
  }

  forgetMeDataType(type) {
    var method = ""
    if (type == 'sensitivo') {
      method = "sensitive"
    } else {
      method = "notsensitive"
    }
    var body = {}
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    let url = this.environment.phphost + '/healthathome-api/api/v1/forget/mydatatype/' + this.accountId + '/' + method;
    console.log(url)
    var res = this.http.get(url, {}).map((responseData) => this.unwindBy(responseData.json()));


    console.log("forgetme datatype: " + res)
    return res;
  }



}
