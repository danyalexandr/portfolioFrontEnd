import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  miPortfolio:any;

  constructor(private router:Router, private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data => {this.miPortfolio = data;});

  }
  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
  
}
