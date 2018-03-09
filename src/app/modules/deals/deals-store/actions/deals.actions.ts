import { Action } from '@ngrx/store';

export const LOAD_DEALS = 'LOAD_DEALS';
export const LOAD_DEALS_SUCCESS = 'LOAD_DEALS_SUCCESS';
export const LOAD_DEALS_FAILURE = 'LOAD_DEALS_FAILURE';

export class LoadDeals implements Action {
    readonly type = LOAD_DEALS;
    constructor() { }
}

export class LoadDealsSuccess implements Action {
    readonly type = LOAD_DEALS_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadDealsFailure implements Action {
    readonly type = LOAD_DEALS_FAILURE;
    constructor(public err: any) { }
}

export type DealsActions = LoadDeals | LoadDealsSuccess | LoadDealsFailure;
