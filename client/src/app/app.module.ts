import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { AddEditRevComponent } from './review/add-edit-rev/add-edit-rev.component';
import { ShowRevComponent } from './review/show-rev/show-rev.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    AddEditRevComponent,
    ShowRevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
