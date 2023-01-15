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
  image: string[] = [];
  acercaHeader: Persona = null;

  constructor(
    private auth: AuthorizationService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    public images: ImagesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.auth.detail(id).subscribe(
      (data) => {
        this.acercaHeader = data;
      },
      (err) => {
        alert(err + this.acercaHeader.nombre + `persona/update/${id}`);
        this.router.navigate(['']);
      }
    );
  }

  onClick() {
    const id = this.activatedroute.snapshot.params['id'];
    this.acercaHeader.img = this.images.url
    console.log('esto es la imagen en acerca de' + this.acercaHeader.img)
    this.auth.update(id, this.acercaHeader).subscribe(
      (data) => {
        alert(' Editado con exito');
      },
      (err) => {
        alert('Editado con exito');
      }
    );
    this.router.navigate(['/home']);
  }

  uploadImage($event: any) {
    const id = this.activatedroute.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.images.uploadImage($event, name);
  }

}
