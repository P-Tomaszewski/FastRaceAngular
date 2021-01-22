import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../spec/race';
import {Score} from '../spec/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreUrl: string;

  constructor(private http: HttpClient) {
    this.scoreUrl = 'http://localhost:8080/addScore';
  }

  public findAll(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreUrl);
  }

  public save(score: Score) {
    return this.http.post<Score>(this.scoreUrl, score);
  }

}

