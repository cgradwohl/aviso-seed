import { Action } from '@ngrx/store';

export const LOAD_FM_DATA = 'LOAD_FM_DATA';
export const LOAD_FM_DATA_SUCCESS = 'LOAD_FM_DATA_SUCCESS';
export const LOAD_FM_DATA_FAILURE = 'LOAD_FM_DATA_FAILURE';

export class LoadFmData implements Action {
    readonly type = LOAD_FM_DATA;
    constructor() {
        console.log('HE:LLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOO');
    }
}

export class LoadFmDataSuccess implements Action {
    readonly type = LOAD_FM_DATA_SUCCESS;
    constructor(public payload: any) {
        console.log('paypay', payload);
    }
}

export class LoadFmDataFailure implements Action {
    readonly type = LOAD_FM_DATA_SUCCESS;
    constructor(public err: any) {
        console.log('err', err);
    }
}

export type ForecastActions = LoadFmData | LoadFmDataSuccess | LoadFmDataSuccess;
