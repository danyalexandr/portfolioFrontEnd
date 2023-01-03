import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public username:string;
  public password:string;
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private auth:AuthorizationService) {
    this.username = "";
    this.password = ""; 
    this.form = this.formBuilder.group({

      username:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(9)]]
      
    })
  }
  

  ngOnInit(): void {
    this.auth.obtenerDatos();
  }

  public btnLogin():void{
    this.auth.loginTest(this.username, this.password);
    console.log("click");
  }

  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get("password"); 
  }
}
