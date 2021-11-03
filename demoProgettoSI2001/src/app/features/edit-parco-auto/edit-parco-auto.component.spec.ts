import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParcoAutoComponent } from './edit-parco-auto.component';

describe('EditParcoAutoComponent', () => {
  let component: EditParcoAutoComponent;
  let fixture: ComponentFixture<EditParcoAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParcoAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParcoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
