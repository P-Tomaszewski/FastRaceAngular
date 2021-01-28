import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AddDriverComponent } from './pages/add-driver/add-driver.component';
import { AddRaceComponent } from './pages/add-race/add-race.component';
import { AddScoreComponent } from './pages/add-score/add-score.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResultComponent } from './pages/result/result.component';
import { TopComponent } from './pages/top/top.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {DriverService} from './service/driver.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './pages/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AddDriverComponent,
    AddRaceComponent,
    AddScoreComponent,
    ContactComponent,
    ResultComponent,
    TopComponent,
    PageNotFoundComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    FormsModule
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
