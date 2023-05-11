import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements 
                          OnInit, 
                          AfterContentChecked, 
                          AfterContentInit, 
                          AfterViewChecked, 
                          AfterViewInit, 
                          DoCheck, 
                          OnDestroy
{


  componentId = 'test-angular';

  ngOnInit(): void {}

  ngAfterContentChecked(): void {}

  ngAfterContentInit(): void {}

  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {}

  ngDoCheck(): void {}

  ngOnDestroy(): void {}

  onClick(event: MouseEvent) 
  {
    console.log(event)

    this.componentId = 'none'
  }

}
