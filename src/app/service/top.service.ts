import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Driver} from '../spec/driver';
import {Top} from '../spec/top';

@Injectable({
  providedIn: 'root'
})
export class TopService {
  topUrl: string;

  constructor(private http: HttpClient) {
    this.topUrl = 'http://localhost:8080/top';
  }
  public getScoreReadModels(): Observable<Top[]> {
    return this.http.get<Top[]>(this.topUrl);
  }
}
