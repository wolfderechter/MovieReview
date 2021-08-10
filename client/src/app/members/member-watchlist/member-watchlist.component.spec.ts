import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberWatchlistComponent } from './member-watchlist.component';

describe('MemberWatchlistComponent', () => {
  let component: MemberWatchlistComponent;
  let fixture: ComponentFixture<MemberWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
