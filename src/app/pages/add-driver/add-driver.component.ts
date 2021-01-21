import { Component, OnInit } from '@angular/core';
import {Driver} from '../../spec/driver';
import {ActivatedRoute, Router} from '@angular/router';
import {DriverService} from '../../service/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {

  driver: Driver;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private driverService: DriverService) {
    this.driver = new Driver();
  }

  onSubmit() {
    this.driverService.save(this.driver).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/top']);
  }

}
