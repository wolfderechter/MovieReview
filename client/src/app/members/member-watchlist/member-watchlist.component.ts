import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { Movie } from 'src/app/_models/movie';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-watchlist',
  templateUrl: './member-watchlist.component.html',
  styleUrls: ['./member-watchlist.component.css']
})
export class MemberWatchlistComponent implements OnInit {
  member: Member;
  watchlist: Movie[];

  constructor(private memberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.watchlist = member.watchlist;
    })
  }
}
