import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  miPortfolio: any;
  persona:Persona = new Persona("","","","","");

  constructor(private router: Router, private auth: AuthorizationService) {}

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe((data) => {
      this.miPortfolio = data;
    });

    //prueba api
      this.auth.obtenerPersona().subscribe((data) =>{
        this.persona = data;      
      });
      }

  
  //this.btnClick.emit(this.displayMe);

  public get isLogin(): boolean {
    return this.auth.isUserLogin();
  }

  public btnLogout(): void {
    this.auth.logout();
  }
}
