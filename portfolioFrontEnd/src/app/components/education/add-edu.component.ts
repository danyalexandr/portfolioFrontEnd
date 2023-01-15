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

  institucion:string;
  carrera:string;
  fechaInicio:string;
  fechaFin:string;
  img:string;

  constructor(private eduSer: EducacionSE, private router:Router, public images:ImagesService) { }

  ngOnInit(): void {
  }

  onClick():void{
    const exp = new Educacion(this.institucion, this.carrera, this.fechaInicio, this.fechaFin, this.img);
    this.eduSer.save(exp).subscribe(data => {alert("experiencia añadida OK");
     });
     this.router.navigate(["/"]);
    }

}
