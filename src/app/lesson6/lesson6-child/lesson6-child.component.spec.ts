import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6ChildComponent } from './lesson6-child.component';

describe('Lesson6ChildComponent', () => {
  let component: Lesson6ChildComponent;
  let fixture: ComponentFixture<Lesson6ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson6ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
