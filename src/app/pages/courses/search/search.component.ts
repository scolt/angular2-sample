import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'search-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './search.component.scss' ],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public query: string = '';
}
