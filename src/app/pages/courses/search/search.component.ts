import {
  Component
} from '@angular/core';

@Component({
  selector: 'search-courses',
  styleUrls: [ './search.component.scss' ],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public query: string = '';
}
