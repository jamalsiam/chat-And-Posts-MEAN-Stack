import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sharePost',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.css']
})
export class SharePostComponent implements OnInit {
  textPost:string;
  photoPost:string;
  constructor() { }
  sharePost(){
    console.log('s')
  }
  ngOnInit() {
  }

}
