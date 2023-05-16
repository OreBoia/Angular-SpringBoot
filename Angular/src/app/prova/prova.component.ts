import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TestServiceService } from '../serv/test-service.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnChanges, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{
  
  @Input() data: any
  @Output() mandaDatiEvento = new EventEmitter<string>()

  cani = [
    {nome:'pippo',
    razza: 'golden',
    descrizione: "The Shiba Inu is the smallest of the six original and distinct spitz"}
  ]

  isDisabled = true

  immagine1 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor(private testService: TestServiceService)
  {
    
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
      console.log(changes)
  }

  ngOnInit(): void 
  {
    // console.log(this.data)
    // setInterval(() => {this.isDisabled = !this.isDisabled}, 2000)
    this.testService.persone[0].nome = 'test'
    console.log('PROVA COMP ', this.testService.persone)

  }

  ngAfterContentChecked(): void {}
  ngAfterContentInit(): void {}
  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {}
  ngDoCheck(): void {}
  ngOnDestroy(): void {}

  MandaDati(){
    this.mandaDatiEvento.emit(this.cani[0].nome)
  }
}
