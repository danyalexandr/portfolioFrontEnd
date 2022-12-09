import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad:any;

  constructor(private router:Router, private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data => {this.habilidad = data;});

  }
  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
}
