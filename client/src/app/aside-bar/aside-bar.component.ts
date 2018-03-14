import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {
  changeSideBarStateVal: String = 'closed';
  xs: any;
  constructor(public messageService: MessageService) {
this.xs = [
  {notfy: 23, name: 'jamal siam'}
];
  }
  sideBarStateChanger() {
    if (this.changeSideBarStateVal === 'closed') {
      this.changeSideBarStateVal = 'opened';
    } else {
      this.changeSideBarStateVal = 'closed';
    }
  }
  ngOnInit() {
  }

}
