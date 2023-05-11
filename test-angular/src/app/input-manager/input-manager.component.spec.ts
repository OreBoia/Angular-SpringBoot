import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputManagerComponent } from './input-manager.component';

describe('InputManagerComponent', () => {
  let component: InputManagerComponent;
  let fixture: ComponentFixture<InputManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputManagerComponent]
    });
    fixture = TestBed.createComponent(InputManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
