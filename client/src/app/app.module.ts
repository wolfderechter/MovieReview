import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { SearchComponent } from './search/search.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberWatchlistComponent } from './members/member-watchlist/member-watchlist.component';
import { MemberReviewListComponent } from './members/member-review-list/member-review-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { SearchService } from './_services/search.service';
import { MemberEditWatchlistComponent } from './members/member-edit/member-edit-watchlist/member-edit-watchlist.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ReviewListComponent,
    ReviewDetailComponent,
    SearchComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberListComponent,
    MemberCardComponent,
    MemberWatchlistComponent,
    MemberReviewListComponent,
    MemberEditWatchlistComponent,
    ReviewEditComponent,
    ReviewCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    SearchService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
