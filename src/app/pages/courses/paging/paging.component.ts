import {
  Component,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

export interface IPagingConfig {
  totalPages;
  currentPage;
}

@Component({
  selector: 'pagination',
  styleUrls: ['paging.component.scss'],
  templateUrl: 'paging.component.html'
})
export class PagingComponent implements OnChanges {
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  pages: number[] = [];

  changePage(value: number) {
    this.pageChanged.emit(value);
  }

  ngOnChanges () {
    this.pages.length = this.totalPages;
    this.pages = this.pages.fill(0).map((x, i) => ++i);
  }
}
