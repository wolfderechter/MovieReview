import { Component, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
import { SearchService } from 'src/app/_services/search.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {
  movie: Movie;
  member: Member;
  user: User;
  review: any;

  reviewForm: FormGroup;
  validationErrors: string[] = [];

  // @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any){
  //   console.log("test")
  //   if(this.submitted){
  //     console.log("test2")
  //     $event.returnValue = true;
  //   }
  // }

  constructor(private route : ActivatedRoute, private searchService: SearchService, 
    private memberService: MembersService, private accountService: AccountService,
    private reviewService: ReviewsService, private toastr: ToastrService, private fb: FormBuilder, private router: Router) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    //movie inladen
    this.loadMovie();
    this.loadMember();

    this.initializeForm();
  }

  loadMovie(){
    // this.movie = this.searchService.movie;
    this.searchService.getMovieById(this.route.snapshot.paramMap.get('imdbId')).subscribe(obj => {
      this.movie = {
        'imdbId': obj.imdbID,
        'title': obj.Title,
        'poster': obj.Poster
      }
    });
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    })
  }


  initializeForm(){
    this.reviewForm = this.fb.group({
      score: ['', Validators.required],
      reviewtext: ['',]
    })
  }

  checkIfImageExists(){
    if(this.movie.poster == "N/A"){
      return './assets/default.png';
    }
    return this.movie.poster;
  }

  createReview(){
    this.reviewService.createReview({
      'Score': parseInt(this.reviewForm.value.score),
      'Reviewtext': this.reviewForm.value.reviewtext,
      'Movie': {
        'ImdbId': this.movie.imdbId,
        'Title': this.movie.title,
        'Poster': this.movie.poster
      },
      'Username': this.user.username}).subscribe(response => {
      this.router.navigateByUrl('/reviews');
      this.toastr.success("Succesfully created the review");
    }, error => {
      this.validationErrors = error;
    })
    
  }


}
