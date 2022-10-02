import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//selection no recuerdo para que esta creada!
 selection(){
 }

 onClick(){
  console.log("click!");
  this.router.navigate(['/login']);
  
 }
}
