import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { interval } from "rxjs/observable/interval";
import { ChatService } from "../service/chat.service";
@Component({
  selector: "app-aside-bar",
  templateUrl: "./aside-bar.component.html",
  styleUrls: ["./aside-bar.component.css"]
})
export class AsideBarComponent implements OnInit {
  changeSideBarStateVal: String = "closed";
 
  constructor(
    public messageService: ChatService,
    private service: DataService
  ) {
   
  }
  sideBarStateChanger() {
    this.messageService.totalNotfy = [];
    if (this.changeSideBarStateVal === "closed") {
      this.changeSideBarStateVal = "opened";
    } else {
      this.changeSideBarStateVal = "closed";
    }
  }
  getSortUser() {
    this.messageService
      .getSortUser({ profile: this.service.user.id })
      .subscribe(res => {
        this.messageService.listOfAllUserInMessage = res["arrayUser"];

        this.messageService
          .addUserToListMessenger(this.service.user.id)
          .subscribe(resAUTLM => {
            console.log(resAUTLM);
            
            if ( this.messageService.listOfAllUserInMessage.indexOf(resAUTLM['senderId']) === -1) {
              this.messageService.listOfAllUserInMessage.push(resAUTLM['senderId']);
            }
          });
      });
  }
  NumbertotalNotfy(record) {
    if (this.changeSideBarStateVal === "closed") {
      return Object.values(record).reduce((a, b) => {
        return a + b;
      }, 0);
    } else {
      return 0;
    }
  }
  ngOnInit() {
    this.getSortUser();
  }
}
