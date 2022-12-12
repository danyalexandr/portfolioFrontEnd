import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos:any;
  
  constructor(private router:Router, private auth: AuthorizationService) { }

  ngOnInit(): void {this.auth.obtenerDatos().subscribe(data => {this.proyectos = data;});
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
  public borrar(){
    alert("proyecto borrado");
  }
}
