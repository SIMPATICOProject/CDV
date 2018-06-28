import { Routes, RouterModule }  from '@angular/router';
import { consentsComponent } from './consents.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: consentsComponent,

  }
];

export const routing = RouterModule.forChild(routes);
//export const routing: ModuleWithProviders = RouterModule.forChild(routes);
