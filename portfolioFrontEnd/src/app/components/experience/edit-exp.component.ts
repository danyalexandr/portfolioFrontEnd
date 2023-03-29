import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaSE } from 'src/app/services/experienciaSE.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

experienciaLaboral:Experiencia = null;
imagenes:any[] = [];

  constructor(private experienciaServices:ExperienciaSE, private router: Router, 
              private activatedRouter:ActivatedRoute,
              public imagesService:ImagesService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServices.detail(id).subscribe(data =>{ this.experienciaLaboral = data 
    }, err => {alert(err + this.experienciaLaboral + `/api/update/${id}`); 
    this.router.navigate(["/"])});
  }

  onClick():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServices.update(id, this.experienciaLaboral).subscribe(data => {
      alert(data + ' Editado con exito');
    },err => {alert(err + 'Error Editando');})
    this.router.navigate(['/home']);
  }
  
    //this.images.uploadImage($event);
cargarImagen(event:any){
const id = this.activatedRouter.snapshot.params['id'];
const nombre = 'experiencia_' + id;
let archivos = event.target.files
let reader = new FileReader();
                
reader.readAsDataURL(archivos[0]);
reader.onloadend = () => {
this.imagenes.push(reader.result);
this.imagesService.subirImagen(nombre + "_" + Date.now(), reader.result)
.then(urlImage => {console.log(urlImage);
this.experienciaLaboral.img = urlImage;
console.log('this.imagesService.url' + ' ' + this.experienciaLaboral.img);
});                       
  }
 }
}
