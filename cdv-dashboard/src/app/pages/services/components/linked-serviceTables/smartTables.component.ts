import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { LinkedServicesTablesService } from './smartTables.service';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import {EnableServiceButtonRenderComponent} from './enable-service-button-render.component';
import {ServiceConsentLinkRenderComponent} from './service-consent-link-render.component';
import {LinkRenderComponent} from './link-render.component';
import {SlideToggleModule } from 'ng2-slide-toggle';
import { Router} from '@angular/router';
import 'style-loader!./smartTables.scss'; 



@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})

export class LinkedServiceTables {

  query: string = '';

  settings = {
    
    actions: {
		add:false,
		edit:false
		
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
        title: 'Service',
        type: 'string'
      },
      serviceUri: {
        title: 'URL',
        type: 'custom',
		valuePrepareFunction: (cell, row) => row,
		renderComponent: LinkRenderComponent 
      },
	  created: {
        title: 'Created',
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
	
	
	
  };

   
  
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: LinkedServicesTablesService,private router: Router) {
   	
	this.service.getServices().subscribe(
		 result => { 
			 this.source.load(result.map(function(elem){
			 return { serviceName : elem.serviceName, serviceUri : elem.serviceUri,created:elem.created, status:elem, viewInfo:elem.serviceId  }
		   })); 
		} 
      );
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
      
	  if (event.source.data.length<2){
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
