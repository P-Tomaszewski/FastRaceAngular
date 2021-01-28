import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ResultDriver} from '../spec/resultDriver';
import {Result} from '../spec/result';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  deleteUrl: string;

  constructor(private http: HttpClient) {
    this.deleteUrl = 'http://localhost:8080/delete'
  }

  public deleteDriver(resultDriver: ResultDriver): Observable<{}> {
    return this.http.delete<{}>(this.deleteUrl + '/' + resultDriver.driverId).pipe(tap(console.log))
  }
}
