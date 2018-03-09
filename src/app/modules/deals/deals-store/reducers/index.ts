import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../../app-store/reducers';
import * as fromDeals from './deals.reducers';

export * from './deals.reducers';

export interface DealsState {
  data: fromDeals.State;
}

export interface State extends fromRoot.AppState {
  deals: DealsState;
}
export const reducers = {
    data: fromDeals.reducer
};

/** State Selectors */
export const selectAuthStateTree = createFeatureSelector<DealsState>('deals');

export const selectForecastState = createSelector(
    selectAuthStateTree,
  (state: DealsState) => state.data
);

export const selectData = createSelector(
  selectForecastState,
  fromDeals.getData
);
