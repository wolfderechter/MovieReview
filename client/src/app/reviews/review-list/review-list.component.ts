import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/_models/review';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
  username: string;

  constructor(private reviewService: ReviewsService) { 
    this.loadReviews();
  }

  ngOnInit(): void {
  }


  loadReviews(){
    this.reviewService.getReviews(this.username).subscribe(reviews => {
      this.reviews = reviews;
    })
  }
}
