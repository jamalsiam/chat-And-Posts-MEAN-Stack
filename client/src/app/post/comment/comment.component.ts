import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() data: any;
  constructor(public servece: DataService) { }
  ngOnInit() {
  }

}
