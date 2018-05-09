import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  url:string;
  email:string;
  usuario:string;
  password:string;
  
  constructor(private errorHandler:ErrorHandlerService,private http: Http, private auth:AuthService, private httpClient: HttpClient) { }
  onSubmit(email,usuario,password){
    this.url = '127.0.0.1:8000/rest-auth/registration/';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var eachProduct = 
    {
        "email": this.email,
        "username": this.usuario,
        "password1":this.password,
        "password2":this.password,
    };
    alert(eachProduct.username);
    return this.http.post(this.url,eachProduct).subscribe(data =>{

    });
    
  }
  ngOnInit() {
  }

}
