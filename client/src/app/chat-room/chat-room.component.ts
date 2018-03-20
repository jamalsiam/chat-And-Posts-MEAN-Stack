import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/rx';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  photoMessage: string;
  textMessage: string;
  receiverId: string;
  oldMessages: any;
  userInfo: any = { image: '' };
  constructor(public service: DataService, public messageService: MessageService, private route: ActivatedRoute, private router: Router) {
    this.photoMessage = '';
    this.textMessage = '';
    this.route.params.subscribe(query => {
      if (query.id !== 'undefined') {
        this.receiverId = query.id;
        this.messageService.gitMessages({ profileId: this.service.user.id, userId: this.receiverId }).subscribe(res => {
          console.log(res);
          if (res.data !== 'fail') {
            this.oldMessages = res.message;
            this.userInfo = res.user;
          } else {
            this.router.navigate(['/']);
          }
        });
      } else {
        this.router.navigate(['/']);
      }

    });
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
        this.textMessage = '';
        this.photoMessage = '';
      });
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
  getMessageFromQueue() {
    if (this.userInfo._id && this.service.user.id) {
      this.messageService.getMessageFromQueue({ userId: this.userInfo._id, profileId: this.service.user.id }).subscribe(res => {
        if (res.messageInQueue.length !== 0) {
          console.log(res.messageInQueue);
          this.oldMessages = this.oldMessages.concat(   res.messageInQueue);
        }
      });

    }
  }
  ngOnInit() {
    interval(1000).subscribe(x => {
      this.getMessageFromQueue();

    });
  }


}
