import {Component, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pDataModal } from './pDataModal/pDataModal.component';

@Component({
  selector: 'log',
  templateUrl: './logs.html'

})
export class logsComponent {

  constructor(private modalService: NgbModal) {}

   smModalShow(): void {


    //const activeModal = this.modalService.open(pDataModal, {size: 'lg'});
    //activeModal.componentInstance.modalHeader = '';
  }
}
