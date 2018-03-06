import * as fromAuth from '../actions/auth.actions';

export interface AuthState {
    authenticated: boolean;
}

export const initialState: AuthState = {
    authenticated: false
};

export function reducer(state = initialState, action: fromAuth.AuthActions): AuthState {
    switch (action.type) {

        case fromAuth.AUTH_SUCCESS: {
            return {
                ...state,
                authenticated: true
            };
        }

        case fromAuth.AUTH_FAILURE: {
            return {
                ...state,
                authenticated: false
            };
        }
    }

    return state;
}

export const getAuthentication = (state: AuthState) => state.authenticated;
