import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ICourse } from '../../courses/course/course.component';

@Component({
  selector: 'date-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'dateField.component.html'
})
export class DateFieldComponent {
  @Output() dateUpdated = new EventEmitter();
  date: string = '';

  triggerDate($event) {
    this.date = $event;
    this.dateUpdated.emit($event);
  }
}
