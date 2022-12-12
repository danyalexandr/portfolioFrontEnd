import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { SkillSE } from 'src/app/services/skillSE.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad:any;

  constructor(private router:Router, private auth: AuthorizationService, private skill: SkillSE) { }

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data => {this.habilidad = data;});

  }
  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  public borrar(){
    alert("seguro desea borrar?")
  }
}
