import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';
import { CreateCoursesComponent } from './pages/create/createCourses.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/create', component: CreateCoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoContentComponent},
];
