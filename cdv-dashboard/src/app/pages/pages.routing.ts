import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../_guards/index';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      /*{ path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },*/
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },
	  { path: 'account',  loadChildren: 'app/pages/account/account.module#AccountModule', canActivate: [AuthGuard] },
	  { path: 'pdata',  loadChildren: 'app/pages/pdata/pdata.module#pDataModule', canActivate: [AuthGuard] },
	  { path: 'logs',  loadChildren: 'app/pages/logs/logs.module#logsModule', canActivate: [AuthGuard]},      
      { path: 'consents',  loadChildren: 'app/pages/consents/consents.module#consentsModule', canActivate: [AuthGuard] },
	  { path: 'configuration',  loadChildren: 'app/pages/configuration/configuration.module#configurationModule', canActivate: [AuthGuard] },
	  { path: 'services',  loadChildren: 'app/pages/services/services.module#servicesModule', canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
