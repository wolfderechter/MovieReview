import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Movie } from 'src/app/_models/movie';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit-watchlist',
  templateUrl: './member-edit-watchlist.component.html',
  styleUrls: ['./member-edit-watchlist.component.css']
})
export class MemberEditWatchlistComponent implements OnInit {
  member: Member;
  user: User;
  watchlist: Movie[];

  constructor(private accountService: AccountService, private memberService: MembersService, private toastr: ToastrService) { 
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
    if(confirm("Are you sure to delete " + "'" + movie.title + "'" + " from your watchlist?")) {
      // DELETE in api
      this.memberService.updateMember(movie).subscribe(() => {
        this.watchlist.splice(this.watchlist.indexOf(movie), 1);
        this.toastr.success('Succesfully removed from your watchlist');
      });
    }
  }
  addToWatchlist(movie: Movie){
    if(confirm("Are you sure to add " + "'" + movie.title + "'" + " to your watchlist?")) {
      // ADD in api
      this.memberService.updateMember(movie).subscribe(() => {
        this.watchlist.push(movie);
        this.toastr.success('Succesfully added to your watchlist');
      });
    }
  }
}
