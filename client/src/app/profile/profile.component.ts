import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tapRouteVal: String = 'Posts';
  photoPost: string;
  constructor(public service: DataService) { }

  routeTabs(a: string) {
    this.tapRouteVal = a;
  }
  /*Change image profile*/
  handleFileSelectImage(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedImage.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedImage(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.service.user.userInfo['image'] = btoa(binaryString);
    this.service.changeProfileImage({ image: btoa(binaryString), _id: this.service.user.id }).subscribe(res => {
      this.service.user.userInfo['image'] = btoa(binaryString);
    });
  }
  /*END Change image profile*/

  /*Change cover profile*/
  handleFileSelectCover(evt) {
    const files = evt.target.files;
    const file = files[0];
    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedCover.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedCover(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.service.user.userInfo['cover'] = btoa(binaryString);
    this.service.changeProfileCover({ cover: btoa(binaryString), _id: this.service.user.id }).subscribe(res => {
      this.service.user.userInfo['cover'] = btoa(binaryString);
    });

  }
  /*END Change cover profile*/

  ngOnInit() {

  }

}
