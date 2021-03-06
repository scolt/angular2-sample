import {
  Component,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

import { ICourse } from './course/course.component';
import { CoursesService } from './courses.service';
import { ISubscription } from 'rxjs/Subscription';
import { IPagingConfig } from './paging/paging.component';
import { Store } from '@ngrx/store';
import {
  CourseModel
} from '../../common/models/course.model';

@Component({
  selector: 'courses',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit, OnDestroy {
  public courses: ICourse[] = [];
  public pagingConfig: IPagingConfig = {
    currentPage: 1,
    totalPages: 0
  };
  private subscription: ISubscription;

  constructor(private store: Store<any>,
              private coursesService: CoursesService,
              private cd: ChangeDetectorRef) {
  }

  pageChanged(value: number) {
    this.pagingConfig.currentPage = value;
    this.coursesService.setPage(value);
  }

  ngOnInit() {
    this.subscription = this.store.select('course').subscribe((result: CourseModel) => {
      this.courses = result.courses;
      this.pagingConfig.totalPages = result.totalPages;
      this.cd.markForCheck();
    });
    this.coursesService.getList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
