import {
  Component,
  Input
} from '@angular/core';

export interface ICourse {
  title: string;
  date: string;
  duration: string;
  content: string;
}

@Component({
  selector: 'cource',
  styleUrls: [ 'course.component.scss' ],
  templateUrl: 'course.component.html'
})
export class CourceComponent {
  @Input() course: ICourse;

  public handleDeleteClick() {
    console.log('Try to delete');
  }
}
