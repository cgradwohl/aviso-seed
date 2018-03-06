import { Action } from '@ngrx/store';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export class AuthenticateUser implements Action {
    readonly type = AUTHENTICATE_USER;

    constructor(
        public payload: {
            username: string;
            password: string;
        }
    ) { }
}

export class AuthSuccess implements Action {
    readonly type = AUTH_SUCCESS;
}

export class AuthFailure implements Action {
    readonly type = AUTH_FAILURE;
}

export type AuthActions = AuthenticateUser | AuthSuccess | AuthFailure;
