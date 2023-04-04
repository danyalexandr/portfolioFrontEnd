import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  public email:string = '';
  public password:string = '';
  public usuario:Usuario[];
  
  
  constructor(private authService:AuthorizationService, private router:Router) {
   
  }
  
  ngOnInit(): void {
  }
  
//test de login
 onSubmit() {
  this.authService.login(this.email, this.password).subscribe(
    response => {
      console.log('Inicio de sesión exitoso:', response);
      this.router.navigate(['/home']);
    },
    error => {
      console.error('Error al iniciar sesión:', error);
    }
  );
}

onLogout() {
  this.authService.logout();
  console.log('Sesión cerrada');
}

isAuthenticated(): boolean {
  this.router.navigate(['/']);
  return this.authService.isAuthenticated();
}
 
}
