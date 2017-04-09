import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { ICourse } from '../courses/course/course.component';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'create-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['createCourses.component.scss'],
  templateUrl: 'createCourses.component.html'
})
export class CreateCoursesComponent {
  course: ICourse = <ICourse> {};

  handleDateUpdate(e) {
    this.course.date = e;
  };

  handleDurationUpdate(e) {
    this.course.duration = e;
  };

  onSubmit() {
    console.log(this.course);
  }

}
