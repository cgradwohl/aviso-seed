import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthStateTree = createFeatureSelector<fromAuth.AuthState>('authentication');
export const selectAuthState = createSelector(
    selectAuthStateTree,
    fromAuth.getAuthentication
);

