import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Driver} from '../spec/driver';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homeUrl: string;
  userName: string;


  constructor(private http: HttpClient) {
    this.homeUrl = 'http://localhost:8080/home';
  }


  public getTokenFromStorage() {
    return localStorage.getItem('token');
  }


}
