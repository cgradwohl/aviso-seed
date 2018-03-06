import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromConfig from '../reducers/config.reducer';

export const selectConfigStateTree = createFeatureSelector<fromConfig.ConfigState>('config');
export const selectTenantConfig = createSelector(
    selectConfigStateTree,
    fromConfig.getTenantConfig
);
