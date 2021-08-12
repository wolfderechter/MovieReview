import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/_models/movie';
import { Review } from 'src/app/_models/review';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  movie: Movie;
  review: Review;
  submitted = false;
  
  constructor(private route : ActivatedRoute, private reviewService: ReviewsService) { }

  ngOnInit(): void {
    //review inladen
    this.loadReview();
  }

  loadReview(){
    this.review = this.reviewService.review;
    this.movie = this.review.movie;
  }

  checkIfImageExists(movie: Movie){
    if(movie.poster == "N/A"){
      return './assets/default.png';
    }
    return movie.poster;
  }

  checkSubmitted(){
    return this.submitted;
  }
}