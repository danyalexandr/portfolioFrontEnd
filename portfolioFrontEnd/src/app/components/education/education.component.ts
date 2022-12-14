import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EducacionSE } from 'src/app/services/educacionSE.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion:Educacion[] = [];
  //educacion:any;
 

  constructor(private router:Router, private auth: AuthorizationService, 
              private eduSer:EducacionSE) { }

  ngOnInit(): void {
    this.cargarEducacion();
    //this.auth.obtenerDatos().subscribe(data =>{this.educacion = data;});
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  cargarEducacion():void{
    this.eduSer.lista().subscribe(data => {this.educacion = data});
  }

  borrar(id:number): void{
    if(id != undefined){
      this.eduSer.delete(id).subscribe(data => {
        this.cargarEducacion();
      },err => alert(err + "borrado correctamente"));
    }
    
  }
}
