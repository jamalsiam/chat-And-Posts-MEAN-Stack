import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res.id);
    });
  }

}
