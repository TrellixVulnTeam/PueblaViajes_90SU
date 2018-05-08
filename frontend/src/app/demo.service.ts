import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
     getViajes() {
        return this.http.get('localhost:8000/viajes/');
    }
}

