import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience : string = 'Experience';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("click!");
    this.router.navigate(['/login']);
    
   }

}
