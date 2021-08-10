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
  searchControl: FormControl;


  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchControl = new FormControl();

    this.movies = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString => this.searchService.getMoviesBySearchTerm(searchString)
        ),
        map((res:any) => res.Search)
      );

  }
}
