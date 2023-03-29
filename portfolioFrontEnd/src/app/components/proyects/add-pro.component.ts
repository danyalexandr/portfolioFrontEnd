import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagesService } from 'src/app/services/images.service';
import { ProyectoSE } from 'src/app/services/proyectoSE.service';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  imagenes:any[] = [];
  nombre:string = '';
  descripcion:string = '';
  img:string = '';

  constructor(private router:Router, private proyectosService: ProyectoSE, private imagesService:ImagesService) { }

  ngOnInit(): void {
  }

  cargarImagen(event:any){
    const nombre = 'proyctos_';
    let archivos = event.target.files
    let reader = new FileReader();
    
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagenes.push(reader.result);
      this.imagesService.subirImagen(nombre + "_" + Date.now(), reader.result)
      .then(urlImage => {console.log(urlImage);
        this.img = urlImage;
      });                       
    }
  }

  onClick():void{
    const pro = new Proyectos(this.nombre, this.descripcion, this.img);
    this.proyectosService.save(pro).subscribe(data => {alert(data + "experiencia añadida OK");
     });
     this.router.navigate(["/"]);
    }
}
