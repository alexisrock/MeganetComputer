import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [

    LoginComponent,
  ],
  imports: [
    CommonModule,
   AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
  ]
})
export class AuthModule { }
