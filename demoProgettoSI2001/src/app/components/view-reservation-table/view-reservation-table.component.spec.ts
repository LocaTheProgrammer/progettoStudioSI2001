import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReservationTableComponent } from './view-reservation-table.component';

describe('ViewReservationTableComponent', () => {
  let component: ViewReservationTableComponent;
  let fixture: ComponentFixture<ViewReservationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReservationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
