import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tapRouteVal: String = 'Posts';
  p: String = 'sq';
  constructor(public service: DataService) {  }

  routeTabs(a: string) {
    this.tapRouteVal = a;
  }

  ngOnInit() {
    console.log(this.service.user, 'from base');
   }

}
