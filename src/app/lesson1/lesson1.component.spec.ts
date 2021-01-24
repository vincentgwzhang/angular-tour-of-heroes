import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lesson1Component } from './lesson1.component';

describe('Lesson1Component', () => {
  let component: Lesson1Component;
  let fixture: ComponentFixture<Lesson1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
