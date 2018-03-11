import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySnapComponent } from './day-snap.component';

describe('DaySnapComponent', () => {
  let component: DaySnapComponent;
  let fixture: ComponentFixture<DaySnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
