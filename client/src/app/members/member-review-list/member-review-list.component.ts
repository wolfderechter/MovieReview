import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { Review } from 'src/app/_models/review';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-review-list',
  templateUrl: './member-review-list.component.html',
  styleUrls: ['./member-review-list.component.css']
})
export class MemberReviewListComponent implements OnInit {
  member: Member;
  reviews: Review[];

  constructor(private memberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.reviews = member.reviews;
    })
  }
}
