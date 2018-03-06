import { Action } from '@ngrx/store';

export const LOAD_CONFIG_SUCCESS = 'LOAD_CONFIG_SUCCESS';
export const LOAD_CONFIG_FAILURE = 'LOAD_CONFIG_FAILURE';

export class LoadConfigSuccess implements Action {
    readonly type = LOAD_CONFIG_SUCCESS;
    constructor(public payload: any) {
        console.log('payload', payload);
    }
}

export class LoadConfigFailure implements Action {
    readonly type = LOAD_CONFIG_FAILURE;
    constructor(public err: any) { }
}

export type ConfigActions =  LoadConfigSuccess | LoadConfigFailure;
