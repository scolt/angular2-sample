import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'search-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public query: string = '';

  constructor(public coursesService: CoursesService) {}

  search() {
    this.coursesService.filterByName(this.query);
  }
}
