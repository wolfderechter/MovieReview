import { TestBed } from '@angular/core/testing';

import { ReviewsService } from './reviews.service';

describe('ReviewService', () => {
  let service: ReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
