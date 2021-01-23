import { Component, OnInit } from '@angular/core';
import {Driver} from '../../spec/driver';
import {DriverService} from '../../service/driver.service';
import {Race} from '../../spec/race';
import {RaceService} from '../../service/race.service';
import {Score} from '../../spec/score';
import {ActivatedRoute, Router} from '@angular/router';
import {ScoreService} from '../../service/score.service';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent implements OnInit {
  drivers: Driver[];
  races: Race[];
  score: Score;
  constructor(private driverService: DriverService,
              private  raceService: RaceService,
              private  scoreService: ScoreService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
    this.score = new Score();
  }

  ngOnInit() {
    this.driverService.findAll().subscribe(data => {
      this.drivers = data;
    });
    this.raceService.findAll().subscribe(data => {
      this.races = data;
    });
  }

  onSubmit() {
    this.scoreService.save(this.score).subscribe();
    this.refresh();
  }

  // gotoUserList() {
  //   this.router.navigate(['/add-score']);
  // }

  refresh(): void {
    window.location.reload();
  }
}
