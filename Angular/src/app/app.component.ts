import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  @ViewChild('inputSaluti') valoreInput!: ElementRef
  
  title = 'Angular'

  isVisible = true

  numero = 3

  persone = [
    {nome: 'Luca', cognome: 'rossi', isOnline: true},
    {nome: 'Marco', cognome: 'Verdi', isOnline: false},
    {nome: 'Anna', cognome: 'neri', isOnline: false},
    {nome: 'pippo', cognome: 'paperino', isOnline: true}]
  
  valore = "ciao"

  
  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.valoreInput)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.valoreInput)
  }

  onClick(event: Event){this.title = 'HOCLICCATO'}

  onInput(event: Event){this.title = (<HTMLInputElement>event.target).value}

  onDataReceived(value: string)
  {
    console.log(value)
  }
}
