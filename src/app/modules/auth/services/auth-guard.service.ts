import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
import * as Auth from '../auth-store/actions/auth.actions';
import * as fromAuth from '../auth-store/reducers/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<fromAuth.State>) { }

    canActivate(): Observable<boolean> {
        return this.store.pipe(
            select(fromAuth.getLoggedIn),
            map(authed => {
                if (!authed) {
                    this.store.dispatch(new Auth.LoginRedirect());
                    return false;
                }

                return true;
            }),
            take(1)
        );
    }
}
