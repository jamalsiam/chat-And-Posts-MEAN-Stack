import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

import { DataService } from '../data.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./../signup/signup.component.css']
})
export class SigninComponent implements OnInit {
  formData: any;
  btnSignupDegree: string = '';
  msg: any;
  constructor(private service:DataService,private storage:LocalStorageService, private router:Router) { }

  signin(){
    this.msg={type:'hdn',data:'|'};

    this.btnSignupDegree='deg0';
    if(!this.formData.email || !this.formData.password)
    {
    this.msg={type:'err',data:'invaild form'};
    }else{
          this.btnSignupDegree='deg360';
          this.service.signIn(this.formData).subscribe(res=>{
            this.btnSignupDegree='deg0';
            if(res.status=='signin'){
             
              this.storage.set('chatUserId', res.id);
              this.router.navigate(['']);
              location.reload();
            }
            else{
              this.msg={type:'err', data:''+res.status}
            }
         })
         
    }
  }

  ngOnInit() {
    this.formData = {email:'', password:''};
    this.msg = {type:'hdn',data:'|'};
 
    if( this.storage.get('chatUserId') )
    this.router.navigate(['']);
  } 
}
