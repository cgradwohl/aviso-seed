/** Angular */
import { Injectable } from '@angular/core';

/** rxjs */
import { map, switchMap } from 'rxjs/operators';

/** Store */
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthAction from '../actions/auth.actions';

/** Services */
import { AuthService } from './../../services';

@Injectable()
export class AuthEffects {
    // user athentication side effect
    @Effect() authenticate_user$ = this.actions$.pipe(
        ofType(AuthAction.AUTHENTICATE_USER),
        switchMap(action => this.authService.authorize(action['payload'])),
        map(boolean => boolean ? new AuthAction.AuthSuccess() : new AuthAction.AuthFailure())
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}
}
