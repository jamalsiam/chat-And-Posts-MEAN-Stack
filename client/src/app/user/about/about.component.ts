import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'About',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  changeDateVal: String = '';
  changeWidthInterestInputVal: String = '';
  name: string;
  email: string;
  work: string;
  location: string;
  relationship: string;
  gender: string;
  birth: string;
  newInterest: string;

  constructor(public service: DataService) {

  }

  deleteInterest(index) {
    this.service.user.userInfo.interests.splice(index, 1);
    this.service.changeUserInterests({ _id: this.service.user.id, interests: this.service.user.userInfo.interests }).subscribe(res => {
      if (res.status === 'succses') {}
    });
  }

  addInterest() {

    if (this.newInterest) {
      if (this.service.user.userInfo.interests.indexOf(this.newInterest) === -1) {
        this.service.user.userInfo.interests.push(this.newInterest);
        this.newInterest = '';
        this.service.changeUserInterests({ _id: this.service.user.id, interests: this.service.user.userInfo.interests }).subscribe(res => {
          if (res.status === 'succses') {
            this.changeWidthInterestInputVal = '';
          }
        });
      } else {
        this.changeWidthInterestInputVal = 'err-color';
      }
    }
  }
  changeData() {
    this.name = this.service.user.userInfo.username;
    this.email = this.service.user.userInfo.email;
    this.work = this.service.user.userInfo.work;
    this.location = this.service.user.userInfo.location;
    this.relationship = this.service.user.userInfo.relationship;
    this.gender = this.service.user.userInfo.gender;
    this.birth = this.service.user.userInfo.birth;
    this.changeDateVal = 'changeMode';
  }
  saveChange() {
    if (this.name) {
      this.service.changeInfoUser({
        username: this.name,
        work: this.work,
        location: this.location,
        relationship: this.relationship,
        gender: this.gender,
        birth: this.birth,
        _id: this.service.user.id
      }).subscribe(res => {
        if (res.status === 'succses') {
          this.service.user.userInfo.username = this.name;
          this.service.user.userInfo.work = this.work;
          this.service.user.userInfo.location = this.location;
          this.service.user.userInfo.relationship = this.relationship;
          this.service.user.userInfo.gender = this.gender;
          this.service.user.userInfo.birth = this.birth;
          this.changeDateVal = '';
        }
      });

    }

  }
  changeWidthInterestInput() {
    this.changeWidthInterestInputVal = 'width100px';
  }
  ngOnInit() { }

}
