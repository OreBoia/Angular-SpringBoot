import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  persone = [
    {nome: 'MARIO', cognome: 'rossi', isOnline: true, colore: 'blue'},
    {nome: 'Mffefsefarco', cognome: 'Verdi', isOnline: false, colore: 'green'},
    {nome: 'Annsfefa', cognome: 'neri', isOnline: false, colore: 'yellow'},
    {nome: 'pifsefppo', cognome: 'paperino', isOnline: true, colore: 'purple'}]

  
  GetPersona(ind: number)
  {
    return this.persone[ind]
  }

  GetPersone()
  {
    return this.persone
  }
}
