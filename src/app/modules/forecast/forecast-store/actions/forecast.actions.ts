import { Action } from '@ngrx/store';

export const LOAD_FM_DATA = 'LOAD_FM_DATA';
export const LOAD_FM_DATA_SUCCESS = 'LOAD_FM_DATA_SUCCESS';
export const LOAD_FM_DATA_FAILURE = 'LOAD_FM_DATA_FAILURE';

export class LoadFmData implements Action {
    readonly type = LOAD_FM_DATA;
}

export class LoadFmDataSuccess implements Action {
    readonly type = LOAD_FM_DATA_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadFmDataFailure implements Action {
    readonly type = LOAD_FM_DATA_FAILURE;
    constructor(public err: any) { }
}

export type ForecastActions = LoadFmData | LoadFmDataSuccess | LoadFmDataFailure;
