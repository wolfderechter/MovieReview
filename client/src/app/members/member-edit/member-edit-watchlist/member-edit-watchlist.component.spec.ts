import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditWatchlistComponent } from './member-edit-watchlist.component';

describe('MemberEditWatchlistComponent', () => {
  let component: MemberEditWatchlistComponent;
  let fixture: ComponentFixture<MemberEditWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
