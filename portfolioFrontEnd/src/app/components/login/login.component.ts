import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public email:string;
  public passwordLocal:string;
  
  constructor(private formBuilder:FormBuilder, private auth:AuthorizationService) {
    this.email = "";
    this.passwordLocal = ""; 
      
  
  }
  

  ngOnInit(): void {
    this.auth.obtenerDatos();
  }

  public btnLogin():void{
      this.auth.loginSimple(this.email, this.passwordLocal);
  }

 }
