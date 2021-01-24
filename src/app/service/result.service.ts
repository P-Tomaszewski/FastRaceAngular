import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Top} from '../spec/top';
import {Result} from '../spec/result';
import {ResultDriver} from '../spec/resultDriver';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  resultUrl: string;

  constructor(private http: HttpClient) {
    this.resultUrl = 'http://localhost:8080/result';
  }

  public getResults(resultDriver: ResultDriver): Observable<Result[]> {
    return this.http.get<Result[]>(this.resultUrl).pipe(tap(console.log))
  }
}
