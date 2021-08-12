import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';

@Injectable()
export class SearchService {


  baseUrl = 'https://www.omdbapi.com/?apikey=de97fce5';
  movie: Movie;
  
  constructor(private http: HttpClient) { }

  // getMovies(searchString: string){
  //   // return this.http.get<Movie[]>(this.baseUrl + '&s=' + searchString);
  //   return this.http.get(this.baseUrl + '&s=' + searchString);
  // }

//   getMember(username: string){
//     return this.http.get<Member>(this.baseUrl + 'users/' + username);
//   }

  getMoviesBySearchTerm(query) {
    return this.http.get(`https://www.omdbapi.com/?apikey=d3f6c0ee&s=${query}`);
  }
 }
