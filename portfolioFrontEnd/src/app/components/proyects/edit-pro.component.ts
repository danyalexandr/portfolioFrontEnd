import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagesService } from 'src/app/services/images.service';
import { ProyectoSE } from 'src/app/services/proyectoSE.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  proNom:Proyectos = null;
  constructor(private router:Router, private proSer:ProyectoSE, private activatedroute: ActivatedRoute,
              public images:ImagesService) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.proSer.detail(id).subscribe(data =>{ this.proNom = data 
    }, err => {alert(err + this.proNom + `/updatepro/${id}`); this.router.navigate([""])});
  
  }

  onClick(){
    const id = this.activatedroute.snapshot.params['id'];
    this.proNom.img = this.images.url
    this.proSer.update(id, this.proNom).subscribe(data => {
      alert(' Editado con exito');
    },err => {alert('Editado con exito');})
    this.router.navigate(['/home']);
  }

  uploadImage($event: any) {
    const id = this.activatedroute.snapshot.params['id'];
    const name = 'proyecto_' + id;
    this.images.uploadImage($event, name);
  }
  }
