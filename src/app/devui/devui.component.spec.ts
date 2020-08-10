import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevuiComponent } from './devui.component';

describe('DevuiComponent', () => {
  let component: DevuiComponent;
  let fixture: ComponentFixture<DevuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
