import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Movie } from 'src/app/_models/movie';
import { Review } from 'src/app/_models/review';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  movie: Movie;
  review: Review;
  reviewForm: FormGroup;
  user: User;
  member: Member;

  validationErrors: string[] = [];

  constructor(private route : ActivatedRoute, private reviewService: ReviewsService, private fb: FormBuilder,
     private router: Router, private toastr: ToastrService, private memberService: MembersService, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
    });
   }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
      this.loadReview();
    })
  }

  loadReview(){
    this.review = this.member.reviews.find(r => r.id === parseInt(this.route.snapshot.paramMap.get('id')));
    this.movie = this.review.movie;
    this.initializeForm();
  }


  initializeForm(){
    this.reviewForm = this.fb.group({
      score: [this.review.score, [Validators.required, Validators.min(0), Validators.max(10)]],
      reviewtext: [this.review.reviewtext]
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
      'ReviewText': this.reviewForm.value.reviewtext,
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

}