import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OMFComponent } from './omf.component';

describe('OMFComponent', () => {
  let component: OMFComponent;
  let fixture: ComponentFixture<OMFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OMFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
