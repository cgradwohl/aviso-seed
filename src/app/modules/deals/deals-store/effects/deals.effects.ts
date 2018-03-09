import { catchError } from 'rxjs/operators';
/** Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/** Store */
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
/** rxjs */
import { map, switchMap } from 'rxjs/operators';
import * as fromDeals from '../actions';
import { DataService } from '../../services/data.service';


@Injectable()
export class DealsEffects {
    @Effect({ dispatch: false })loadDealsFailure$ = this.actions$.pipe(
        ofType(fromDeals.LOAD_DEALS_FAILURE),
        map(() => this.router.navigate(['/error']))
    );

    @Effect() loadDeals$ = this.actions$.pipe(
        ofType(fromDeals.LOAD_DEALS),
        switchMap(() => this.dataService.getDeals()),
        map(data => new fromDeals.LoadDealsSuccess(data)),
        catchError(err => of(new fromDeals.LoadDealsFailure(err)))
    );

    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private router: Router
    ) {}
}
