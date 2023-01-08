import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user:Usuario[] = [];
  public email:string;
  public passwordLocal:string;
  
  constructor(private auth:AuthorizationService, private router:Router) {
   
  }
  
  ngOnInit(): void {
  }
  
  public btnLogin():void{
    this.auth.loginSimple(this.email, this.passwordLocal);
    //this.auth.obtenerDatos().subscribe(data => {this.user = data});;
  }

 }
