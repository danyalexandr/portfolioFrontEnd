import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillSE } from 'src/app/services/skillSE.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private router:Router, private skillSer:SkillSE) { }

  habilidad:string = '';
  porcentaje:number = 0;
  ngOnInit(): void {
    
  }

  onClick(){
    const pro = new Skill(this.habilidad, this.porcentaje);
    this.skillSer.save(pro).subscribe(data => {alert( data + "Habilidad añadida OK");
     });
     this.router.navigate(["/"]);
  }
}
