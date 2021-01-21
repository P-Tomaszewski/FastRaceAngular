import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    return this.http.get<Driver[]>(this.driversUrl);
  }

  public save(driver: Driver) {
    return this.http.post<Driver>(this.driversUrl, driver);
  }
}
