import { Component, OnInit } from '@angular/core';
import {Driver} from '../../spec/driver';
import {DriverService} from '../../service/driver.service';
import {Top} from '../../spec/top';
import {TopService} from '../../service/top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  top: Top[];

  constructor(private topService: TopService) {
  }

  ngOnInit() {
    this.topService.getScoreReadModels().subscribe(data => {
      this.top = data;
    });
  }
}
