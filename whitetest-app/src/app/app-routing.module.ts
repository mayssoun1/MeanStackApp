import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import {RegisterComponent} from '../app/components/register/register.component';



const routes: Routes = [
  {path:'',
   component: HomeComponent
  },
  
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
