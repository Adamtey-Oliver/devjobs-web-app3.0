// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobService {

//   constructor() { }
// }



import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Jobs } from './model/jobsdata';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private devjobsUrl = 'http://localhost:3000/Jobs'
  get: any;
  constructor(private http: HttpClient) { }
  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.devjobsUrl)
      .pipe(
        catchError(this.handleError)
      )
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message)
    } else {
      console.error(
        `Status code ${error.status} ` +
        `body was: ${error.error}`
      )
    }
    return throwError(()=>
      'Something went wrong while fetching jobs data. Please try again later.'
    )
  }
}