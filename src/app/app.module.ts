import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { TeamMembersComponent } from './navbar/Dropdown/team-members/team-members.component';

import { LogServiceService } from './log-service.service';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    // DropdownComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
   providers: [LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
