import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarTableComponent } from './edit-car-table.component';

describe('EditTableComponent', () => {
  let component: EditCarTableComponent;
  let fixture: ComponentFixture<EditCarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
