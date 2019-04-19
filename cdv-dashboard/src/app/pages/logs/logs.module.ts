import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { logsComponent } from './logs.component';
import { routing } from './logs.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SmartTables } from './smartTables/smartTables.component';
import { pDataModal } from './pDataModal/pDataModal.component';
import { SmartTablesService } from './smartTables/smartTables.service';
import { ClickOutsideDirective } from './smartTables/smartTables.directives';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  imports: [
    CommonModule,
    routing,
	  NgaModule,
	  Ng2SmartTableModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule

  ],
  declarations: [
    logsComponent,
	  SmartTables,
    pDataModal,
    ClickOutsideDirective
  ],
  entryComponents: [
    pDataModal
  ],
  providers: [
    SmartTablesService,


  ]
})
export class logsModule {}
