import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'About',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  changeDateVal: String = '';
  constructor() { }

  ngOnInit() {
  }
  changeDate() {
    this.changeDateVal = 'changeMode';
  }
  saveChange(){
    this.changeDateVal = '';
  }
}
