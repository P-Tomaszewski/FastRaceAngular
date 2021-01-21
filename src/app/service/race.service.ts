import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../spec/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  racesUrl: string;

  constructor(private http: HttpClient) {
    this.racesUrl = 'http://localhost:8080/races';
  }

  public findAll(): Observable<Race[]> {
    return this.http.get<Race[]>(this.racesUrl);
  }

  public save(race: Race) {
    return this.http.post<Race>(this.racesUrl, race);
  }
}
