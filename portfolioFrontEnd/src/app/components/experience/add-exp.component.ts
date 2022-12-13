import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaSE } from 'src/app/services/experienciaSE.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {

  nombreE:string = '';
  descripcionE:string = '';

  constructor(private expSer:ExperienciaSE, private router: Router) { }

  ngOnInit(): void {
  }

  onClick():void{
  const exp = new Experiencia(this.nombreE, this.descripcionE);
  this.expSer.save(exp).subscribe(data => {alert("experiencia añadida OK");
   });
   this.router.navigate(["/"]);
  }
}
