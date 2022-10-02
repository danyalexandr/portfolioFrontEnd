import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: string = "Education";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("click!");
    this.router.navigate(['/login']);
    
   }

}
