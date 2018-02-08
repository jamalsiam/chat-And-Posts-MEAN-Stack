import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'sharePost',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.css']
})
export class SharePostComponent implements OnInit {
  textPost:string;
  photoPost:string;
  constructor( private service:DataService) { }
  sharePost(){
    this.service.sharePost({_id:this.service.user.id,
       postContent:{
         text:this.textPost,
         image:this.photoPost}})
    .subscribe(res =>{
      this.service.user['post'].push({text: this.textPost,
                                      image: this.photoPost});
                                      
      console.log(this.service.user);
      this.textPost='';
      this.photoPost='';

    })
  }
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.photoPost = btoa(binaryString);
  
  }
  ngOnInit() {
  }

}
