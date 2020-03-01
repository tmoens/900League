import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ERROR_MESSAGE_DURATION} from './constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private baseURL = '/api'

  constructor(
    private http: HttpClient,
    private message: MatSnackBar,
  ) {}


  getSchedule(): Observable<any> {
    return this.http.get(this.baseURL + '/fixtures/schedule')
      .pipe(
        catchError(this.handleError('Get schedule.', []))
      );
  }

  getStandings(): Observable<any> {
    return this.http.get(this.baseURL + '/fixtures/standings')
      .pipe(
        catchError(this.handleError('Get schedule.', []))
      );
  }

  getTeams(): Observable<any> {
    return this.http.get(this.baseURL + '/teams')
      .pipe(
        catchError(this.handleError('Get teams.', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  /*
   * This generic handler was copied from the Angular tutorial.
   * And as a note to future, even thicker, self who will be going WTF?...
   * We use it to handle errors for all our http calls.  But all
   * our HTTP Calls return different types!  And the error handler
   * has to return the right type.  So, the error handler is
   * parameterized such that you can tell it what to return when
   * it is finished doing it's business.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T | null> => {
      this.message.open(operation + '. ' + error.error.error,
        null, {duration: ERROR_MESSAGE_DURATION});
      // Let the app keep running by returning what we were told to.
      return of(result as T);
    };
  }
}


