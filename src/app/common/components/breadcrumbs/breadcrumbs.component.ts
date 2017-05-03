import {
  Component, ChangeDetectorRef
} from '@angular/core';
import { BreadcrumbEnity, BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'breadcrumbs',
  styleUrls: [ './breadcrumbs.component.scss' ],
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {
  public items: BreadcrumbEnity[] = [];
  constructor(bs: BreadcrumbService, private cd: ChangeDetectorRef) {
    bs.breadcrumbs.subscribe((result: BreadcrumbEnity[]) => {
      this.items = result;
      cd.markForCheck();
    });
  }
}
