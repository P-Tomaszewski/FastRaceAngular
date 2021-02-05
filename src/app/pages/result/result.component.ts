import {Component, Input, OnInit} from '@angular/core';
import {Driver} from '../../spec/driver';
import {DriverService} from '../../service/driver.service';
import {Result} from '../../spec/result';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultService} from '../../service/result.service';
import {ResultDriver} from '../../spec/resultDriver';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  userName: string;
  drivers: Driver[];
  result: Result[];
  resultDriver: ResultDriver;
  constructor(private driverService: DriverService,
              private resultService: ResultService,
              private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,

  ) {
    this.resultDriver = new ResultDriver();
  }

  ngOnInit() {
    // let url = 'http://localhost:8080/user';
    // let headers: HttpHeaders = new HttpHeaders({
    //   'Authorization': 'BasicHUJ' + sessionStorage.getItem('token')
    // });
    //
    // let options = { headers: headers };
    // this.http.post<Observable<Object>>(url, {}, options).
    // subscribe(principal => {
    //     this.userName = principal['name'];
    //   },
    //   error => {
    //     if(error.status == 401)
    //       alert('Unauthorized');
    //   }
    // );

    this.driverService.findAll().subscribe(data => {
      this.drivers = data;
    });
  }

  onSubmit() {
    this.resultService.getResults(this.resultDriver).subscribe(data => {
      this.result = data;
    });
  }
  refresh(): void {
    window.location.reload();
  }

}
