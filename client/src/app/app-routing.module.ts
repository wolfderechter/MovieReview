import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { MemberEditWatchlistComponent } from './members/member-edit/member-edit-watchlist/member-edit-watchlist.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberReviewListComponent } from './members/member-review-list/member-review-list.component';
import { MemberWatchlistComponent } from './members/member-watchlist/member-watchlist.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'reviews', component: ReviewListComponent},
      {path: 'review/edit', component: ReviewEditComponent},
      {path: 'review/create', component: ReviewCreateComponent},
      {path: 'watchlist', component: MemberEditWatchlistComponent},
      {path: 'members', component: MemberListComponent},
      {path: 'members/:username/watchlist', component: MemberWatchlistComponent},
      {path: 'members/:username/reviews', component: MemberReviewListComponent}
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'search', component: SearchComponent},
  // Specifieke details van een review
  // {path: 'reviews/:id', component: HomeComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
