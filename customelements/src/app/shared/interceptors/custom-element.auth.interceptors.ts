import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import statements
import { CustomElementState, LoggedUserModel } from '@shared/models/index';
import { getLoginInfo } from '@store/selectors/selectors';

@Injectable()
export class CustomElementAuthInterceptors implements HttpInterceptor {
  token: string;
  constructor(private store: Store<CustomElementState>) {
    this.store.select(getLoginInfo).subscribe((response: LoggedUserModel) => {
      if (response) {
        this.token = response.Token;
      }
    });
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token) {
      const header = { Authorization: `AsiMemberAuth guid="${this.token}"` };
      req = req.clone({
        setHeaders: header
      });
      return next.handle(req);
    }
    return next.handle(req);
  }
}
