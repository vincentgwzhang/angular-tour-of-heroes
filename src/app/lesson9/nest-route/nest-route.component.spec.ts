import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestRouteComponent } from './nest-route.component';

describe('NestRouteComponent', () => {
  let component: NestRouteComponent;
  let fixture: ComponentFixture<NestRouteComponent>;

  beforeEach(async(() => {
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
