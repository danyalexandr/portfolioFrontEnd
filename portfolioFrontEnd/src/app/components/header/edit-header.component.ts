import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {

  acercaHeader:Persona = null;

  constructor(private auth:AuthorizationService, private router:Router, 
              private activatedroute: ActivatedRoute, private storage:Storage) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.auth.detail(id).subscribe(data =>{ this.acercaHeader = data 
    }, err => {alert(err + this.acercaHeader.nombre + `persona/update/${id}`); this.router.navigate([""])});
  }
  onClick(){
    const id = this.activatedroute.snapshot.params['id'];
    this.auth.update(id, this.acercaHeader).subscribe(data => {
      alert(' Editado con exito');
    },err => {alert('Editado con exito');})
    this.router.navigate(['/home']);

    this.getImages();
  }


  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  getImages(){
    const imageRef = ref(this.storage, 'images');

  listAll(imageRef)
  .then(async response => {console.log(response);
  
  for(let item of response.items){
    const url = await getDownloadURL(item);
    console.log(url);
  }
  })
  .catch(error => console.log(error));
  }
}
