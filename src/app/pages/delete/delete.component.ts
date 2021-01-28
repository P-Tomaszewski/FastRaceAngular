import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteService} from '../../service/delete.service';
import {ResultDriver} from '../../spec/resultDriver';
import {DriverService} from '../../service/driver.service';
import {Driver} from '../../spec/driver';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  drivers: Driver[];
  resultDriver: ResultDriver;

  constructor(private deleteService: DeleteService,
              private driverService: DriverService,) {
    this.resultDriver = new ResultDriver();
  }

  ngOnInit(): void {
    this.driverService.findAll().subscribe(data => {
      this.drivers = data;
    });
  }

  onSubmit() {
    this.deleteService.deleteDriver(this.resultDriver).subscribe();
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
  }

}
