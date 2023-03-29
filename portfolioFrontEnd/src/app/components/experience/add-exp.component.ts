import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaSE } from 'src/app/services/experienciaSE.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {

  imagenes:any[] = [];
  puesto:string = '';
  empresa:string = '';
  fechaInicio:string = '';
  fechaFin:string = '';
  lugar:string = '';
  img:string = '';

  constructor(private experienciaService:ExperienciaSE, private router: Router, public imagesService:ImagesService) { }

  ngOnInit(): void {
  }

  cargarImagen(event:any){
    const nombre = 'experiencia_';
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
  const exp = new Experiencia(this.puesto, this.empresa, this.fechaInicio, this.fechaFin, this.lugar, this.img);
  this.experienciaService.save(exp).subscribe(data => {alert( data + "experiencia añadida OK");
   });
   this.router.navigate(["/"]);
  }
}
