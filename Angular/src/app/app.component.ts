import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular'

  isVisible = true

  persone = [
    {nome: 'Luca', cognome: 'rossi', isOnline: true},
    {nome: 'Marco', cognome: 'Verdi', isOnline: false},
    {nome: 'Anna', cognome: 'neri', isOnline: false},
    {nome: 'pippo', cognome: 'paperino', isOnline: true}]
  

  onClick(event: Event){this.title = 'HOCLICCATO'}
  onInput(event: Event){this.title = (<HTMLInputElement>event.target).value}
}
