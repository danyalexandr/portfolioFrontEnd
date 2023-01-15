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

  puesto:string = '';
  empresa:string = '';
  fechaInicio:string = '';
  fechaFin:string = '';
  lugar:string = '';
  img:string = '';

  constructor(private expSer:ExperienciaSE, private router: Router, public images:ImagesService) { }

  ngOnInit(): void {
  }

  onClick():void{
  const exp = new Experiencia(this.puesto, this.empresa, this.fechaInicio, this.fechaFin, this.lugar, this.img);
  this.expSer.save(exp).subscribe(data => {alert("experiencia añadida OK");
   });
   this.router.navigate(["/"]);
  }
}
