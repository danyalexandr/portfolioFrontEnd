import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { Usuario } from 'src/app/model/usuario';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ExperienciaSE } from 'src/app/services/experienciaSE.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia:Experiencia[] = [];
  usuario:Usuario[] = [];

  constructor(private router:Router, private auth: AuthorizationService, 
              private expSer:ExperienciaSE) { }

  ngOnInit(): void {
   this.cargarExperiencia(); 
  this.auth.obtenerDatos().subscribe(data => {this.usuario = data});
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
  
  cargarExperiencia():void{
    this.expSer.lista().subscribe(data => {this.experiencia = data});
  }

borrar(id:number): void{
    if(id != undefined){
      this.expSer.delete(id).subscribe(data => {
        this.cargarExperiencia();
      },err => alert(err + "no se pudo borrar"));
    }
    this.router.navigate(["/"])
  }
}
