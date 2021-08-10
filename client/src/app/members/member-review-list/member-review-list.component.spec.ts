import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReviewListComponent } from './member-review-list.component';

describe('MemberReviewListComponent', () => {
  let component: MemberReviewListComponent;
  let fixture: ComponentFixture<MemberReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberReviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
