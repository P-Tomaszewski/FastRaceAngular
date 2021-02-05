import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    // const headers = new HttpHeaders({ Authorization: 'Basic ' +sessionStorage.getItem('token')});
    return this.http.get<Race[]>(this.racesUrl,
      // {headers}
      );
  }

  public save(race: Race) {
    return this.http.post<Race>(this.racesUrl, race);
  }
}
