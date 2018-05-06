import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  query: string;
  constructor(public service:DataService,private storage:LocalStorageService, private router:Router) {}
  
   search(query){ 
    this.query=query;
    console.log(query)
   }

  ngOnInit() {
    
  }

}
