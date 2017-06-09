import { Routes, RouterModule }  from '@angular/router';
import { pDataComponent } from './pdata.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: pDataComponent,

  }
];

export const routing = RouterModule.forChild(routes);
//export const routing: ModuleWithProviders = RouterModule.forChild(routes);