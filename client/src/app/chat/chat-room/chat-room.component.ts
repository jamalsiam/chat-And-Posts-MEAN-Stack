import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs/observable/interval';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  photoMessage: string;
  textMessage: string;
  receiverId: string;
  online: any;
  oldMessages: any;
  userInfo: any = { image: '' };
  constructor(
    public service: DataService,
    public messageService: ChatService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.photoMessage = '';
    this.textMessage = '';
  }
  sendMessage() {
    const record = {
      senderId: this.service.user.id,
      receiverId: this.receiverId,
      messageContent: {
        text: this.textMessage,
        image: this.photoMessage
      }
    };
    if (this.textMessage || this.photoMessage) {
      this.messageService.sendMessage(record).subscribe(res => {
        this.oldMessages.push(record);
        this.messageService.sendNotifyMessage(
          this.service.user.id,
          this.receiverId,
          this.service.user.userInfo.email,
          record
        );
      });
      this.textMessage = '';
      this.photoMessage = '';
    }
    if (
      this.messageService.listOfAllUserInMessage.indexOf(this.receiverId) === -1
    ) {
      this.messageService.listOfAllUserInMessage.push(this.receiverId);
    }
  }
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.photoMessage = btoa(binaryString);
  }
  getImage(image) {
    if (image) {
      return 'data:image/jpeg;base64,' + image;
    } else {
      return 'assets/profile.png';
    }
  }

  call(video, toId) {
    this.messageService.videoCallSection = true;
    this.messageService.isSender = true;
    console.log(this.service.user);
    this.messageService.recordCaller = {
      from: {
        image: this.service.user.userInfo.image,
        id: this.service.user.id,
        name: this.service.user.userInfo.username,
        audio: true,
        key: {},
        video
      }, toId };
    this.router.navigate(['/call/1']);
  }
  ngOnInit() {
    this.route.params.subscribe(query => {
      if (query.id !== 'undefined') {
        this.messageService.checkUserOnline(query.id).subscribe(res => {
          this.online = res.status;
        });
        this.messageService
          .deleteMessageFromQueue({
            profileId: this.service.user.id,
            userId: query.id
          })
          .subscribe(res => { });
        this.receiverId = query.id;
        this.messageService
          .gitMessages({
            profileId: this.service.user.id,
            userId: this.receiverId
          })
          .subscribe(res => {
            if (res['data'] !== 'fail') {
              this.oldMessages = res['message'];
              this.userInfo = res['user'];
              this.online = this.userInfo.status;
            } else {
              this.router.navigate(['/']);
            }
          });
        this.messageService
          .receiveMessage(query.id, this.service.user.id)
          .subscribe(resNewMessage => {
            console.log(resNewMessage);
            this.oldMessages = this.oldMessages.concat(resNewMessage);
          });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnDestroy() {
    this.route.params.subscribe(query => {
      if (query.id !== 'undefined') {
        this.messageService
          .deleteMessageFromQueue({
            profileId: this.service.user.id,
            userId: query.id
          })
          .subscribe(res => { });
      }
    });
  }
}
