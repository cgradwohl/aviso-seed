/** Angular */
import { Injectable } from '@angular/core';

/** rxjs */
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

/** Store */
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthAction from '../actions/auth.actions';
import * as ConfigAction from '../actions/config.actions';
import * as RouterAction from '../actions/router.actions';

/** Services */
import { DataService } from './../../services';
import { AppState } from '../../store/reducers';

@Injectable()
export class ConfigEffects {

    // get /m config side effect
    @Effect() tenant_config$ = this.actions$.pipe(
        ofType(AuthAction.AUTH_SUCCESS),
        switchMap(() => this.dataService.getTenantConfig()),
        map(data => new ConfigAction.LoadConfigSuccess(data)),
        map(() => new RouterAction.Go({path: ['/fm']})),
        catchError(error => of(new ConfigAction.LoadConfigFailure(error)))
    );

    // @Effect() init$ = this.actions$.pipe(
    //     ofType(AuthAction.AUTH_SUCCESS),
    //     switchMap(() => this.dataService.getFMConfig())
    // );

    // @Effect() init$ = this.actions$.pipe(
    //     ofType(AuthAction.AUTH_SUCCESS),
    //     switchMap(() => this.dataService.getFMDataByField())
    // );
    // @Effect() init$ = this.actions$.pipe(
    //     ofType(AuthAction.AUTH_SUCCESS),
    //     switchMap(() => this.dataService.getDeals())
    // );

    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private store: Store<AppState>
    ) {}
}
