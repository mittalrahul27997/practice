import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourThreeComponent } from './four-three.component';

describe('FourThreeComponent', () => {
  let component: FourThreeComponent;
  let fixture: ComponentFixture<FourThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
