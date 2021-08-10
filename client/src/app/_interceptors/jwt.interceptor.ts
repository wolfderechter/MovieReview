import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let currentUser: User;

    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (currentUser = user));
      console.log(request.url);
      console.log(request);
    if (currentUser && this.isHeaderNeeded(request.url)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
    }

    return next.handle(request);
  }

  // Controle of de request een Authenticatie header nodig heeft
  // requests naar omdbapi GEEN auth, naar eigen api wel auth
  isHeaderNeeded(url: string) {
    if (url.indexOf('https://www.omdbapi.com/') > -1) {
      return false;
    } else {
      return true;
    }
  }
}
