import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // TODO to handle response generic proccess like 500, 503, 401 and 403 errors ot parsing response formate
    // TODO handle Token Refreshment Queing 
  }
}
