import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './user-chat-label.component.html',
  styleUrls: ['./user-chat-label.component.css']
})
export class UserChatLabelComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
