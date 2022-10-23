import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 
  displayMeExp = false;
  experiences: any;

  experience : string = 'Tecnico en Seguridad Electronica';

  constructor(private router:Router, private authorization: AuthorizationService) { }

  ngOnInit(): void {
    this.authorization.obtenerDatos().subscribe(data =>
      {console.log(data);
      this.experiences = data;
      });
  }
  onClick(){
    console.log("click!");
    //this.router.navigate(['/login']);
   }
   clickEnHeader(){
   // this.displayMeExp = this.header.displayMe;
   }

}
