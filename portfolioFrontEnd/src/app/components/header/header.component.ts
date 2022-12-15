import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //miPortfolio: any;
  persona:Persona = new Persona("","","","","");

  constructor(private router: Router, private auth: AuthorizationService) {}

  ngOnInit(): void {
   
    //prueba api
      this.auth.obtenerPersona().subscribe((data) =>{
        this.persona = data;      
      });
      }

  
  public get isLogin(): boolean {
    return this.auth.isUserLogin();
  }

  public btnLogout(): void {
    this.auth.logout();
    this.router.navigate(["/home"]);
  }
}
