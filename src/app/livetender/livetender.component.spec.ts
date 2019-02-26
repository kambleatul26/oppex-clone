import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetenderComponent } from './livetender.component';

describe('LivetenderComponent', () => {
  let component: LivetenderComponent;
  let fixture: ComponentFixture<LivetenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
