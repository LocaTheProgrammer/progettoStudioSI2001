import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserTableComponent } from './edit-user-table.component';

describe('EditUserTableComponent', () => {
  let component: EditUserTableComponent;
  let fixture: ComponentFixture<EditUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
