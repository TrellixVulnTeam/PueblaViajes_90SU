import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-viajes-cards',
  templateUrl: './viajes-cards.component.html',
  styleUrls: ['./viajes-cards.component.css']
})
export class ViajesCardsComponent {

  title = 'app works!';
  private apiUrl = 'http://localhost:8000/viajes/';
  data: any ={};

  constructor(private http: Http){
    console.log('Hello Fellow user');
    this.getViajes();
    this.getData();

  }


  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getViajes(){
    this.getData().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
