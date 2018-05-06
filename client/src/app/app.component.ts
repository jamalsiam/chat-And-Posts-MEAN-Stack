import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { LocalStorageService } from "angular-2-local-storage";
import { Router } from "@angular/router";
import { AuthService } from "./auth/auth-service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  eventNotnotificationNumer = 0;
  constructor(
    private service: DataService,
    public storage: LocalStorageService,
    private route: Router,
    private auth: AuthService
  ) {
    this.route.events.subscribe(val => {
      if (this.storage.get("chatUserId") && this.storage.get("token")) {
        this.service
          .checkToken({
            id: this.storage.get("chatUserId"),
            token: this.storage.get("token")
          })
          .subscribe(res => {
            if (!res) {
              this.auth.signOut();
            }
          });
      }
    });
    if (this.storage.get("chatUserId")) {
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
