import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRount2Component } from './sub-rount2.component';

describe('SubRount2Component', () => {
  let component: SubRount2Component;
  let fixture: ComponentFixture<SubRount2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRount2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
