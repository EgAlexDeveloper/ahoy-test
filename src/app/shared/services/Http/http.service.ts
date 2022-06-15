import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpGetSuccessResponse } from '../../models/HttpSuccessResponse';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  get = (endPointName: string): Observable<HttpGetSuccessResponse> => {
    const response: Observable<HttpGetSuccessResponse> = new Observable(observer => {
      this.http
        .get(environment.urls.api + endPointName)
        .subscribe((res: any) =>
          observer.next({
            errors: res.errors,
            get: res.get,
            parameters: res.parameters,
            results: res.results,
            response: res.response
          })
        );
    });

    return response;
  };

  post = (endPointName: string, params: {} | []): Observable<any> => this.http.post(environment.urls.api += endPointName, params);
  put = (endPointName: string, params: {} | []): Observable<any> => this.http.put(environment.urls.api += endPointName, params);
  delete = (endPointName: string): Observable<any> => this.http.delete(environment.urls.api += endPointName);

  // TODO to be used with FORMDATA type
  // upload = (endpoint: string, data: FormData): Observable<any> => this.http.post(this.setUrl(endpoint), data);
}
