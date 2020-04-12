import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourTwoComponent } from './four-two.component';

describe('FourTwoComponent', () => {
  let component: FourTwoComponent;
  let fixture: ComponentFixture<FourTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
