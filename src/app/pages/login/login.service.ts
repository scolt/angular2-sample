import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ICreds } from './login.component';
import { Router } from '@angular/router';

const TOKEN_KEY_NAME = 'token';

export interface IAuthenticatedResult {
  err?: string;
  result?: boolean;
  userInfo?: any;
}

@Injectable()
export class LoginService {
  public authenticatedResult: Subject<IAuthenticatedResult> = new BehaviorSubject<IAuthenticatedResult>({
    err: '',
    result: false
  });

  constructor(private router: Router) {}

  public login(creds: ICreds): void {
    localStorage.setItem(TOKEN_KEY_NAME, 'token');
    this.router.navigateByUrl('/courses');
    this.authenticatedResult.next({
      err: '',
      result: true,
      userInfo: {
        name: 'Viktar Parashchanka'
      }
    });
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_KEY_NAME);
    this.authenticatedResult.next({
      err: '',
      result: false
    });
  }
}
