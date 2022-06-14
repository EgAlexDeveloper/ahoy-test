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

    req.headers.set('x-rapidapi-host', environment.config.apiHostHeaderName)
    req.headers.set('x-rapidapi-key', environment.config.apiKey)
    req.headers.set('Content-Type', 'application/json')

    return next.handle(req);
  }
}
