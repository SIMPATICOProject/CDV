import { Component, OnInit , EventEmitter,Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormArray, FormControl,FormBuilder, Validators   } from '@angular/forms';
import {CompleterCmp, CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { SmartTablesService } from '../smartTables/smartTables.service';
import { PData } from '../../account/models/account.ts';
import { Router} from '@angular/router';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./pDataModal.component.scss')],
  templateUrl: './pDataModal.component.html'
})

export class pDataModal implements OnInit {

  modalHeader: string="Add a new Personal Data";
  modalContent: string = `Lorem ipsum dolor sit amet,
   consectetuer adipiscing elit, sed diam nonummy
   nibh euismod tincidunt ut laoreet dolore magna aliquam
   erat volutpat. Ut wisi enim ad minim veniam, quis
   nostrud exerci tation ullamcorper suscipit lobortis
   nisl ut aliquip ex ea commodo consequat.`;
	public pDataForm: FormGroup; 
  private searchStr: string;
  private placeholder: string="Search field...";
  private dataService: CompleterData;
  private pDataFieldSelected:boolean=false;
  private pDataNew:any;
  constructor(private fb: FormBuilder,private completerService: CompleterService, private st_service: SmartTablesService,private activeModal: NgbActiveModal,private router: Router) {
    this.createForm();
   let pDataFieldArray:any[]= st_service.getPDataFields();
   
    this.dataService = completerService.local(pDataFieldArray, 'name', 'name');
  }

  ngOnInit() {}
  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  public onFieldSelected(selected: CompleterItem) {
      if (selected) {
        this.pDataFieldSelected=true;
        this.pDataNew=selected.originalObject;
        this.pDataForm.get('name').patchValue(selected.originalObject.name);
      } else {
        this.pDataFieldSelected=false;
        this.pDataNew="";
       
      }    
    }

  onSubmit(){
    console.log(this);
    let conceptArray=[];
    this.pDataNew.values.push(this.pDataForm.value.value);
    conceptArray.push(this.pDataNew);
    conceptArray.map(function(item) { 
    delete item.category;
    delete item.description; 
    return item; 
    });
    console.log(conceptArray);
    this.st_service.addPData(conceptArray) 
					.subscribe(
            result => { 
              window.alert('Success');
              //this.st_service.source.load(result); 
              location.reload();
					},
          err => {
								let errorJson=eval('('+err._body+')');
								console.log('Error\n'+errorJson['message']);
								this.router.navigate(['/login']);
							}
         
              ); 
    this.submitted.emit("added");   
    this.closeModal();
    
  }
  closeModal() {
    this.activeModal.close();
  }

      // we will initialize our form here
     createForm() {
		this.pDataForm = this.fb.group({
				name:'',
        value:''
			
			});
		}
  	
}
