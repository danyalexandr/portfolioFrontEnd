import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion:any;
 

  constructor(private router:Router, private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data =>{this.educacion = data;});
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  public borrar(){
    alert("seguro desea borrar?")
  }
}
