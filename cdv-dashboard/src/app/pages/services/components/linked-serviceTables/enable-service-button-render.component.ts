import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { LinkedServicesTablesService } from './smartTables.service';
import { Router} from '@angular/router';


@Component({
 template: `
    <slide-toggle style="font-style:normal;background:rgb(32, 158, 145);" [onText]="'ENABLED'" [offText]="'DISABLED'" [onColor]="'#2ecc71'" [value]="toggleValue" (change)="onToggle()"></slide-toggle>
    
  `,
})
export class EnableServiceButtonRenderComponent implements OnInit {

  public renderValue;
  toggleValue = false;
  
  @Input() value;
  @Input() onText = 'ON';
  @Input() offText = 'OFF';
  @Input() onColor = '#0088cc';
  
  @Output() valueChange = new EventEmitter<boolean>();
  
  constructor(protected service: LinkedServicesTablesService,private router: Router) {  }

  ngOnInit() {
    this.renderValue = this.value;
	this.toggleValue= this.isEnabled(this.value.status);
  }

  onToggle() {
    var index=this.renderValue.status.serviceLinkStatusRecords.length-1;
		
		if (this.toggleValue){
			
			
			this.service.disableServiceLink(this.renderValue.status._id).subscribe(
                result => {                       
                    this.toggleValue=false;
                    
                  },
                 err => {
								let errorJson=eval('('+err._body+')');
								console.log('Error\n'+errorJson['message']);
								this.router.navigate(['/login']);
							});
		}

		else{
			
			this.service.enableServiceLink(this.renderValue.status.serviceId,this.renderValue.serviceUri,this.renderValue.serviceName ).subscribe(
                result => {                       
                    this.toggleValue=true;                    
                  },
                 err => {
								let errorJson=eval('('+err._body+')');
								console.log('Error\n'+errorJson['message']);
								this.router.navigate(['/login']);
							});
		}	
    
  }
   
  isEnabled(json){ 
       var index=json.serviceLinkStatusRecords.length-1;   
	  if (json.serviceLinkStatusRecords[index].serviceLinkStatus==='ACTIVE'){
		return true;
	  }   
	  return false;
  } 

}