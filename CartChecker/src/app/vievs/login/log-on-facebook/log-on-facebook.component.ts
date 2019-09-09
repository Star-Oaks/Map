import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, AuthService, } from "angular-6-social-login";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpService } from 'src/app/shared/services/http.service';
import { EmailReg } from 'src/app/shared/models/emailReg';
import { CookieService } from 'ngx-cookie-service';
import { ResponseModel } from 'src/app/shared/models/responseModel';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-on-facebook',
  templateUrl: './log-on-facebook.component.html',
  styleUrls: ['./log-on-facebook.component.scss']
})
export class LogOnFacebookComponent implements OnInit {

  //forms
  public userForm: FormGroup;

  //errors
  public userAlreadyCrtd: boolean = false;
  public singIn: boolean = false;

  //regx
  private emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  private passRegex: RegExp = /^(?=.*[a-z])[a-zA-Z\d@$!%*#?&"', \.\^\(\)\`\:\;\-\=\+]{8,}$/;
  constructor(
    private socialAuthService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private Http: HttpService
  ) { }
  public facebookLogin() {
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData)

      }
    );

  }

  ngOnInit() {
   
    this.userForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.pattern(this.emailRegex)]),
      password: this.fb.control("", [Validators.required, Validators.pattern(this.passRegex)]),
    })
  }
  validationForm(){
    if(this.userForm.markAsTouched && this.userForm.valid ){
      console.log(this.userForm)
      this.Http.register(this.userForm.value as EmailReg).subscribe(res=>{
        let cokiesItem = res as ResponseModel
       this.authenticationService.setToken(cokiesItem.result.token)
       this.router.navigate(['/edit-profile']);
      },
      err=>{
        // if(err.error.code == 422){
          this.userAlreadyCrtd = true;
        // }
        
      })
    }
  }
  switchForm(){
    this.singIn = !this.singIn;
  }

  singInFunction(){
    if(this.userForm.markAsTouched && this.userForm.valid ){
      console.log(this.userForm)
      this.Http.singIn(this.userForm.value as EmailReg).subscribe(res=>{
        let cokiesItem = res as ResponseModel
        this.authenticationService.setToken(cokiesItem.result.token)
        this.router.navigate(['/edit-profile']);
      },
      err=>{
        console.log(err)
        // if(err.error.code == 422){
          this.userAlreadyCrtd = true;
        // }
        
      })
    }
  }

}
