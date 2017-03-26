import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Modal } from 'angular2-modal/plugins/vex';
import { CoursesService } from '../cources.service';

export interface ICourse {
  id: string;
  title: string;
  date: string;
  duration: string;
  content: string;
}

@Component({
  selector: 'cource',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['course.component.scss'],
  templateUrl: 'course.component.html'
})
export class CourceComponent {
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
