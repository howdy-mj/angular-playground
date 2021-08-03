import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  get<T>(endPoint: string): Observable<T> {
    return this.http
      .get<T>(`${this.BASE_URL}${endPoint}`)
      .pipe(catchError(this.handleError));
  }

  post<T>(endPoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.BASE_URL}${endPoint}`, body);
  }

  put<T>(endPoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.BASE_URL}${endPoint}`, body);
  }

  delete<T>(endPoint: string): Observable<T> {
    return this.http.delete<T>(`${this.BASE_URL}${endPoint}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error:', error.error);
    } else {
      console.error(`Backend 에러 ${error.status}, 내용: `, error.error);
    }
    return throwError('예기치 못한 에러가 발생했습니다. 다시 시도해주세요.');
  }
}
