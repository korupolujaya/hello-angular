import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
  title = 'hello-angular';
  value='hii';
  constructor() { }
   showTodayDate() {
      let ndate = new Date();
      return ndate;
   }
}
