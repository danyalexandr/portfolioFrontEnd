import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url:string = "";

  storageRef = firebase.app().storage().ref();

  constructor(private storage:Storage) { }

  async subirImagen(nombre:string, imgBase64:any){

    try {
      let respuesta = await this.storageRef.child("images/" + nombre)
      .putString(imgBase64, "data_url");
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  /*public uploadImage(event:any){
    const file = event.target.files[0];
    const imgRef = ref(this.storage, `images/`);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }*/

  getImages(){
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
    .then(async response => {
    for (let item of response.items) {
    this.url = await getDownloadURL(item);
    //console.log("ESTAS LEYENDO ESTO" + " " + this.url);
    }
    })
    .catch(error => console.log(error));
  }
}
