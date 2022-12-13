import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaSE } from 'src/app/services/experienciaSE.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

expLab:Experiencia = null;
  constructor(private expSer:ExperienciaSE, private router: Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expSer.detail(id).subscribe(data =>{ this.expLab = data 
    }, err => {alert(err + this.expLab + `/update/${id}`); this.router.navigate([""])});
  }

  onClick():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.expSer.update(id, this.expLab).subscribe(data => {
      alert(' Editado con exito');
    },err => {alert('err')})
    this.router.navigate(['/home']);
  }
}
