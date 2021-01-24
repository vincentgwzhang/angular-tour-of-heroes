import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lesson6ParentComponent } from './lesson6-parent.component';

describe('Lesson6ParentComponent', () => {
  let component: Lesson6ParentComponent;
  let fixture: ComponentFixture<Lesson6ParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson6ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson6ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
