import { AppState } from './../../../../app-store/reducers/index';
import { Store } from '@ngrx/store';
import { LoadFmData } from './../../../forecast/forecast-store/actions/forecast.actions';
/** Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/** Store */
import { Effect, Actions, ofType } from '@ngrx/effects';
/** rxjs */
import { tap, map, switchMap } from 'rxjs/operators';
/** Actions */
import { Login, LoginSuccess, LoginFailure, AuthActionTypes } from '../actions/auth.actions';

/** Services */
import { AuthService } from '../../services';

import * as fromFM from '../../../forecast/forecast-store/actions';
import { ForecastState } from '../../../forecast/forecast-store';

@Injectable()
export class AuthEffects {
    @Effect({ dispatch: false })loginRedirect$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
        tap(authed => this.router.navigate(['/login']))
    );

    @Effect({ dispatch: false }) loginSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        map(() => this.router.navigate(['/fm']))
        // call AuthGuard?
    );

    @Effect() login$ = this.actions$.pipe(
        ofType(AuthActionTypes.Login),
        switchMap(action => this.authService.authorize(action['payload'])),
        map(boolean => boolean ? new LoginSuccess() : new LoginFailure(boolean))
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private store: Store<ForecastState>
    ) {}
}
