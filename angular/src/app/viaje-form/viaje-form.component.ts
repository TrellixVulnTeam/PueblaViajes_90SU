import { Component} from '@angular/core';
import {Viaje} from '../viaje';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.css']
})
export class ViajeFormComponent  {

  model = new Viaje('', '', '','',100,'');
  constructor(private http: Http) { }
  private urlViajes = "http://127.0.0.1:8000/viajes/"
  title:string;
  description:string;
  start_date:string;
  end_date:string;
  price:number;
  contact_number:string;
  onSubmit(title,description,start_Date,end_date,price,contact_number){ 
    
    var viajeInfo = 
    {
        "title": this.title,
        "description": this.description,
        "start_date":this.start_date,
        "end_date": this.end_date,
        "price": this.price,
        "contact_number":this.contact_number,
    };
    return this.http.post(this.urlViajes,viajeInfo ).subscribe(data =>{

    });
  }
  
  newViaje(){
    this.model = new Viaje( '', '', '','',1000,'');
  }
}
