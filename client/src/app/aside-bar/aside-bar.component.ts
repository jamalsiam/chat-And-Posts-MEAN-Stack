import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {
  changeSideBarStateVal: String = 'closed';
  xs: any;
  constructor(public messageService: MessageService, private service: DataService) {
    this.xs = [];

  }
  sideBarStateChanger() {
    if (this.changeSideBarStateVal === 'closed') {
      this.changeSideBarStateVal = 'opened';
    } else {
      this.changeSideBarStateVal = 'closed';
    }
  }
  ngOnInit() {
    this.messageService.getSortUser({ profile: this.service.user.id }).subscribe(res => {
      this.xs = res.arrayUser;
    });
  }

}
