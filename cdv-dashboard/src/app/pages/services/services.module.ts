import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './services.routing';
import { NgaModule } from '../../theme/nga.module';
import {ServicesComponent} from "./services.component";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SlideToggleModule } from 'ng2-slide-toggle';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { ServiceTables } from './components/serviceTables/smartTables.component';
import { ServicesTablesService } from './components/serviceTables/smartTables.service';
import { LinkButtonRenderComponent } from './components/serviceTables/link-button-render.component';
import { ServiceInfoLinkRenderComponent } from './components/serviceTables/serviceinfo-link-render.component';
import { DefaultModal } from './components/serviceTables/default-modal/default-modal.component';
import { ConsentModal } from './components/linked-serviceTables/default-modal/default-modal.component';

import { LinkedServiceTables } from './components/linked-serviceTables/smartTables.component';
import { LinkedServicesTablesService } from './components/linked-serviceTables/smartTables.service';
import { EnableServiceButtonRenderComponent } from './components/linked-serviceTables/enable-service-button-render.component';
import {LinkRenderComponent } from './components/linked-serviceTables/link-render.component';
import { ServiceConsentLinkRenderComponent } from './components/linked-serviceTables/service-consent-link-render.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
	NgaModule,
	Ng2SmartTableModule,
	SlideToggleModule,
	NgbModalModule
  ],
  declarations: [
	ServicesComponent,
	ServiceTables,
	LinkedServiceTables,
    LinkButtonRenderComponent,
    ServiceInfoLinkRenderComponent,
    EnableServiceButtonRenderComponent,
    ServiceConsentLinkRenderComponent,
    DefaultModal,
    ConsentModal,
    LinkRenderComponent	
	
  ],
  entryComponents: [
    LinkButtonRenderComponent,
    ServiceInfoLinkRenderComponent,
    EnableServiceButtonRenderComponent,
    ServiceConsentLinkRenderComponent,
	LinkRenderComponent,
    DefaultModal,
    ConsentModal	
   ],
  providers: [
    ServicesTablesService,
    LinkedServicesTablesService	
  ]
})
export class servicesModule {}