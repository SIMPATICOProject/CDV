import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account.component';
import { BlockForm } from './blockForm/blockForm.component';
import { BlockFormService } from './blockForm/blockForm.service';
import { routing } from './account.routing';
import { DatePipe } from '@angular/common';

import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  imports: [
    CommonModule,
		NgaModule,
	AngularFormsModule,
	ReactiveFormsModule,
    routing,
	NgbDropdownModule,
    DpDatePickerModule
  ],
  declarations: [
    AccountComponent,
	    BlockForm
  ],
  providers: [
    BlockFormService,
	DatePipe
  ]
})
export class AccountModule {}