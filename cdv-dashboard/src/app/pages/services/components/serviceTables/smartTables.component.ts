import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ServicesTablesService } from './smartTables.service';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import {LinkButtonRenderComponent} from './link-button-render.component';
import {ServiceInfoLinkRenderComponent} from './serviceinfo-link-render.component';
import { ConfigService } from 'ng2-config';
import { TranslateService } from '@ngx-translate/core';


import 'style-loader!./smartTables.scss';



@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})

export class ServiceTables {

  query: string = '';
  service_label:string = 'Service';
  description: string = 'Description';

  settings: any;

  
  loadTableSettings(){

   this.translate.get('general.services.service').subscribe(label => this.service_label = label);
	this.translate.get('general.services.description').subscribe(label => this.description = label); 

   return {
     actions: {
	add:false,
	edit:false,
	delete:false
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
      serviceDescr: {
        title: this.description,
        editor: {
          type: 'textarea',
        },
      },
      viewInfo: {
          filter: false,
		  type: 'custom',
		  valuePrepareFunction: (cell, row) => row,
		  renderComponent: ServiceInfoLinkRenderComponent,
      },
	  id: {
		  title: '',
		  filter: false,
		  type: 'custom',
		  valuePrepareFunction: (cell, row) => row,
		  renderComponent: LinkButtonRenderComponent
        }
     }

  }

  };
  
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ServicesTablesService,private translate: TranslateService,private myconfig: ConfigService) {
    // this.services= this.service.getData();
	//this.source.load(this.service.getData());
	
	this.service.getData().subscribe(
		 result => { 
			 this.source.load(result.map(function(elem){
			 return { id : elem.serviceId, serviceName : elem.serviceDescriptionTitle, serviceDescr:elem.humanReadableDescription[0].description, viewInfo:elem  }
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
	  console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
   onCreateConfirm(event): void {
      console.log(event);
   /* if (window.confirm('Are you sure you want to edit?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }*/
  }
}
