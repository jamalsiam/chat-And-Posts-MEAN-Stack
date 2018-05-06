import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { LocalStorageService } from "angular-2-local-storage";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cssCtr = "haventId";
  eventNotnotificationNumer = 0;
  constructor(private service: DataService, private s: LocalStorageService) {
    if (this.s.get("chatUserId")){
      this.cssCtr = "haveId";
      this.eventnotificationMethod();
    } 
  }

  eventnotificationMethod() {
    for (let i = 0; i <= 2; i++) {
      setTimeout(() => {
        this.eventNotnotificationNumer = i;
      }, i * 5000);
    }
  }
  closeNotification() {
    this.eventNotnotificationNumer = 0;
  }
}
