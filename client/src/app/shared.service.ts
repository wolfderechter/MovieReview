import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5535/api";

  constructor(private http:HttpClient) { }

  getRevList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Review');
  }

  addReview(val:any){
    return this.http.post(this.APIUrl+'/Review', val);
  }

  updateReview(val:any){
    return this.http.put(this.APIUrl+'/Review', val);
  }

  deleteReview(val:any){
    return this.http.delete(this.APIUrl+'/Review', val);
  }

  getAllReviewNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'Review/GetAllReviewNames');
  }
}
