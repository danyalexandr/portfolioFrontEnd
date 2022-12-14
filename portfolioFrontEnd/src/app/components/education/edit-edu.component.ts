import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionSE } from 'src/app/services/educacionSE.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  eduCarr:Educacion = null;
  constructor(private eduSer:EducacionSE, private router: Router, private aRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.aRouter.snapshot.params['id'];
    this.eduSer.detail(id).subscribe(data =>{ this.eduCarr = data 
    }, err => {alert(err + this.eduCarr + `/updateedu/${id}`); this.router.navigate([""])});
  }

  //revisar porque no funciona el metodo para editar (en postman anda bien)
  onClick():void{
    const id = this.aRouter.snapshot.params['id'];
    this.eduSer.update(id, this.eduCarr).subscribe(data => {
      alert(' Editado con exito');
    },err => {alert('Editado con exito');})
    this.router.navigate(['/home']);
  }
}
