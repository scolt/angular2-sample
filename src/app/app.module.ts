import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { ModalModule } from 'angular2-modal';
import { VexModalModule } from 'angular2-modal/plugins/vex';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';

import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { BreadcrumbsComponent } from './common/components/breadcrumbs/breadcrumbs.component';
import { LoaderBlockComponent } from './common/components/loaderBlock/loaderBlock.component';

import { SearchComponent } from './pages/courses/search/search.component';
import { CourseComponent } from './pages/courses/course/course.component';
import { CreateCoursesComponent } from './pages/create/createCourses.component';
import { DateFieldComponent } from './pages/create/dateField/dateField.component';
import { DurationFieldComponent } from './pages/create/durationField/durationField.component';
import { AuthorsFieldComponent } from './pages/create/authorsField/authorsField.component';
import { DeleteCourseComponent } from './pages/courses/course/delete/delete.course.component';
import { AddcourseButtonComponent } from './pages/courses/addNewOne/addNewOne.component';
import { PagingComponent } from './pages/courses/paging/paging.component';
import { HighlightDirective } from './pages/courses/highlight/highlight.directive';

import { CoursesService } from './pages/courses/courses.service';
import { UserService } from './common/services/user.service';
import { HttpService } from './common/services/http.service';
import { LoaderService } from './common/components/loaderBlock/loaderBlock.service';
import { BreadcrumbService } from './common/services/breadcrumb.service';

import { AuthGuard } from './common/guards/auth.guard';

import { DurationPipe } from './common/pipes/duration.pipe';
import { OrderByPipe } from './common/pipes/orderBy.pipe';
import { FilterPipe } from './common/pipes/filter.pipe';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CoursesComponent,
    NoContentComponent,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
    DateFieldComponent,
    DurationFieldComponent,
    AuthorsFieldComponent,
    PagingComponent,

    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LoaderBlockComponent,

    SearchComponent,
    AddcourseButtonComponent,
    CourseComponent,
    DeleteCourseComponent,
    CreateCoursesComponent,
    HighlightDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    VexModalModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    CoursesService,
    UserService,
    HttpService,
    LoaderService,
    BreadcrumbService,
    FilterPipe,
    AuthGuard,
    FormBuilder
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
