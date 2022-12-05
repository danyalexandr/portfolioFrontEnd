import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  @Input() displayPro:boolean = false;
  proyectos:any;
  
  constructor(private router:Router, private authorization: AuthorizationService) { }

  ngOnInit(): void {this.authorization.obtenerDatos().subscribe(data => {this.proyectos = data;});
  }

  onClick(){
    this.router.navigate(['/login']);
  }
}
