import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {
 
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private route: ActivatedRoute) 
  {
    
  }

  ngOnInit(): void 
  {
    // this.route.paramMap.subscribe((params: ParamMap) => { console.log(params.get('')) });
  }
  
  ngAfterViewInit() 
  {
    
    
  }

  ngAfterContentChecked(): void 
  {

  }

}
