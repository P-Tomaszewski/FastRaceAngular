import { Component, OnInit } from '@angular/core';
import {Driver} from '../../spec/driver';
import {DriverService} from '../../service/driver.service';
import {Top} from '../../spec/top';
import {TopService} from '../../service/top.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  userName: string;
  top: Top[];

  constructor(private topService: TopService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.topService.getScoreReadModels().subscribe(data => {
      this.top = data;
    });

    // let url = 'http://localhost:8080/user';
    // let headers: HttpHeaders = new HttpHeaders({
    //   'Authorization': 'Basic' + sessionStorage.getItem('token')
    // });
    //
    // let options = { headers: headers };
    // this.http.post<Observable<Object>>(url, {}, options).
    // subscribe(principal => {
    //     this.userName = principal['name'];
    //   },
    //   error => {
    //     if(error.status == 401)
    //       alert('Unauthorized Dupa');
    //   }
    // );


  }
}
