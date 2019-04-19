import { Routes, RouterModule }  from '@angular/router';
import { logsComponent } from './logs.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: logsComponent,

  }
];

export const routing = RouterModule.forChild(routes);
//export const routing: ModuleWithProviders = RouterModule.forChild(routes);
