# MovieReview
Movie Review (Angular Application & API) Mono Repository.

An application where you can search for movies (via the omdb API) add them to your watchlist or add a review.  

![Demo MovieReview gif](DemoMovieReview.gif)

Live Demo
- Front-End: https://moviereview-angular.web.app/
- Back-End: https://moviereviewapi.azurewebsites.net

Prerequisites
- Node.js installed: https://nodejs.org/en/
- Angular CLI installed: npm install -g @angular/cli
- DotNet 3.1 installed

Getting started - Development
- git clone this repository

Client
- cd client
- npm install
- ng build
- npm start

Server
- cd server/Api
- dotnet run

Clear database
- cd server/Api
- dotnet ef database drop
