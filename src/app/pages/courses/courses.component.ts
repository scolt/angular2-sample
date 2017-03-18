import {
  Component,
  OnInit
} from '@angular/core';

import { ICourse } from './course/course.component';
import { CoursesService } from './cources.service';

@Component({
  selector: 'cources',
  providers: [],
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CourcesComponent implements OnInit {
  public courses: ICourse[] = [];

  constructor(public coursesService: CoursesService) {}

  public ngOnInit() {
    this.coursesService.courses.subscribe((courses: ICourse[]) => {
      this.courses = courses;
    });
    this.coursesService.getList();
  }
}
