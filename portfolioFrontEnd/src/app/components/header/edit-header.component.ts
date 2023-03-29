import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css'],
})
export class EditHeaderComponent implements OnInit {
  acercaHeader:Persona = null;
  imagenes:any[] = [];

  constructor(
    private auth: AuthorizationService,
    private router: Router,
    private aRouter: ActivatedRoute,
    public images: ImagesService
  ) {}

  ngOnInit(): void {
    const id = this.aRouter.snapshot.params['id'];
    this.auth.detail(id).subscribe((data) => {
    this.acercaHeader = data;
    },(err) => {
    alert(err + this.acercaHeader + `api/persona/update/${id}`);
    this.router.navigate(['/']);
      }
    );
  }

  onClick() {
    const id = this.aRouter.snapshot.params['id'];
    this.auth.update(id, this.acercaHeader).subscribe((data) => {
        alert(data + ' Editado con exito');
      },(err) => {alert(err + 'Error al Editar');})
    this.router.navigate(['/home']);
  }

  cargarImagen(event:any){
    const id = this.aRouter.snapshot.params['id'];
    const nombre = 'persona_' + id;
    let archivos = event.target.files
    let reader = new FileReader();
                  
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
    this.imagenes.push(reader.result);
    this.images.subirImagen(nombre + "_" + Date.now(), reader.result)
    .then(urlImage => {console.log(urlImage);
    this.images.url = urlImage;
    console.log('this.images.url' + ' ' + this.images.url);
    });                       
    }
   }

}
