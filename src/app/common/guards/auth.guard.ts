import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<any>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('user').map((result: UserModel) => {
      if (!result.loggedIn) {
        this.router.navigateByUrl('/login');
      }
      return result.loggedIn;
    });
  }
}
