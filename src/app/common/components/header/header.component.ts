import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

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

  constructor(public userService: UserService,
              private router: Router,
              private store: Store<any>,
              private cd: ChangeDetectorRef) {
    this.store.select('user').subscribe((result: UserModel) => {
      if (result.userProfile) {
        this.username = result.userProfile.first + ' ' + result.userProfile.last;
      }
      this.isAuthenticatedUser = result.loggedIn;
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
