import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { ICourse } from './course/course.component';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit {
  public courses: ICourse[] = [];

  constructor(public coursesService: CoursesService, private cd: ChangeDetectorRef) {}

  public ngOnInit() {
    this.coursesService.courses.subscribe((courses: ICourse[]) => {
      this.courses = courses;
      this.cd.markForCheck();
    });
    this.coursesService.getList();
  }
}
