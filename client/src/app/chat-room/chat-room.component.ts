import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(public service: DataService, public messageService: MessageService, private route: ActivatedRoute, private router: Router) {
    this.photoMessage = '';
    this.textMessage = '';
    this.route.params.subscribe(query => {
      if (query.id) {
        this.receiverId = query.id;
        this.messageService.gitMessages({profileId: this.service.user.id, userId: this.receiverId}).subscribe(res => {

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
         /*
          push message to old message array
        */
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
  ngOnInit() {
  }

}
