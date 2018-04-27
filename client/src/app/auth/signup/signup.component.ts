import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
import { DataService } from '../../data.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  btnSignupDegree: String = '';
  msg: any;
  constructor(private authService:AuthService,
     private service: DataService, private storage: LocalStorageService, private router: Router) { }

  signup(form: NgForm) {
    this.msg = { type: 'hdn', data: '|' };
    this.btnSignupDegree = 'deg0';
    if (form.valid && form.value.password === form.value.confirmPassword) {
      this.btnSignupDegree = 'deg360';
      this.authService.signUp(form.value).subscribe(res => {
        this.btnSignupDegree = 'deg0';
        if (res['status'] === 'signup') {
          this.storage.set('chatUserId', res['id']);
          this.router.navigate(['']);
          location.reload();
        } else {
          this.msg = { type: 'err', data: '' + res['status'] };
        }
      });
    } else {
      //this.msg = { type: 'err', data: '' + 'Invalid Form' };
    }
  }

  signupGuest() {
    this.btnSignupDegree = 'deg90';
    this.authService.signUpAsGuest().subscribe(res => {
      if (res['status'] === 'signup') {
        this.storage.set('chatUserId', res['id']);
        this.router.navigate(['guest']);
        location.reload();
      } else if (res['status'] === 'recall') {
        this.signupGuest();
      }

    });
  }

  ngOnInit() {
    this.msg = { type: 'hdn', data: '|' };
    if (this.storage.get('chatUserId')) {
      this.router.navigate(['']);
    }
  }
}
