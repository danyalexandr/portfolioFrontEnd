import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  @Input() displayExp:boolean = false;
  experiences:any;
  

  experience : string = 'Tecnico en Seguridad Electronica';

  constructor(private router:Router, private authorization: AuthorizationService) { }

  ngOnInit(): void {
    this.authorization.obtenerDatos().subscribe(data => {this.experiences = data;});

  }
  onClick(){
    console.log("click!");
  
    //this.router.navigate(['/login']);
   }
  
}
