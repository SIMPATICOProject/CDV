import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgbDropdownModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { consentsComponent } from './consents.component';
import { routing } from './consents.routing';
import { NgaModule } from '../../theme/nga.module';
import { ConsentsService } from './consents.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    NgbModalModule,
	NgbDropdownModule,
    FormsModule
    ],
  declarations: [
    consentsComponent
  ],
  entryComponents: [
   ],
  providers: [
    ConsentsService
  ]
})
export class consentsModule {}
