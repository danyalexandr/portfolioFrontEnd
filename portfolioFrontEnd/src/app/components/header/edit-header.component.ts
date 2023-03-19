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
    private aRouter: ActivatedRoute,
    public images: ImagesService
  ) {}

  ngOnInit(): void {
    const id = this.aRouter.snapshot.params['id'];
    this.auth.detail(id).subscribe((data) => {
      this.acercaHeader = data;
      },(err) => {
        alert(err + this.acercaHeader + `persona/update/${id}`);
        this.router.navigate(['/']);
      }
    );
  }

  onClick() {
    const id = this.aRouter.snapshot.params['id'];
    this.auth.update(id, this.acercaHeader).subscribe((data) => {
        alert(' Editado con exito');
      },(err) => {alert('Editado con exito');})
    this.router.navigate(['/home']);
  }

  uploadImage($event: any) {
    this.images.uploadImage($event);
  }

}
