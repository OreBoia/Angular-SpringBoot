import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  insertPersona(url: string, body: {})
  {
    return this.http.post(url, body)
  }

  getPersona(url: string, nome: string)
  {
    let params = { fields: 'nome,email' };

    return this.http.get<Item[]>(url, { params: params })
  }
}

export interface Item 
{
  nome: string;
  email: string;
}


