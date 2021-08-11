import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movies: Observable<any[]>;
  searchString: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(){
    if(this.searchString){
      this.movies = this.searchService.getMoviesBySearchTerm(this.searchString).pipe(map((res:any) => res.Search));
    }
  }
}
