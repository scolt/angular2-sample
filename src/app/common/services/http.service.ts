import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, XHRBackend, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService extends Http {
  constructor (backend: XHRBackend, options: RequestOptions) {
    let token = localStorage.getItem('token');
    options.headers.set('Authorization', token);
    super(backend, options);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('token');
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', token);
    } else {
      url.headers.set('Authorization', token);
    }
    return super.request(url, options);
  }
}
