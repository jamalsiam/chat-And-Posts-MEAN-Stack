import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'viewPost',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  @Input() data: any;
  constructor() { }
  
  viewProfile(userId:string){
    console.log(userId);
  }
  viewOriginPost(postId:string){
    console.log(postId);
  }
  sharePost(newPost){
    console.log(newPost);
  }
  ngOnInit() {
   
  }

}
