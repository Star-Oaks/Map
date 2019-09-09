import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOnFacebookComponent } from './log-on-facebook.component';

describe('LogOnFacebookComponent', () => {
  let component: LogOnFacebookComponent;
  let fixture: ComponentFixture<LogOnFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOnFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOnFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
