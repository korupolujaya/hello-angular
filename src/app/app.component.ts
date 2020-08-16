import { Component } from '@angular/core';
import { LogServiceService } from './log-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
   todaydate;
   constructor(private logservice: LogServiceService) {}
   ngOnInit() {
      this.todaydate = this.logservice.showTodayDate();
      this.logservice.value = "Chinna";
   }
}

 
