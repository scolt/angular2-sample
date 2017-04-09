import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Modal } from 'angular2-modal/plugins/vex';
import { CoursesService } from '../courses.service';

import { DeleteCourseComponent } from './delete/delete.course.component';

export interface ICourse {
  id: string;
  title: string;
  date?: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

@Component({
  selector: 'course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['course.component.scss'],
  templateUrl: 'course.component.html'
})
export class CourseComponent {
  @Input() course: ICourse;

  constructor(private modal: Modal, public coursesService: CoursesService) {
  }

  public handleDeleteClick() {
    this.modal.confirm()
      .message('Do you really want to delete this course?')
      .open()
      .then((item) => {
        return item.result.catch(() => false);
      })
      .then((result) => {
        if (result) {
          this.coursesService.remove(this.course.id);
        }
      });
  }
}
