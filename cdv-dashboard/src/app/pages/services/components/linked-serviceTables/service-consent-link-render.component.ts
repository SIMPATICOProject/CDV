
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsentModal } from './default-modal/default-modal.component';


@Component({
  template: `
    <button type="button" class="btn btn-info btn-icon" (click)="lgModalShow()"><i class="ion-information"></i></button>
  `,
})
export class ServiceConsentLinkRenderComponent implements OnInit {

  public renderValue;

  @Input() value;
  

  constructor(private modalService: NgbModal) {  }

  ngOnInit() {
    this.renderValue = this.value;
  }
 
 example() {
    console.log(JSON.stringify(this.renderValue));
	alert(this.renderValue);
  }
  
  lgModalShow() {
    const activeModal = this.modalService.open(ConsentModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = this.renderValue.serviceName;
	activeModal.componentInstance.created= this.renderValue.created;
	activeModal.componentInstance.serviceUri= this.renderValue.serviceUri;
  }

}