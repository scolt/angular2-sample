import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { LoginService, IAuthenticatedResult } from '../../../pages/login/login.service';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'main-header',
  styleUrls: [ './header.component.scss' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isAuthenticatedUser: boolean = false;
  userInfo: any = {};
  isLightUI: boolean = false;

  constructor(public loginService: LoginService, private router: Router, private cd: ChangeDetectorRef) {
    this.loginService.authenticatedResult.subscribe((result: IAuthenticatedResult) => {
      this.isAuthenticatedUser = result.result;
      this.userInfo = result.userInfo;
      this.cd.markForCheck();
    });

    router.events.subscribe((item) => {
      this.isLightUI = item.url === '/login';
      this.cd.markForCheck();
    });
  }

  logoff(): void {
    this.loginService.logout();
  }
}
