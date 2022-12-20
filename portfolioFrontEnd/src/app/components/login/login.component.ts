import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public email:string;
  public password:string;
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private auth:AuthorizationService) {
    this.email = "";
    this.password = ""; 
    this.form = this.formBuilder.group({

      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(9)]],
      deviceInfo:this.formBuilder.group({
        deviceId:[""],
        deviceType:[""],
        notificationToken:[""]
      })
    })
  }
  

  ngOnInit(): void {
  }

  public btnLogin():void{
    this.auth.loginSimple(this.email, this.password);
  }

  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get("password"); 
  }
}
