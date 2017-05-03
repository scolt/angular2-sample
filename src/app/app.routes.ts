import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';

import { CreateCoursesComponent } from './pages/create/createCourses.component';

export const ROUTES: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'courses',
    children: [
      {path: '', component: CoursesComponent},
      {path: ':id', component: CreateCoursesComponent},
      {path: 'new', component: CreateCoursesComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoContentComponent},
];
