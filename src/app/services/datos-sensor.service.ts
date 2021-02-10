import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dato } from '../models/dato';
@Injectable({
  providedIn: 'root'
})
export class DatosSensorService {

  constructor(private httpClient: HttpClient) { }

  getListaDatos(): Observable<any>{
    const url = `http://localhost:3000/api/datos`
    return this.httpClient.get(url)
  }

  getUltimoDato(): Observable<any>{
    const url = `http://localhost:3000/api/ultimoDato`
    return this.httpClient.get(url)
  }

  removeDato(id: string){
    const url = `http://localhost:3000/api/dato/`+id
    return this.httpClient.delete(url)
  }

  addDato(dato: Dato){
    const body = JSON.stringify(dato)
    const headers = new HttpHeaders( {'Content-Type': 'application/json'})
    const url = `http://localhost:3000/api/dato/`
    return this.httpClient.post(url, body, {headers})
  }

}
