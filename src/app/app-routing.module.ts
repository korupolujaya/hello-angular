import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LogServiceService } from './log-service.service';
import { TeamMembersComponent } from './navbar/Dropdown/team-members/team-members.component';

const routes: Routes = [
  { path:'', redirectTo:'/team-members' , pathMatch:'full' },
  { path:' team-members ', component:TeamMembersComponent }
] 

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LogServiceService]
  
})
export class AppRoutingModule { }
