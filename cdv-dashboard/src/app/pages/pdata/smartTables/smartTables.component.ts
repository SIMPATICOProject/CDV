import { Component,ViewChild,ElementRef} from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import {PData} from "../../account/models/account";
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'ng2-config';
import { Router} from '@angular/router';
import * as _ from "lodash";
import 'style-loader!./smartTables.scss';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {

  query: string = '';
  pDataFields:any[];
  modifArr:any[];
  settings: any;
  name:string = 'Name';
  values: string = 'Values';

 loadTableSettings(){
    this.translate.get('general.personal_data.name').subscribe(label => this.name = label);
	this.translate.get('general.personal_data.values').subscribe(label => this.values = label)
	
	return {
    noDataMessage:"Loading personal data...",
    actions:{
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
	 /* conceptId: {
        title: 'Concept ID',
        type: 'string',
		editable:false
      },*/
      name: {
        title: this.name,
        type: 'string',
        width:'10px',
        valuePrepareFunction: (cell,row) => { /*console.log(cell); console.log(row); */return cell;},
        filter: {
              type: 'completer',
              config: {
                completer: {
                  data: [],
                  searchFields: 'name',
                  titleField: 'name'
                },
              },
            },
		editable:false	

      },
      
     /* type: {
        title: 'Type',
        type: 'string',
		editable:false
      },*/
      values: {
        title: this.values,
        type: 'array',
        width:'10px'
      }
    }
  }
 };
 
  source: LocalDataSource = new LocalDataSource();
  
    constructor(private service: SmartTablesService,private router: Router,private translate: TranslateService,private myconfig: ConfigService) {
    let pDataFields=service.getPDataFields();
    translate.setDefaultLang('en');
	
	this.translate.use(this.myconfig.getSettings('i18n').locale);
    //retrieve all personal data of the account
		service.getConcepts() .subscribe(
              result => {
              // Initiate the settings object
						  this.settings = this.loadTableSettings(); 
						  this.settings.columns.name.filter.config.completer.data= result; 
						  this.source.load(result); 

						},
            err => {
								
								let errorJson=eval('('+err._body+')');
								if (err.status===401){
								    this.router.navigate(['/login']);
								}
            }); 
	
  }



/******************************* EVENT***************************************/
   onUserRowSelect(event) {
    console.log(event);
  }
  
    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        this.service.deletePDataValue(event).subscribe(
                result => {                       
                    event.confirm.resolve();
                    window.alert('Success');
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


    onSaveConfirm(event): void {
		var obj=event.source.data;
		var filter = {conceptId: event.data.conceptId, values: event.data.values};
		//remove form array the element with the changed value
		obj = obj.filter(function(item) {
			for(var key in filter) {
				if(item[key] === undefined || item[key] != filter[key])
					return true;
			}
			return false;
		});
		//add to array the element with the new value
		obj.push(event.newData);
		//group elements with the same conceptId
	    var data=this.groupByValues(obj);
	    var conceptArray=[];
		//extract from array 
	    var mod=this.findElement(data, "conceptId", event.newData.conceptId);
	    conceptArray.push( mod);
	    this.service.updatePData(conceptArray) 
					.subscribe(
            result => { 
              if (result.status===200){

                event.confirm.resolve();
                window.alert('Success');
              }else{
                event.confirm.reject();
              }
					},
          err => {
								let errorJson=eval('('+err._body+')');
								console.log('Error\n'+errorJson['message']);
								this.router.navigate(['/login']);
							}); 
  }
  
    onCreateConfirm(event): void {
      event.confirm.resolve();
   /* if (window.confirm('Are you sure you want to edit?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }*/
  }
  

  /***************************END EVENT************************************/
  /*********************************************************************/
  
  /**************************UTILITIES**********************************/
  groupByValues(obj){
  var groups = _.groupBy(obj, function(v:PData){
			return v.conceptId ;
		});

		var data = _.map(groups, function(group){

			return {
				conceptId: group[0].conceptId,
				name: group[0].name,
				type: group[0].type,
				timestamp: group[0].timestamp,
			//	accountId: group[0].accountId,
				values: _.map(group, 'values')
			}
		});
  return data;
  }
 findElement(arr, propName, propValue) {
  for (var i=0; i < arr.length; i++)
    if (arr[i][propName] == propValue)
      return arr[i];

  // will return undefined if not found; you could return a default instead
}

}
