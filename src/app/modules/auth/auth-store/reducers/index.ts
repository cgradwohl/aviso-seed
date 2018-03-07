import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../../app-store/reducers';
import * as fromAuth from './auth.reducers';

export interface AuthState {
  status: fromAuth.State;
}

export interface State extends fromRoot.AppState {
  auth: AuthState;
}
export const reducers = {
    status: fromAuth.reducer,
};

/** State Selectors */
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const selectLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);
