import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia:ExperienceComponent[] = [];
  miPortfolio:any;

  constructor(private router:Router, private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data => {this.miPortfolio = data});

  
  }
  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
  
}
