import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

//   getFMData(): Observable<any> {
//       return this.http.get()

//   }

//   getInitData(): Observable<any> {
//       const fmData$ = new Observable(subscriber => subscriber.next(this.getFMData));
//       const dealsData$ = new Observable(subscriber => subscriber.next(this.getDealsData));

//       return fmData$.merge(dealsData$)

//   }

}
