import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRevComponent } from './add-edit-rev.component';

describe('AddEditRevComponent', () => {
  let component: AddEditRevComponent;
  let fixture: ComponentFixture<AddEditRevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
