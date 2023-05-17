import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestServiceService } from './serv/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>
  
  title = 'Angular'

  isVisible = true

  numero = 3.163453

  persone = [
    {nome: 'Luca', cognome: 'rossi', isOnline: true},
    {nome: 'Marco', cognome: 'Verdi', isOnline: false},
    {nome: 'Anna', cognome: 'neri', isOnline: false},
    {nome: 'pippo', cognome: 'paperino', isOnline: true}]
  
  valore = "ciao"

  colore: string = ''

  today = Date.now()
  
  constructor(private testService: TestServiceService)
  {

  }

  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.valoreInput)

    console.log('APPCOMPONENT ', this.testService.persone)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    // console.log(this.valoreInput.nativeElement.value)
  }

  onClick(event: Event){this.title = 'HOCLICCATO'}

  onInput(event: Event){this.title = (<HTMLInputElement>event.target).value}

  onDataReceived(value: string)
  {
    console.log(value)
  }

  onClickVariableTemplate()
  {
    console.log(this.valoreInput.nativeElement.value)
  }

  cambiaColoreEvidenziatore(coloreEv: string)
  {
    this.colore = coloreEv
  }
}
