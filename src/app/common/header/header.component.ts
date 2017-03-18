import {
  Component
} from '@angular/core';

import { LoginService, IAuthenticatedResult } from '../../pages/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  styleUrls: [ './header.component.scss' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isAuthenticatedUser: boolean = false;
  userInfo: any = {};
  isLightUI: boolean = false;

  constructor(public loginService: LoginService, private router: Router) {
    this.loginService.authenticatedResult.subscribe((result: IAuthenticatedResult) => {
      this.isAuthenticatedUser = result.result;
      this.userInfo = result.userInfo;
    });

    router.events.subscribe((item) => {
      this.isLightUI = item.url === '/login';
    });
  }

  logoff(): void {
    this.loginService.logout();
  }
}
