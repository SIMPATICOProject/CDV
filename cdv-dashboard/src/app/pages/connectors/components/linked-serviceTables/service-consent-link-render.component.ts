
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsentModal } from './default-modal/default-modal.component';
import { LinkedServicesTablesService } from './smartTables.service';


@Component({
  template: `
    <button type="button" class="btn btn-info btn-icon" (click)="lgModalShow()"><i class="ion-information"></i></button>
  `,
})
export class ServiceConsentLinkRenderComponent implements OnInit {

  public renderValue;
  public serviceInfo;

  @Input() value;
  

  constructor(private modalService: NgbModal, protected service: LinkedServicesTablesService) { 

   
   

  }

  ngOnInit() {
    
	
  }
 
 
  
	lgModalShow() {
	
	this.renderValue = this.value;
	console.log("this.value "+ this.value);
	this.service.getServiceData(this.renderValue.viewInfo).subscribe(
		 result => { 
			 this.serviceInfo =result;
			 const activeModal = this.modalService.open(ConsentModal, {size: 'lg'});
	activeModal.componentInstance.modalHeader = this.renderValue.serviceName;
	activeModal.componentInstance.created= this.renderValue.created;
	activeModal.componentInstance.serviceUri= this.renderValue.serviceUri;
	activeModal.componentInstance.slrId= this.renderValue._id;
	activeModal.componentInstance.serviceId=  this.serviceInfo.publicServiceID;
	activeModal.componentInstance.modalContent= this.serviceInfo.humanReadableDescription[0].description;
	activeModal.componentInstance.keywords= this.serviceInfo.publicServiceKeyword;
	activeModal.componentInstance.purpose= this.serviceInfo.publicServiceIsDescribedAt[0].purpose;
	activeModal.componentInstance.data= this.getData(this.serviceInfo.publicServiceIsDescribedAt[0].dataMapping);
		} 
      );
	
	
	}
	
	getData(json){
	  var concepts=[];
			  for(var i = 0; i < json.length; i++) {
				var obj = json[i];
				concepts.push(obj.name);
			}
	  return concepts;
  }

}