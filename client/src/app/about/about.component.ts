import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'About',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  changeDateVal: String = '';
  name: string;
  email: string;
  work: string;
  location: string;
  relationship: string;
  gender: string;
  birth: string;
  newInterest: string;
  interests = [];
  constructor() {
    this.interests = ['facebook', 'linkedin', 'rettweer', 'rettweer', 'rettweer', 'rettweer', 'rettweer', 'rettweer'];
  }

  deleteInterest(index) {
    this.interests.splice(index, 1);
  }

  addInterest() {
     
    if (this.newInterest) {
      this.interests.push(this.newInterest);
      this.newInterest = '';
    }
  }
  changeDate() {
    this.changeDateVal = 'changeMode';
  }
  saveChange() {
    this.changeDateVal = '';
  }
  ngOnInit() {
  }
}
