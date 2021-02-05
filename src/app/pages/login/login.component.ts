import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {HomeService} from '../../service/home.service';
import {AuthenticationService} from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  private http: HttpClient;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private handler: HttpBackend,
    private token: HomeService
  ) {
    this.http = new HttpClient(handler);
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    let url = 'http://localhost:8080/login';
    this.http.post<Observable<boolean>>(url, {
      userName: this.model.username,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.model.username + ':' + this.model.password)
        );
        this.router.navigate(['/home']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
