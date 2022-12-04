import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() displaySkill:boolean = false;
  habilidad:any;
  skills:string = 'Hard & Soft Skills';

  constructor(private router:Router, private authorization: AuthorizationService) { }

  ngOnInit(): void {

  }

  onClick(){
    this.router.navigate(['/login']);
  }
}
