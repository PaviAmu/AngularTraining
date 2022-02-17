import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AutoapiService {

  apiUrl: string = environment.backendHost;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, X-CSRF-Token, Content-Type, X-Auth-Token');
    this.headers.append('X-XSS-Protection', '1; mode=block');
    this.headers.append('Cache-Control', 'no-cache');
    this.headers.append('Expires', new Date(Date.now() + 2592000000).toUTCString());
    if (this.headers.has('Authorization')) {

    } else {
      this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('BootManager'));
    }

  }


  requestData(url : any, values : any): Observable<any> {
    return this.http
      .post(this.apiUrl + url, values, { headers: this.headers })
      .pipe(
        catchError(this.error )
      )
  }

  getData(url : any): Observable<any> {
    console.log(this.apiUrl+url)
    return this.http

      .get(this.apiUrl + url, { headers: this.headers })
      .pipe(
        catchError(this.error)
      )
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}
