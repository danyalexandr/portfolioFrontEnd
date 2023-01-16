import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  persona:Persona[] = [];
  
  constructor(private router: Router, private auth: AuthorizationService, public images:ImagesService) {}

  ngOnInit(): void {
       
    //prueba api
     this.cargarPersona();
      }

      cargarPersona():void{
        this.auth.obtenerPersona().subscribe(data => {this.persona = data});

        this.images.getImages();
      }
  
  public get isLogin():boolean {
  return this.auth.isUserLogin();
  }

  public btnLogout(): void {
    this.auth.logout();
  }
}
