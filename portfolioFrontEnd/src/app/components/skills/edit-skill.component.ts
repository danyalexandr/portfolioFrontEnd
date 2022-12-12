import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClick(){
    alert("editado");
    this.router.navigate(["/"]);
    //cambiar click por submit
    
  }
}
