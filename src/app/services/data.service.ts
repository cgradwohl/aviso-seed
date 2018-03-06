import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    getTenantConfig(): Observable<any> {
        console.log('hey!');
        return this.http.get('http://localhost:3000/m').pipe(
            catchError((err: any) => Observable.throw(err.json()))
        );

    }



}
