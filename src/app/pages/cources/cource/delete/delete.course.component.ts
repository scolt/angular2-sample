import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'delete-course',
  template: `<span class="black-button" (click)="clicked()">Delete Course</span>`
})
export class DeleteCourseComponent {
  @Output() public deleteCourse = new EventEmitter();

  public clicked(): void {
    this.deleteCourse.emit();
  }
}
