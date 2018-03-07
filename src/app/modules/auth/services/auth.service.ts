import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor() { }

    authorize(payload): Observable<boolean> {
        const un = payload.username;
        const pw = payload.password;
        const validUser = un === 'abc' && pw === '123';
        return new Observable(subscriber => subscriber.next(validUser));
    }

}
