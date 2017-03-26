import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'delete-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="black-button" (click)="clicked()">Delete Course</span>`
})
export class DeleteCourseComponent {
  @Output() deleteCourse = new EventEmitter();

  public clicked(): void {
    this.deleteCourse.emit();
  }
}
