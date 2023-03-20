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
  public usuario:Usuario[];
  
  
  constructor(private auth:AuthorizationService, private router:Router) {
   
  }
  
  ngOnInit(): void {

    this.auth.obtenerDatos().subscribe(usuario => {
      this.auth.setDatos(usuario);
    });
  }
  
  btnLogin() {
    this.usuario = this.auth.getDatosFromMemory();
  
    const usuario = this.usuario.find(u => u.username === this.email && u.password === this.password); 
  
    if(usuario){
      this.auth.isAuthenticated = true;
      this.router.navigate(['/home']); // Redireccionar a la página de inicio
    } else {
      alert("Error, por favor intente nuevamente");
    }

 }
 
}
