import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoSE } from 'src/app/services/proyectoSE.service';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  nombre:string = '';
  descripcion:string = '';
  constructor(private router:Router, private proSer: ProyectoSE) { }

  ngOnInit(): void {
  }

  onClick():void{
    const pro = new Proyectos(this.nombre, this.descripcion);
    this.proSer.save(pro).subscribe(data => {alert("experiencia añadida OK");
     });
     this.router.navigate(["/"]);
    }
}
