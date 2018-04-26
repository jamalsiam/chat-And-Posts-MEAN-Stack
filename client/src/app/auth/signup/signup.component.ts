import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DataService } from '../../data.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData: any;
  btnSignupDegree: String = '';
  msg: any;
  constructor(private service: DataService, private storage: LocalStorageService, private router: Router) { }
  signupGuest() {
    this.btnSignupDegree = 'deg90';
    this.service.signUpAsGuest().subscribe(res => {
      if (res.status === 'signup') {
        this.storage.set('chatUserId', res.id);
        this.router.navigate(['guest']);
        location.reload();
      } else if (res.status === 'recall') {
        this.signupGuest();
      }

    });
  }

  signup() {
    this.msg = { type: 'hdn', data: '|' };

    this.btnSignupDegree = 'deg0';
    if (!this.formData.username || !this.formData.email || !this.formData.password || !this.formData.confirmPassword) {
      this.msg = { type: 'err', data: 'invaild form' };
    } else {
      if (this.formData.password !== this.formData.confirmPassword) {
        this.msg = { type: 'err', data: 'password does\'nt match ' };
      } else {
        this.btnSignupDegree = 'deg360';
        this.service.signUp(this.formData).subscribe(res => {
          this.btnSignupDegree = 'deg0';
          if (res.status === 'signup') {

            this.storage.set('chatUserId', res.id);
            this.router.navigate(['']);
            location.reload();
          } else {
            this.msg = { type: 'err', data: '' + res.status };
          }
        });
      }
    }
  }

  ngOnInit() {
    this.formData = { username: '', email: '', password: '', confirmPassword: '' };
    this.msg = { type: 'hdn', data: '|' };

    if (this.storage.get('chatUserId')) {
      this.router.navigate(['']);
    }
  }
}
