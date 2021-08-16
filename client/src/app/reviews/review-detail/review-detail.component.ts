import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Movie } from 'src/app/_models/movie';
import { Review } from 'src/app/_models/review';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  movie: Movie;
  review: Review;
  user: User;
  member: Member;

  validationErrors: string[] = [];

  constructor(private route : ActivatedRoute, private reviewService: ReviewsService, 
    private router: Router, private accountService: AccountService, private memberService: MembersService) {
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
  }


  
  checkIfImageExists(){
    if(this.movie.poster == "N/A"){
      return './assets/default.png';
    }
    return this.movie.poster;
  }
}
