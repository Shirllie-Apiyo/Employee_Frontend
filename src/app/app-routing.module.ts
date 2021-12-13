import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  {path:'', redirectTo:'/dashboard',pathMatch :'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'**', component:NopagefoundComponent} // page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
