import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CourcesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'courses',  component: CourcesComponent },
  { path: 'login', component: LoginComponent},
  { path: '**',    component: NoContentComponent },
];
