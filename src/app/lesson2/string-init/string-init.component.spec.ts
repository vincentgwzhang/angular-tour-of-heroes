import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StringInitComponent } from './string-init.component';

describe('StringInitComponent', () => {
  let component: StringInitComponent;
  let fixture: ComponentFixture<StringInitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StringInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
