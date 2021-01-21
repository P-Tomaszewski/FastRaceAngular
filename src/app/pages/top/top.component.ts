import { Component, OnInit } from '@angular/core';
import {Driver} from '../../spec/driver';
import {DriverService} from '../../service/driver.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  drivers: Driver[];

  constructor(private driverService: DriverService) {
  }

  ngOnInit() {
    // this.driverService.findAll().subscribe(data => {
    //   this.drivers = data;
    // });
  }

}
