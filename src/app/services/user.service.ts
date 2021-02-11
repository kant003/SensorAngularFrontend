import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient)  { }

  login(email:string, password:string): Observable<any>{
    const body = JSON.stringify({email, password})
    const headers = new HttpHeaders( {'Content-Type': 'application/json'})

    const url = `http://localhost:3000/api/login`
    return this.httpClient.post(url, body, {headers})
  }
}
