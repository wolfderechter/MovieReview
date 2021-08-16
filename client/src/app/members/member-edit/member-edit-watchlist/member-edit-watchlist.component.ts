import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Movie } from 'src/app/_models/movie';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { SearchService } from 'src/app/_services/search.service';

@Component({
  selector: 'app-member-edit-watchlist',
  templateUrl: './member-edit-watchlist.component.html',
  styleUrls: ['./member-edit-watchlist.component.css']
})
export class MemberEditWatchlistComponent implements OnInit {
  member: Member;
  user: User;
  watchlist: Movie[];

  constructor(private accountService: AccountService, private memberService: MembersService,
     private toastr: ToastrService, private searchService: SearchService, private router: Router) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
      this.watchlist = member.watchlist;
    })
  }

  removeFromWatchlist(movie: Movie){
    if(confirm("Are you sure you want to remove " + "'" + movie.title + "'" + " from your watchlist?")) {
      // DELETE in api
      this.memberService.updateMember(movie).subscribe(() => {
        this.watchlist.splice(this.watchlist.indexOf(movie), 1);
        this.toastr.success('Succesfully removed from your watchlist');
      });
    }
  }
  
  addToWatchlist(movie: Movie){
    if(confirm("Are you sure you want to add " + "'" + movie.title + "'" + " to your watchlist?")) {
      // ADD in api
      this.memberService.updateMember(movie).subscribe(() => {
        this.watchlist.push(movie);
        this.toastr.success('Succesfully added to your watchlist');
      });
    }
  }

  addReview(movie: Movie){
    this.searchService.movie = movie;
    this.removeFromWatchlist(movie);
    // if review bestaat
    var review = this.member.reviews.find(r => r.movie.imdbId === movie.imdbId);
    if(this.member.reviews.find(r => r.movie.imdbId === movie.imdbId)){
      this.router.navigate(["/review/edit", review.id]);
    }
    else{
      this.router.navigate(["/review/create", movie.imdbId]);
    }
  }
}
