import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubRount1Component } from './sub-rount1.component';

describe('SubRount1Component', () => {
  let component: SubRount1Component;
  let fixture: ComponentFixture<SubRount1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRount1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
