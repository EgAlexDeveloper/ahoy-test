import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request: HttpRequest<any> = req.clone({
      setHeaders: {
        'x-rapidapi-host': environment.config.apiHostHeaderName,
        'x-rapidapi-key': environment.config.apiKey,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request);
  }
}
