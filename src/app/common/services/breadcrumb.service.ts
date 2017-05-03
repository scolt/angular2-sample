export interface BreadcrumbEnity {
  path: string;
  title: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';

const DEFAULT_BREADCRUMB = [{
  path: '/#/courses',
  title: 'Courses'
}];

@Injectable()
export class BreadcrumbService {
  public breadcrumbs: BehaviorSubject<BreadcrumbEnity[]> = new BehaviorSubject<BreadcrumbEnity[]>([...DEFAULT_BREADCRUMB]);

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.filter((event: any) => event instanceof NavigationEnd).subscribe((event: any) => {
      this.breadcrumbs.next([...DEFAULT_BREADCRUMB]);
    });
  }

  replace(crumbs: BreadcrumbEnity[]): void {
    this.breadcrumbs.next(crumbs);
  }

  push(item: BreadcrumbEnity): void {
    const crumbs = this.breadcrumbs.getValue();
    crumbs.push(item);
    this.breadcrumbs.next(crumbs);
  }
}
