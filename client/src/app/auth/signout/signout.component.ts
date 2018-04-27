import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private router: Router, private service: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.signOut();
    this.router.navigate(['signin']);
    location.reload();
  }

}
