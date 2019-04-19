import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { pDataModal } from './pDataModal.component';
import { Ng2CompleterModule } from "ng2-completer";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule  
  ],
  declarations: [
    pDataModal
  ],
  entryComponents: [
    pDataModal
  ],
  providers: [
   
  ]
})
export class pDataModule {}