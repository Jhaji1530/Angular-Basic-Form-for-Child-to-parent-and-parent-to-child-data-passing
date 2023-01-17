import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component'; 
import { LoginComponent } from './login/login.component'; 
import { AboutComponent } from './about/about.component';
const routes: Routes = [
 {
  component:LoginComponent,
  path:'Login'
 },
 {
  component:SignupComponent,
  path:'SignUp'
 },
 {
  component:AboutComponent,
  path:''
 }

];

@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
