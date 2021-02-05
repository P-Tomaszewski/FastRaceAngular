import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Driver} from '../spec/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  driversUrl: string;

  constructor(private http: HttpClient) {
    this.driversUrl = 'http://localhost:8080/drivers';
  }

  public findAll(): Observable<Driver[]> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token') });
    return this.http.get<Driver[]>(this.driversUrl,
      // {headers }
      );
  }

  public save(driver: Driver) {
    return this.http.post<Driver>(this.driversUrl, driver);
  }
}
