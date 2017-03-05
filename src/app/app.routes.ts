import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { CourcesComponent } from './pages/cources';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'cources',  component: CourcesComponent },
  { path: '**',    component: NoContentComponent },
];
