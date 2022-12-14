import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionSE } from 'src/app/services/educacionSE.service';

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

  constructor(private eduSer: EducacionSE, private router:Router) { }

  ngOnInit(): void {
  }

  onClick():void{
    const exp = new Educacion(this.institucion, this.carrera, this.fechaInicio, this.fechaFin);
    this.eduSer.save(exp).subscribe(data => {alert("experiencia añadida OK");
     });
     this.router.navigate(["/"]);
    }

}
