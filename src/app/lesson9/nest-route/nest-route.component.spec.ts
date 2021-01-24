import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NestRouteComponent } from './nest-route.component';

describe('NestRouteComponent', () => {
  let component: NestRouteComponent;
  let fixture: ComponentFixture<NestRouteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
