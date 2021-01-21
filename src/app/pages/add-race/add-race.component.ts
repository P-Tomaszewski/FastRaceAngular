import { Component, OnInit } from '@angular/core';
import {Race} from '../../spec/race';
import {ActivatedRoute, Router} from '@angular/router';
import {RaceService} from '../../service/race.service';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent  {

  race: Race

  constructor(private route: ActivatedRoute,
              private router: Router,
              private raceService: RaceService) {
    this.race = new Race();
  }

  onSubmit() {
    this.raceService.save(this.race).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/top']);
  }

}
