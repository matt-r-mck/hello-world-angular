import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatGrandChildComponent } from './great-grand-child.component';

describe('GreatGrandChildComponent', () => {
  let component: GreatGrandChildComponent;
  let fixture: ComponentFixture<GreatGrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatGrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
