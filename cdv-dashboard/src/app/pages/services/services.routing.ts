import { Routes, RouterModule }  from '@angular/router';
import { ServicesComponent } from './services.component';
import { ModuleWithProviders } from '@angular/core';
import { ServiceTables } from './components/serviceTables/smartTables.component';
import { LinkedServiceTables } from './components/linked-serviceTables/smartTables.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      { path: 'services', component: ServiceTables },
	  { path: 'linked_services', component: LinkedServiceTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
//export const routing: ModuleWithProviders = RouterModule.forChild(routes);