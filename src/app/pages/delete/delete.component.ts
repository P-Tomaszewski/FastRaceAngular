import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DeleteService} from '../../service/delete.service';
import {ResultDriver} from '../../spec/resultDriver';
import {DriverService} from '../../service/driver.service';
import {Driver} from '../../spec/driver';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  drivers: Driver[];
  resultDriver: ResultDriver;
  userName: string;


  constructor(private deleteService: DeleteService,
              private driverService: DriverService,
              private http: HttpClient) {
    this.resultDriver = new ResultDriver();
  }

  ngOnInit(): void {
    this.driverService.findAll().subscribe(data => {
      this.drivers = data;
    });

    let url = 'http://localhost:8080/user';
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic' + sessionStorage.getItem('token')
    });

    let options = { headers: headers };
    this.http.post<Observable<Object>>(url, {}, options).
    subscribe(principal => {
        this.userName = principal['name'];
      },
      error => {
        if(error.status == 401)
          alert('Unauthorized Dupa');
      }
    );

  }

  onSubmit() {
    this.deleteService.deleteDriver(this.resultDriver).subscribe();
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
  }

}
