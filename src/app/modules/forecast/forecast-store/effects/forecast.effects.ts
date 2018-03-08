import { catchError } from 'rxjs/operators';
/** Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/** Store */
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
/** rxjs */
import { tap, map, switchMap } from 'rxjs/operators';
import * as fromFMActions from '../actions';
import { DataService } from '../../services/data.service';


@Injectable()
export class ForecastEffects {
    @Effect({ dispatch: false }) loadFmDataSuccess$ = this.actions$.pipe(
        ofType(fromFMActions.LOAD_FM_DATA_SUCCESS),
        map(() => {

            this.router.navigate(['/fm']);
        })
    );

    // @Effect({ dispatch: false })loadFmDataFailure$ = this.actions$.pipe(
    //     ofType(fromFMActions.LOAD_FM_DATA_FAILURE),
    //     tap(authed => this.router.navigate(['/login']))
    // );

    @Effect() loadFmData$ = this.actions$.pipe(
        ofType(fromFMActions.LOAD_FM_DATA),
        map(() => {
            console.log('OMGGGGGG');
        }),
        switchMap(() => this.dataService.getFMData()),
        map(data => new fromFMActions.LoadFmDataSuccess(data)),
        catchError(err => of(new fromFMActions.LoadFmDataFailure(err)))
    );

    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private router: Router
    ) {}
}
