import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService, IAuthenticatedResult } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private us: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.us.authenticatedResult.map((result: IAuthenticatedResult) => {
      if (!result.result) {
        this.router.navigateByUrl('/login');
      }
      return result.result;
    });
  }
}
