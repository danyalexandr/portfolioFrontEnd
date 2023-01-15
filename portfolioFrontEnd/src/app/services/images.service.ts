import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url:string = "";

  constructor(private storage:Storage) { }

  public uploadImage($event:any, name:string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/` + name);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }


  getImages(){
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
    .then(async response => {
    for (let item of response.items) {
    this.url = await getDownloadURL(item);
    console.log(this.url);
    }
    })
    .catch(error => console.log(error));
  }
}
