import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  persone = [
    {nome: 'MARIO', cognome: 'rossi', isOnline: true},
    {nome: 'Mffefsefarco', cognome: 'Verdi', isOnline: false},
    {nome: 'Annsfefa', cognome: 'neri', isOnline: false},
    {nome: 'pifsefppo', cognome: 'paperino', isOnline: true}]

  
  GetPersona(ind: number)
  {
    return this.persone[ind]
  }

  GetPersone()
  {
    return this.persone
  }
}
