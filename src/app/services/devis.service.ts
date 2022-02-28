import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devise } from '../models/devise';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }) }
@Injectable({
  providedIn: 'root'
})
export class DevisService {

  list!: Devise[];
  baseUrl = "/assets/devise.json";
  constructor(private httpclient: HttpClient) { }
  // listDevis(): Devise[]{
  //   return this.list= [{devis: "enro", taux: 0.29 }, {devis: "dollar", taux: 0.3}, {devis: "rq", taux: 0.8}];
  // }
 listDevis(): Observable <any>{
   return this.httpclient.get(`${this.baseUrl}`);
 }
}
