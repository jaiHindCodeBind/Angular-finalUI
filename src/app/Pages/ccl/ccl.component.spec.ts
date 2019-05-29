import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCLComponent } from './ccl.component';

describe('CCLComponent', () => {
  let component: CCLComponent;
  let fixture: ComponentFixture<CCLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
