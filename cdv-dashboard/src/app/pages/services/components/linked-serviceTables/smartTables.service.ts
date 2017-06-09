import {
	Injectable
}
from '@angular/core';
import {
	Http,
	Headers
}
from '@angular/http';
import {
	Observable
}
from 'rxjs';

import { ConfigService } from 'ng2-config';

 @ Injectable()
export class LinkedServicesTablesService {

	token = "Bearer " + JSON.parse(localStorage.getItem('aacTokenData')).access_token;
	accountId = localStorage.getItem('accountData');
	userId = JSON.parse(localStorage.getItem('userData')).userId;
	environment=this.myconfig.getSettings('system');

	
	getServices(): Observable < any[] > {
		var headers = new Headers();
		headers.append('Authorization', this.token);
		headers.append('Content-Type', "application/json");

		return this.http
		.get(this.environment.host + this.environment.account + this.accountId + "/serviceLinks", {
			headers: headers
		}).map((responseData) => responseData.json());
	}

	deleteServiceLink(event): Observable < any > {
		var headers = new Headers();
		headers.append('Authorization', this.token);

		return this.http
		.delete (this.environment.host + this.environment.account + this.accountId + "/serviceLinks/" + event.data.status._id, {
			headers: headers
		}); //.map((responseData) => responseData.json());
	}

	disableServiceLink(slrId) {
		var headers = new Headers();
		headers.append('Authorization', this.token);
		headers.append('Content-Type', "application/json");
		return this.http
		.put(this.environment.host + this.environment.account + this.accountId + "/serviceLinks/" + slrId, null, {
			headers: headers
		});

	}

	enableServiceLink(serviceId, serviceUri, serviceName) {
		var headers = new Headers();
		var serviceLink = JSON.stringify({
				"serviceId": serviceId,
				"serviceUri": serviceUri,
				"userId": this.userId,
				"serviceName": serviceName
			});
		headers.append('Authorization', this.token);
		headers.append('Content-Type', "application/json");

		return this.http
		.post(this.environment.host + this.environment.account + this.accountId + "/serviceLinks", serviceLink, {
			headers: headers
		});
	}

	constructor(private http: Http, private myconfig: ConfigService) {}

}