import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cssCtr:string='haventId';
 
  constructor( private service:DataService, private s:LocalStorageService){
    if(this.s.get('chatUserId'))
    this.cssCtr='haveId';
  }
}
