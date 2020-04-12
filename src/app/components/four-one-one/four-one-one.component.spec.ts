import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOneOneComponent } from './four-one-one.component';

describe('FourOneOneComponent', () => {
  let component: FourOneOneComponent;
  let fixture: ComponentFixture<FourOneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
