import { Component, OnInit } from '@angular/core';
import {Driver} from '../../spec/driver';
import {DriverService} from '../../service/driver.service';
import {Result} from '../../spec/result';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultService} from '../../service/result.service';
import {ResultDriver} from '../../spec/resultDriver';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  drivers: Driver[];
  result: Result[];
  resultDriver: ResultDriver;
  constructor(private driverService: DriverService,
              private resultService: ResultService,
              private route: ActivatedRoute,
              private router: Router,

  ) {
    this.resultDriver = new ResultDriver();
  }

  ngOnInit() {
    this.driverService.findAll().subscribe(data => {
      this.drivers = data;
    });
  }

  onSubmit() {
    this.resultService.getResults(this.resultDriver).subscribe();
  }

}
