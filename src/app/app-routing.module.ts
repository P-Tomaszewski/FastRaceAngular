import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddScoreComponent} from './pages/add-score/add-score.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AddDriverComponent} from './pages/add-driver/add-driver.component';
import {AddRaceComponent} from './pages/add-race/add-race.component';
import {ContactComponent} from './pages/contact/contact.component';
import {HomeComponent} from './pages/home/home.component';
import {ResultComponent} from './pages/result/result.component';
import {TopComponent} from './pages/top/top.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'add-score', component: AddScoreComponent},
  {path: 'add-driver', component: AddDriverComponent},
  {path: 'add-race', component: AddRaceComponent},
  {path: 'result/:id', component: ResultComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'result', component: ResultComponent},
  {path: 'top', component: TopComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
