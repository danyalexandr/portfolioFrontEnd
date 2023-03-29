import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionSE } from 'src/app/services/educacionSE.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {

  imagenes:any[] = [];
  institucion:string;
  carrera:string;
  fechaInicio:string;
  fechaFin:string;
  img:string;

  constructor(private educacionService: EducacionSE, private router:Router, public imagesService:ImagesService) { }

  ngOnInit(): void {

  }

  cargarImagen(event:any){
    const nombre = 'educacion_';
    let archivos = event.target.files
    let reader = new FileReader();
    
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagenes.push(reader.result);
      this.imagesService.subirImagen(nombre + "_" + Date.now(), reader.result)
      .then(urlImage => {console.log(urlImage);
        this.img = urlImage;
        console.log('this.imagesService.url' + ' ' + this.img);
      });                       
    }
  }

  onClick():void{
    const exp = new Educacion(this.institucion, this.carrera, this.fechaInicio, this.fechaFin, this.img);
    this.educacionService.save(exp).subscribe(data => {alert(data + "educacion añadida OK");
     });
     this.router.navigate(["/"]);
    }

    

}
