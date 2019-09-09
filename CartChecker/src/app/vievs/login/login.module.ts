import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogOnFacebookComponent } from './log-on-facebook/log-on-facebook.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [LogOnFacebookComponent, EditComponent]
})
export class LoginModule { }
