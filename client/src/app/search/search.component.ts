import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, take } from 'rxjs/operators';
import { Member } from '../_models/member';
import { Movie } from '../_models/movie';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { MembersService } from '../_services/members.service';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movies: Observable<any[]>;
  searchString: string;
  member: Member;
  user: User;
  watchlist: Movie[];
  
  constructor(private searchService: SearchService, private memberService: MembersService, private toastr: ToastrService,
     private accountService: AccountService, private router: Router) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
      this.watchlist = member.watchlist;
    })
  }

  search(){
    if(this.searchString){
      this.movies = this.searchService.getMoviesBySearchTerm(this.searchString).pipe(map((res:any) => res.Search));
    }
  }

  addToWatchlist(movie: any){
    if(this.watchlist.find(m => m.imdbId == movie.imdbID)!= null){
      this.toastr.error('This movie is already in your watchlist!');
    }
    else{
      if(confirm("Are you sure to add " + "'" + movie.Title + "'" + " to your watchlist?")) {
        // ADD in api
        this.memberService.updateMember(movie).subscribe(() => {
          this.watchlist.push({
            'imdbId' : movie.imdbID,
            'poster' : movie.Poster,
            'title' : movie.Title
          });
          this.toastr.success('Succesfully added to your watchlist');
        });
      }
    }
  }

  createReview(movie: any){
    this.searchService.movie = {
      imdbId : movie.imdbID,
      title : movie.Title,
      poster : movie.Poster
    }

    // if review bestaat
    var review = this.member.reviews.find(r => r.movie.imdbId === movie.imdbID);
    if(this.member.reviews.find(r => r.movie.imdbId === movie.imdbID)){
      this.router.navigate(["/review/edit", review.id]);
    }
    else{
      this.router.navigate(["/review/create", movie.imdbID]);
    }
  }

  checkIfImageExists(movie: any){
    if(movie.Poster == "N/A"){
      return './assets/default.png';
    }
    return movie.Poster;
  }
}
