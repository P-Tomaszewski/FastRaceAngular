import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddDriverDataInputComponent } from './add-driver-data-input/add-driver-data-input.component';
import { HomeComponent } from './pages/home/home.component';
import { AddDriverComponent } from './pages/add-driver/add-driver.component';
import { AddRaceComponent } from './pages/add-race/add-race.component';
import { AddScoreComponent } from './pages/add-score/add-score.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResultComponent } from './pages/result/result.component';
import { TopComponent } from './pages/top/top.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddDriverDataInputComponent,
    HomeComponent,
    AddDriverComponent,
    AddRaceComponent,
    AddScoreComponent,
    ContactComponent,
    ResultComponent,
    TopComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
