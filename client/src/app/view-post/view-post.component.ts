import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'viewPost',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
