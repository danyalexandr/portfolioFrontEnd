import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillSE } from 'src/app/services/skillSE.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skills:Skill = null;
  constructor(private router: Router, private skillSer:SkillSE, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.skillSer.detail(id).subscribe(data =>{ this.skills = data 
    }, err => {alert(err + this.skills + `/update/${id}`); this.router.navigate([""])});
  
  }

  public onClick(){
    const id = this.activatedroute.snapshot.params['id'];
    this.skillSer.update(id, this.skills).subscribe(data => {
      alert(data + ' Editado con exito');
    },err => {alert(err + 'error al editar');})
    this.router.navigate(['/home']);
  }
}
