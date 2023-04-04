import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  
  constructor(private router: Router, private auth: AuthorizationService, public imagesService:ImagesService) {}
  
  persona:Persona[] = [];
  imagenes:any[] = [];
   
  ngOnInit(): void {
  
  this.cargarPersona();

  }   

  cargarImagen(event:any){
  let archivos = event.target.files
  let reader = new FileReader();
  let nombre:string = "persona";
            
  reader.readAsDataURL(archivos[0]);
  reader.onloadend = () => {
  this.imagenes.push(reader.result);
  this.imagesService.subirImagen(nombre + "_" + Date.now(), reader.result)
  .then(urlImage => {console.log(urlImage);
  this.imagesService.url = urlImage;
  });                       
  }
 }

  //a la base de datos?
  cargarPersona():void{
  this.auth.obtenerPersona().subscribe(data => {this.persona = data});
  this.imagesService.getImages();
  }
  
  public get isLogin():boolean {
  return this.auth.isAuthenticated();
  }

  public btnLogout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
