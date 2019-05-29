import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COPComponent } from './cop.component';

describe('COPComponent', () => {
  let component: COPComponent;
  let fixture: ComponentFixture<COPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
