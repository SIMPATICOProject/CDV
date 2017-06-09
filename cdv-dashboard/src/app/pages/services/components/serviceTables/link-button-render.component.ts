import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ServicesTablesService } from './smartTables.service';
import { Router} from '@angular/router';


@Component({
 template: `
    
	<button type="button" class="btn btn-primary btn-with-icon" (click)="linkService()"><i class="ion-link"></i>Link</button>
  `,
})
export class LinkButtonRenderComponent implements OnInit {

  public renderValue;

  @Input() value;

  constructor(protected service: ServicesTablesService, private router: Router) {  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  linkService() {
    	
	this.service.createServiceLink(this.renderValue.viewInfo.serviceId,this.renderValue.viewInfo.serviceUri,this.renderValue.serviceName ).subscribe(
                result => {                       
                    window.alert('Service Linked!');
					                   
                  },
                 err => {
								let errorJson=eval('('+err._body+')');
								console.log('Error\n'+errorJson['message']);
								this.router.navigate(['/login']);
							});
	
  }


}