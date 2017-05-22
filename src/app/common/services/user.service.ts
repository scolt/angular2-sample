import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ICreds } from '../../pages/login/login.component';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Store } from '@ngrx/store';
import { LOG_IN, LOG_OUT } from '../reducers/auth.reducer';
const TOKEN_KEY_NAME = 'token';

export interface IAuthenticatedResult {
  err: string;
  result: boolean;
}

export interface IUserInfo {
  first: string;
  last: string;
}

const successLogin: IAuthenticatedResult = {
  err: '',
  result: true
};

const successLogout: IAuthenticatedResult = {
  err: '',
  result: false
};

@Injectable()
export class UserService {
  public authenticatedResult: BehaviorSubject<IAuthenticatedResult> = new BehaviorSubject<IAuthenticatedResult>(successLogout);
  public userInfo: Subject<IUserInfo> = new Subject<IUserInfo>();

  constructor(private router: Router,
              private http: HttpService,
              private store: Store<any>) {
    this.getProfile();
  }

  public getProfile(): Promise<any> {
    return this.http.post(`/auth/userinfo`, {}).toPromise().then((user: Response) => {
      this.store.dispatch({
        type: LOG_IN,
        payload: user.json().name
      });
    }, (error) => console.log(error.status, error.statusText));
  }

  public login(creds: ICreds): void {
    this.http.post(`/auth/login`, creds).toPromise().then((item: Response) => {
      localStorage.setItem(TOKEN_KEY_NAME, item.json().token);
      this.getProfile();
      this.router.navigateByUrl('/courses');
    }, (error) => console.log(error.status, error.statusText));
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_KEY_NAME);
    this.store.dispatch({
      type: LOG_OUT
    });
    this.router.navigateByUrl('/');
  }
}
