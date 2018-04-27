import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'chat',
  templateUrl: './user-chat-label.component.html',
  styleUrls: ['./user-chat-label.component.css']
})
export class UserChatLabelComponent implements OnInit {
  @Input() data: any;
  record: any;
  constructor(public messageService: ChatService, private service: DataService, private route: Router) {
    this.record = { userInfo: { image: null, username: 'User' }, notfy: 0 };
  }



  getImage(image) {
    if (image) {
      return 'data:image/jpeg;base64,' + image;

    } else {
      return 'assets/profile.png';
    }
  }
  routeTo(id) {
    this.route.navigate(['messages/' + id]);
  }
  getNotfy() {
    this.messageService.getUserTitle({ user1: this.data, user2: this.service.user.id }).subscribe(res => {
      this.record = res;
      if (res['notfy']) {
        this.messageService.totalNotfy['' + res['userInfo'].email] = res['notfy'];
      }
      this.getNotfy();
    });
  }
  ngOnInit() {
    this.getNotfy();
  }

}
