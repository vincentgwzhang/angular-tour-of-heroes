import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lesson3ItemDetailComponent } from './lesson3-item-detail.component';

describe('Lesson3ItemDetailComponent', () => {
  let component: Lesson3ItemDetailComponent;
  let fixture: ComponentFixture<Lesson3ItemDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3ItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
