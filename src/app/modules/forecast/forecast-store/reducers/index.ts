import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../../app-store/reducers';
import * as fromForecast from './forecast.reducer';

export * from './forecast.reducer';

export interface ForecastState {
  data: fromForecast.State;
}

export interface State extends fromRoot.AppState {
  forecast: ForecastState;
}
export const reducers = {
    data: fromForecast.reducer,
};

/** State Selectors */
export const selectAuthStateTree = createFeatureSelector<ForecastState>('forecast');

export const selectForecastState = createSelector(
    selectAuthStateTree,
  (state: ForecastState) => state.data
);

export const selectData = createSelector(
  selectForecastState,
  fromForecast.getData
);
