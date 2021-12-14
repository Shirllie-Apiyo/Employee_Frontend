import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [

  {path:'', redirectTo:'/dashboard',pathMatch :'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'about',component:AboutComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'**', component:NopagefoundComponent} // page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
