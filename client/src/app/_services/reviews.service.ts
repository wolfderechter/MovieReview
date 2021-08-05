import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../_models/review';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {


  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getReviews(username: string){
    return this.http.get<Review[]>(this.baseUrl + 'users/' + username, httpOptions)
  }

  getReview(username: string, movieId: string){
    return this.http.get<Review>(this.baseUrl + 'users/' + username + '/reviews/' + movieId, httpOptions);
  }
}
