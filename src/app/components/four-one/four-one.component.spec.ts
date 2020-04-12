import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOneComponent } from './four-one.component';

describe('FourOneComponent', () => {
  let component: FourOneComponent;
  let fixture: ComponentFixture<FourOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
