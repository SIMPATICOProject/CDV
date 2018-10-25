import { Routes, RouterModule }  from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,

  }
];

export const routing = RouterModule.forChild(routes);
//export const routing: ModuleWithProviders = RouterModule.forChild(routes);