import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { SkillSE } from 'src/app/services/skillSE.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad:Skill[] = [];

  

  constructor(private router:Router, private auth: AuthorizationService, private skillSer: SkillSE) { }

  ngOnInit(): void {

    this.cargarProyectos();
  }
  
  cargarProyectos():void{
    this.skillSer.lista().subscribe(data => {this.habilidad = data});
      
    }

  public borrar(id:number){
    if(id != undefined){
      this.skillSer.delete(id).subscribe(data => {
        this.cargarProyectos();
      },err => alert(err + "borrado correctamente"));
      this.router.navigate(["/"]);
    }
  }

  public get isLogin():boolean {
    return this.auth.isUserLogin();
    }
}
