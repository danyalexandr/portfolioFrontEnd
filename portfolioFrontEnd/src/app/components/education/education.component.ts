import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() displayEdu:boolean = false;
  
  educacion:any;
  //education: string = "Education";

  constructor(private router:Router, private authorization: AuthorizationService) { }

  ngOnInit(): void {
    this.authorization.obtenerDatos().subscribe(data =>
      {
      this.educacion = data;
      });
  }

  onClick(){
    console.log("click!");
    this.router.navigate(['/login']);
    
   }

}
