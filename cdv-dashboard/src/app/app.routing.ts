import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './_guards/index';
import { Pages } from './pages/index';

export const routes: Routes = [
 
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/account' }
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
