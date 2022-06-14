import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = environment.urls.api;

  constructor(private http: HttpClient) { }

  setUrl = (endPointName: string) => this.url += endPointName;

  get = (): Observable<any> => this.http.get(this.url);
  post = (params: {} | []): Observable<any> => this.http.post(this.url, params);
  put = (params: {} | []): Observable<any> => this.http.put(this.url, params);
  delete = (): Observable<any> => this.http.delete(this.url);

  // TODO to be used with FORMDATA type
  // upload = (data: FormData): Observable<any> => this.http.post(this.url, data);
}
