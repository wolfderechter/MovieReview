import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  reviewForm: FormGroup;

  validationErrors: string[] = [];

  constructor(private route : ActivatedRoute, private reviewService: ReviewsService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    //review inladen
    this.loadReview();
    this.initializeForm();

  }

  loadReview(){
    this.review = this.reviewService.review;
    this.movie = this.review.movie;
  }


  initializeForm(){
    this.reviewForm = this.fb.group({
      score: ['', Validators.required]
    })
  }

  
  checkIfImageExists(){
    if(this.movie.poster == "N/A"){
      return './assets/default.png';
    }
    return this.movie.poster;
  }

  updateReview(){
    this.reviewService.updateReview({
      'Score': parseInt(this.reviewForm.value.score),
      'Movie': {
        'ImdbId': this.review.movie.imdbId,
        'Title': this.review.movie.title,
        'Poster': this.review.movie.poster
      }
      }).subscribe(response => {
      this.router.navigateByUrl('/reviews');
      this.toastr.success("Succesfully updated the review");
    }, error => {
      this.validationErrors = error;
    });
  }

  checkSubmitted(){
    return this.submitted;
  }
}