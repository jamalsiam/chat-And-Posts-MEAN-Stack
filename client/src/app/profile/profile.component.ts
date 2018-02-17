import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tapRouteVal:string="Posts";
  p:string='sq';
  constructor(public service:DataService) {
console.log(this.service.user)
    
   }
  routeTabs(a:string){
     this.tapRouteVal=a;
  }
  
  ngOnInit() {}

}
