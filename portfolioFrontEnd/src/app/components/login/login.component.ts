import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public email:string;
  public password:string;
  public errorMessage: string;
  
  constructor(private auth:AuthorizationService, private router:Router) {
   
  }
  
  ngOnInit(): void {
  }
  
  btnLogin(){
    this.auth.login(this.email, this.password)
    .subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      error=> {
        console.error(error);
        this.errorMessage = 'Credenciales incorrectas, Intente de nuevo.';
      }
    );
    //this.auth.obtenerDatos().subscribe(data => {this.user = data});;
  }

 }
