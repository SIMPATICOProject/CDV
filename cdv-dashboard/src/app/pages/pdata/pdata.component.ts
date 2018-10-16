import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pDataModal } from './pDataModal/pDataModal.component';

@Component({
  selector: 'pdata',
  templateUrl: './pdata.html'

})
export class pDataComponent {
  constructor(private modalService: NgbModal) {}

   smModalShow(): void {

  
    const activeModal = this.modalService.open(pDataModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'general.personal_data.add_new_title';
  }
}