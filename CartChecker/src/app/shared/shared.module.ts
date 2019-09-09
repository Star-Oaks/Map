import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthenticationService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    HttpService,
    LocalStorageService,
    AuthenticationService
  ]
})
export class SharedModule { }
