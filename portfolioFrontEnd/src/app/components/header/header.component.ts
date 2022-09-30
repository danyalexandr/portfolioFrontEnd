import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aboutMe = 'About Me';
  nombre = 'Dany Gonzalez';
  puesto = 'Full Stack Developer Jr';
  p2 = 'En esta sección se encuentra tu foto de perfil, nombre y titulo que tienes Full Stack Developer Jr; En esta sección debes poner información profesional resumida sobre vos.'

  constructor() { }

  ngOnInit(): void {
  }
 selection(){
  
 }
}
