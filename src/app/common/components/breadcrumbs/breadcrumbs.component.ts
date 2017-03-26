import {
  Component
} from '@angular/core';

export interface BreadcrumbEnity {
  path: string;
  title: string;
}

@Component({
  selector: 'breadcrumbs',
  styleUrls: [ './breadcrumbs.component.scss' ],
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {
  public items: BreadcrumbEnity[] = [
    {
      path: '',
      title: 'Cources'
    }
  ];
}
