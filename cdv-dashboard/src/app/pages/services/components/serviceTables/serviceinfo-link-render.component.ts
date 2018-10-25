
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';


@Component({
  template: `
    <button type="button" class="btn btn-info btn-icon" (click)="lgModalShow()"><i class="ion-information"></i></button>
  `,
})
export class ServiceInfoLinkRenderComponent implements OnInit {

  public renderValue;

  @Input() value;
  

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.renderValue = this.value;
	console.log("this.value INFO "+ this.value);
  }
 
 example() {
    alert(this.renderValue);
  }
  
  lgModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = this.renderValue.viewInfo.publicServiceName;
	activeModal.componentInstance.modalContent= this.renderValue.viewInfo.humanReadableDescription[0].description;
	activeModal.componentInstance.keywords= this.renderValue.viewInfo.publicServiceKeyword;
	activeModal.componentInstance.purpose= this.renderValue.viewInfo.publicServiceIsDescribedAt[0].purpose;
	activeModal.componentInstance.serviceUri= this.renderValue.viewInfo.serviceUri;
	activeModal.componentInstance.data= this.getData(this.renderValue.viewInfo.publicServiceIsDescribedAt[0].dataMapping);
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