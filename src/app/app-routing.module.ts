import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [

  {path:'', redirectTo:'/dashboard',pathMatch :'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'about',component:AboutComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'stats',component:StatsComponent},
  {path: 'register',component:RegisterComponent},
  {path:'footer',component:FooterComponent},
  {path:'**', component:NopagefoundComponent} // page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
