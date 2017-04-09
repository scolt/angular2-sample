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

@Component({
  selector: 'courses',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit, OnDestroy {
  public courses: ICourse[] = [];
  private subscription: ISubscription;

  constructor(public coursesService: CoursesService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.coursesService.courses.subscribe((courses: ICourse[]) => {
      this.courses = courses;
      this.cd.markForCheck();
    });
    this.coursesService.getList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
