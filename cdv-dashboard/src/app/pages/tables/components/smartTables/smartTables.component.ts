import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./smartTables.scss';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {

  query: string = '';

  settings = {
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
     /* id: {
        title: 'ID',
        type: 'number',
		
      },*/
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
	/* columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      name: {
        title: 'Name',
        type: 'string'
      },
      category: {
        title: 'Category',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      },
      privatePData: {
        title: 'PrivatePData',
        type: 'string'
      },
      semanticType: {
        title: 'SemantycType',
        type: 'string'
      },
      uri: {
        title: 'URI',
        type: 'string'
      }
    }*/
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: SmartTablesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
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
