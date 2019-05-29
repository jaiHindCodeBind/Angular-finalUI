import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRFComponent } from './mrf.component';

describe('MRFComponent', () => {
  let component: MRFComponent;
  let fixture: ComponentFixture<MRFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
