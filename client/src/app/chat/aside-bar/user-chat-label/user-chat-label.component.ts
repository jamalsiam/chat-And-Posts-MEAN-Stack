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
  online: boolean;
  currentUser: boolean;
  constructor(
    public messageService: ChatService,
    private service: DataService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
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
    this.record.notfy = 0;
    this.route.navigate(['messages/' + id]);
  }
  getNotfy() {
    this.messageService
      .getUserTitle({ user1: this.data, user2: this.service.user.id })
      .subscribe(res => {
        this.record = res;
        this.online = res.userInfo.status;
        if (res['notfy']) {
          this.messageService.totalNotfy['' + res['userInfo'].email] =
            res['notfy'];
        }
      });
  }
  ngOnInit() {
    this.getNotfy();
    this.messageService.checkUserOnline(this.data).subscribe(res => {
      this.online = res.status;
    });

    this.messageService
      .checkUserNotifyNumberMessage(this.data, this.service.user.id)
      .subscribe(res => {
        if (this.data !== this.route.url.split('/')[2]) {
          this.messageService.totalNotfy['' + res['emailSender']] =
            res['notifyLength'];

          this.record.notfy = res['notifyLength'];
        } else {
          this.messageService.totalNotfy['' + res['emailSender']] = 0;
          this.record.notfy = 0;
        }
      });
  }
}
