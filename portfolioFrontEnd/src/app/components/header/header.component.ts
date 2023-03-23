import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ContadorVisitasService } from 'src/app/services/contador-visitas-service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  visitas: number;
  persona:Persona[] = [];
  
  constructor(private router: Router, private auth: AuthorizationService, public images:ImagesService,
              private contadorVisitasService :ContadorVisitasService) {}

  ngOnInit(): void {

    this.contadorVisitasService.obtenerVisitas().subscribe(visitas => {
      this.visitas = visitas;
    });
  
       
    //prueba api
     this.cargarPersona();
      }

      cargarPersona():void{
        this.auth.obtenerPersona().subscribe(data => {this.persona = data});

        this.images.getImages();
      }
  
  public get isLogin():boolean {
  return this.auth.isAuthenticated;
  }

  public btnLogout(): void {
    this.auth.logout();
  }
}
