import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, 
    AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{
  
      cani = [
        {nome:'rogero',
        razza: 'golden',
        descrizione: "The Shiba Inu is the smallest of the six original and distinct spitz"}
      ]

    constructor()
    {
      
    }

    ngAfterContentChecked(): void {
    }
    ngAfterContentInit(): void {
    }
    ngAfterViewChecked(): void {
    }
    ngAfterViewInit(): void {
    }
    ngDoCheck(): void {
    }
    ngOnDestroy(): void {
    }

    ngOnInit(): void 
    {
      
    }
  
}
