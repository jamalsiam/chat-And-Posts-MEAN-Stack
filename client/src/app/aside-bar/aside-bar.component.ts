import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {
  changeSideBarStateVal: String = 'closed' ;
  constructor(public messageService: MessageService) {

   }
  sideBarStateChanger () {
    if ( this.changeSideBarStateVal === 'closed' ) {
      this.changeSideBarStateVal = 'opened';
    } else {
      this.changeSideBarStateVal = 'closed';
    }
  }
  ngOnInit() {
  }

}
