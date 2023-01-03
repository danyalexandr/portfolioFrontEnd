import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { Usuario } from 'src/app/model/usuario';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //miPortfolio: any;
  log:boolean;
  user:Usuario = new Usuario("","");
  persona:Persona = new Persona("","","","","");

  constructor(private router: Router, private auth: AuthorizationService) {}

  ngOnInit(): void {
    //this.auth.obtenerDatos().subscribe(data => {this.user = data});
    //console.log(this.user.username);
   
    //prueba api
      this.auth.obtenerPersona().subscribe((data) =>{
        this.persona = data; 
        console.log(this.persona);     
      });
      }

  
  public get isLogin(): any {
    
  return this.auth.isUserLogin();
  }

  public btnLogout(): void {
    this.auth.logout();
    this.router.navigate(["/home"]);
  }
}
