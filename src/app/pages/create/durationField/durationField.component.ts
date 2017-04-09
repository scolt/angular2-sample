import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { ICourse } from '../../courses/course/course.component';

@Component({
  selector: 'duration-field',
  templateUrl: 'durationField.component.html',
  styleUrls: ['durationField.component.scss']
})
export class DurationFieldComponent {
  @Output() dateUpdated = new EventEmitter();
  date: number = 0;
  constructor(private cd: ChangeDetectorRef) {}

  triggerDate($event: number) {
    this.date = $event;
    this.dateUpdated.emit($event);
    this.cd.markForCheck();
  }
}
