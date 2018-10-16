import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html'
})

export class ConsentModal implements OnInit {

  modalHeader: string;
  modalContent: string = "";
  created="";
  serviceUri="";
  slrId="";
  data=[];
  provider="";
  purpose ="";
  keywords =[];
  serviceId="";
     


  constructor(private activeModal: NgbActiveModal,private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
  
  openConsents(){
    console.log("Open Consents:"+ this.route.snapshot['_routerState'].url +"- serviceID "+this.serviceId);
    this.router.navigate( ['/pages/consents', {serviceId: this.serviceId, serviceName: this.modalHeader}] );
	this.activeModal.close();
  }
}
