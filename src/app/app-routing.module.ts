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
import {DeleteComponent} from './pages/delete/delete.component';
import {LoginComponent} from './pages/login/login.component';
import {BaselayoutComponent} from './baselayout/baselayout.component';
import {SitelayoutComponent} from './sitelayout/sitelayout.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', component: LoginComponent},
  { path: '', component: AppComponent,
  children: [
    {
      path:'login',
      component: LoginComponent
    }
  ]},
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'add-score',
      component: AddScoreComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'add-driver',
      component: AddDriverComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'add-race',
      component: AddRaceComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'result/:id',
      component: ResultComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'contact',
      component: ContactComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
  children:[{
    path: 'home',
    component: HomeComponent
  }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'delete',
      component: DeleteComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'top',
      component: TopComponent
    }]
  },
  {path: '', component: SitelayoutComponent,
    children:[{
      path: 'result',
      component: ResultComponent
    }]
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
