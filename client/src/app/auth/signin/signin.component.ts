import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

import { DataService } from '../../data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./../signup/signup.component.css', './signin.component.css']
})
export class SigninComponent implements OnInit {
  btnSignupDegree = '';
  msg: any;
  constructor(private authService: AuthService, private storage: LocalStorageService, private router: Router) { }

  signin(form: NgForm) {
    this.msg = { type: 'hdn', data: '|' };
    this.btnSignupDegree = 'deg0';

    if (form.valid) {

      this.btnSignupDegree = 'deg360';
      this.authService.signIn(form.value).subscribe(res => {
        this.btnSignupDegree = 'deg0';
        if (res['status'] === 'signin') {
          console.log(res);
          this.storage.set('chatUserId', res['id']);
          this.storage.set('token', res['token']);
          this.router.navigate(['']);
          location.reload();
        } else {
          this.msg = { type: 'err', data: '' + res['status'] };
        }
      });
    }

  }

  ngOnInit() {

    this.msg = { type: 'hdn', data: '|' };
    if (this.storage.get('chatUserId')) {
      this.router.navigate(['']);
    }
  }
}
