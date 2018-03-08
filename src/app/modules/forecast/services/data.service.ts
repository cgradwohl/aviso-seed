import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) { }

  getFMData(): Observable<any> {
    return this.http.get('http://localhost:3000/data-by-field').pipe(
        catchError((error: any) => Observable.throw(error))
    );
  }

}
