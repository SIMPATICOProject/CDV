import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { LinkedServicesTablesService } from './smartTables.service';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import {EnableServiceButtonRenderComponent} from './enable-service-button-render.component';
import {ServiceConsentLinkRenderComponent} from './service-consent-link-render.component';
import {LinkRenderComponent} from './link-render.component';
import {SlideToggleModule } from 'ng2-slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'ng2-config';
import { Router} from '@angular/router';
import 'style-loader!./smartTables.scss'; 



@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})

export class LinkedServiceTables {

  service_label:string = 'Data Connector';
  url: string = 'repository';
  created: string='Created';
  
  query: string = '';

   settings: any;

  
  loadTableSettings()
  {
  
  this.translate.get('general.connectors.connector').subscribe(label => this.service_label = label);
  this.translate.get('general.connectors.url').subscribe(label => this.url = label);
  this.translate.get('general.connectors.created').subscribe(label => this.created = label);
  
  return {
    
    actions: {
		add:false,
		edit:true
		
	},
	
	add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
	   confirmCreate:true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
	  confirmSave : true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
    
      serviceName: {
        title: this.service_label,
        type: 'string'
      },
      serviceUri: {
        title: this.url,
        type: 'custom',
		valuePrepareFunction: (cell, row) => row,
		renderComponent: LinkRenderComponent 
      },
	  created: {
        title: this.created,
        type: 'string'
      },
      viewInfo: {
          filter: false,
		  type: 'custom',
		  valuePrepareFunction: (cell, row) => row,
		  renderComponent: ServiceConsentLinkRenderComponent 
      },
	  status: {
		  title: '',
		  filter: false,
		  type: 'custom',
		  valuePrepareFunction: (cell, row) => row,
		  renderComponent: EnableServiceButtonRenderComponent          
       }
    }
	
	}
	
  };

   
  
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: LinkedServicesTablesService,private router: Router,private translate: TranslateService,private myconfig: ConfigService) {
   	
	this.service.getServices().subscribe(
		 result => { 
			 this.source.load(result.map(function(elem){
			 return { serviceName : elem.publicServiceName, serviceUri : "#/pages/pdata",created:"2018-11-09T10:45:51Z", status:elem, viewInfo:elem.publicServiceID  }
		   })); 
		} 
      );
	translate.setDefaultLang('en');
	
	this.translate.use(this.myconfig.getSettings('i18n').locale); 
    this.settings = this.loadTableSettings();	
	
  }
  
  

 // parte modificata 
 /*
  constructor(private service: SmartTablesService) { 
    service.getConcepts() 
                    .subscribe(result => { 
                      this.source.load(result); 
                    }); 
  }
  // fine modifica 
*/  
  onEditConfirm(event): void {
	  
	  console.log(event);
  }
  /*onCreateConfirm(event): void {
	  
	  console.log(event);
  }*/

  
  onDeleteConfirm(event): void {
      
	  
	  if (event.source.data.length<2 || event.data.status.serviceId=="_cdv"){
	       event.confirm.reject();
		   return;
	  }
      if (window.confirm('Are you sure you want to delete?')) {
	    
        this.service.deleteServiceLink(event).subscribe(
                result => {                       
                    event.confirm.resolve();
                  },
                 err => {
								let errorJson=eval('('+err._body+')');
								console.log('Error\n'+errorJson['message']);
								this.router.navigate(['/login']);
							}); 
      } else {
        event.confirm.reject();
      }
    };
  
  
  
   onCreateConfirm(event): void {
      console.log(event);
   /* if (window.confirm('Are you sure you want to edit?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }*/
  }
}
