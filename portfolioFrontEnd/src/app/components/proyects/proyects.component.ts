import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ProyectoSE } from 'src/app/services/proyectoSE.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  pro:Proyectos[] = [];

  
  constructor(private router:Router, private auth: AuthorizationService, private proSer:ProyectoSE) { }

  ngOnInit(): void {
    this.cargarProyectos();
    
  }

   cargarProyectos():void{
    this.proSer.lista().subscribe(data => {this.pro = data});
  }

  public borrar(id:number){
    if(id != undefined){
      this.proSer.delete(id).subscribe(data => {
        this.cargarProyectos();
      },err => alert(err + "borrado correctamente"));
      this.router.navigate(["/"]);
    }
  }

  public get isLogin():boolean {
    return this.auth.isAuthenticated;
    }
}
