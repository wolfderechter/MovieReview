import { Component, OnInit } from '@angular/core';
import{SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-rev',
  templateUrl: './show-rev.component.html',
  styleUrls: ['./show-rev.component.css']
})
export class ShowRevComponent implements OnInit {

  constructor(private service:SharedService) { }

  ReviewList:any=[];

  ngOnInit(): void {
    this.refreshRevList;
  }

  refreshRevList(){
    this.service.getRevList().subscribe(data=>{
      this.ReviewList=data;
    });
  }

  addClick(){}
  closeClick(){}
}
