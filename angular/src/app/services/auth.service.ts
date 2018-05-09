import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  URL: string;
  headers: HttpHeaders;

  constructor(private http:HttpClient) { 
    this.URL = 'http://127.0.0.0:8000';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Make the post request with the email and password provided, if successful, sets session data
  login(email:string, password:string) {
    let enduser;
    let body = {
      email: email,
      password: password
    }

    return this.http.post(
      this.URL + '/login',
      body,
      { headers: this.headers }
    );  
  }

  // Sets session data with the login response
  setSession(res){
  
     
    localStorage.setItem('token', res.token);
    localStorage.setItem('enduser_id', JSON.stringify(res.enduser));
  }

  // Delete session data
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('enduser_id');
    localStorage.removeItem('expirationTime');
  }

  // Returns true if the the token exists and has not expired
  isLoggedIn(){
    
  }

  // Get the moment expiration time
  
  // get the logged in end user
  getEnduserId(){
    return localStorage.getItem('enduser_id');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}