import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-original-post',
  templateUrl: './original-post.component.html',
  styleUrls: ['./original-post.component.css']
})
export class OriginalPostComponent implements OnInit {

  constructor(public service: DataService) { }

  ngOnInit() {
  }

}
