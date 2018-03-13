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
  {notfy: 23, name: 'jamal siam'},
  {notfy: 23022, name: 'wef wefWEFG'},
  {notfy: 253, name: 'ewarg ergearg'},
  {notfy: 0, name: 'wefwef wegf h '},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 12, name: 'aregaergareg'},
  {notfy: 14, name: 'aergaerg aergaerg'},
  {notfy: 66, name: 'rrrrrrrrrrrrrr ragarg'}
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
