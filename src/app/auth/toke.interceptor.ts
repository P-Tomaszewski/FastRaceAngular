import { Injectable } from '@angular/core';
import {HomeService} from '../service/home.service';

import { AuthenticationService } from './auth.service';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if((sessionStorage.getItem('token') != null)) {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Basic ' + sessionStorage.getItem('token')
        }
      });
    // }
    console.log(sessionStorage.getItem('token'));
      return next.handle(request);
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }
}

//Sprawdzic bez interceptora.
