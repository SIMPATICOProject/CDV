import {Injectable} from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { Account,PData } from '../models/account.ts';
import { Observable } from 'rxjs';
import { ConfigService } from 'ng2-config';
@Injectable()
export class BlockFormService {

   constructor(private http: Http, private myconfig: ConfigService) {}

   token = "Bearer " + JSON.parse(localStorage.getItem('aacTokenData')).access_token;
   accountId = localStorage.getItem('accountData');
   environment=this.myconfig.getSettings('system');
   
   getAccount(): Observable < Account > {
   	var headers = new Headers();
   	headers.append('Authorization', this.token);
   	return this.http
   	.get(this.environment.host + this.environment.account + this.accountId, {
   		headers: headers
   	}).map((responseData) => responseData.json());
   }
   
   updateAccount(account): Observable < Account > {
   	var headers = new Headers();
   	headers.append('Authorization', this.token);
   	headers.append('Content-Type', "application/json");
   	return this.http
   	.put(this.environment.host + this.environment.account + this.accountId, JSON.stringify(account), {
   		headers: headers
   	}).map((response) => response.json());

   }

   deleteAccount(): any {
   	var headers = new Headers();
   	headers.append('Authorization', this.token);
   	headers.append('accountId', this.accountId);
   	return this.http
   	.get(this.environment.host + this.environment.account + this.accountId, {
   		headers: headers
   	}) /*.map((responseData) => responseData.json())*/;
   }
   
   downloadAllPdata(format: string): any {
   	var headers = new Headers();
   	headers.append('Authorization', this.token);
   	headers.append('accountId', this.accountId);
   	return this.http
   	.get(this.environment.host + this.environment.downloadPData + "?fileFormat=" + format, {
   		headers: headers
   	}) /*.map((responseData) => responseData.json())*/;
   }
   }