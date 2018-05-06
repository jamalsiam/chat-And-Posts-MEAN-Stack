import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../../data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { interval } from "rxjs/observable/interval";
import { ChatService } from "../service/chat.service";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.css"]
})
export class ChatRoomComponent implements OnInit {
  photoMessage: string;
  textMessage: string;
  receiverId: string;
  oldMessages: any;
  userInfo: any = { image: "" };
  constructor(
    public service: DataService,
    public messageService: ChatService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.photoMessage = "";
    this.textMessage = "";
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
      this.textMessage = "";
      this.photoMessage = "";
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
      return "data:image/jpeg;base64," + image;
    } else {
      return "assets/profile.png";
    }
  }

  ngOnInit() {
    this.route.params.subscribe(query => {
      if (query.id !== "undefined") {
        this.messageService
          .deleteMessageFromQueue({
            profileId: this.service.user.id,
            userId: query.id
          })
          .subscribe(res => {});
        this.receiverId = query.id;
        this.messageService
          .gitMessages({
            profileId: this.service.user.id,
            userId: this.receiverId
          })
          .subscribe(res => {
            if (res["data"] !== "fail") {
              this.oldMessages = res["message"];
              this.userInfo = res["user"];
            } else {
              this.router.navigate(["/"]);
            }
          });
        this.messageService
          .receiveMessage(query.id, this.service.user.id)
          .subscribe(resNewMessage => {
            console.log(resNewMessage);
            this.oldMessages = this.oldMessages.concat(resNewMessage);
          });
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
  ngOnDestroy() {
    this.route.params.subscribe(query => {
      if (query.id !== "undefined") {
        this.messageService
          .deleteMessageFromQueue({
            profileId: this.service.user.id,
            userId: query.id
          })
          .subscribe(res => {});
      }
    });
  }
}
