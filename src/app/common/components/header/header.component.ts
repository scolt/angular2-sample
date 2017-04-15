import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

import { UserService, IAuthenticatedResult } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'main-header',
  styleUrls: [ './header.component.scss' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  isAuthenticatedUser: boolean = false;
  username: string = '';
  isLightUI: boolean = false;

  constructor(public userService: UserService, private router: Router, private cd: ChangeDetectorRef) {
    this.userService.authenticatedResult.subscribe((result: IAuthenticatedResult) => {
      this.isAuthenticatedUser = result.result;
      this.cd.markForCheck();
    });

    this.userService.userInfo.subscribe((result) => {
      this.username = result.first + ' ' + result.last;
      this.cd.markForCheck();
    });

    router.events.subscribe((item) => {
      this.isLightUI = item.url === '/login';
      this.cd.markForCheck();
    });
  }

  logoff(): void {
    this.userService.logout();
  }

  ngOnDestroy() {
    /* Header will never destroyed */
  }
}
