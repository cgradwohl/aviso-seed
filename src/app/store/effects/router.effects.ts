/**
 * Router Effects
 * @author Chris Gradwohl
 * side effects bus for the router and all router actions.
 */
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import * as RouterActions from '../actions';

@Injectable()
export class RouterEffects {
    @Effect({ dispatch: false })
    /**
     * @description - we are making an observable of type RouterAction.GO
     */
    navigate$ = this.actions$.ofType(RouterActions.GO)
        .map((action: RouterActions.Go) => action.payload)
        .do(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }));

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$.ofType(RouterActions.BACK)
        .do(() => this.location.back());

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$.ofType(RouterActions.FORWARD)
        .do(() => this.location.forward());

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) { }
}
