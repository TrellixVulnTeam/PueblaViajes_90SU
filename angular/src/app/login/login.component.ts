import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private http: Http) { }
  private urlRestRegister = "http://127.0.0.1:8000/rest-auth/registration/"; //POST
  private urlRestInicioSesion = "http://127.0.0.1:8000/rest-auth/login/"; //POST
  email:string;
  usuario:string;
  password:string;

  iniciarSesion(email,usuario,password) {
    var sesion = 
    {
        "email": this.email,
        "username": this.usuario,
        "password":this.password,
    };
    alert(sesion.password);
    return this.http.post(this.urlRestInicioSesion,sesion)
      .subscribe(data =>{

      });
  }
}
