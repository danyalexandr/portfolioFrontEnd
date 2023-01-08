import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public email:string = 'test@email.com';
  public passwordLocal:string = '123456';
  
  constructor(private auth:AuthorizationService, private router:Router) {
   
  }
  

  ngOnInit(): void {
    this.auth.obtenerDatos();
  }

  public btnLogin():void{
      this.auth.loginSimple(this.email, this.passwordLocal);
  }

 }
