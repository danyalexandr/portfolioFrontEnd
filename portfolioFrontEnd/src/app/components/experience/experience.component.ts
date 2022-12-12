import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ExperienciaSE } from 'src/app/services/experienciaSE.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia:Experiencia[] = [];
  miPortfolio:any;

  constructor(private router:Router, private auth: AuthorizationService, 
              private expSer:ExperienciaSE) { }

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data => {this.miPortfolio = data});

    this.expSer.lista().subscribe(data => {this.experiencia = data});
  }
  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }


  public borrar(){
    alert("seguro desea borrar?");
    
  }
}
