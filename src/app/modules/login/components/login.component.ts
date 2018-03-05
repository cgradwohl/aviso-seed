
/** Angular */
import { Component, OnInit } from '@angular/core';

/** Router */
import { Router } from '@angular/router';

/** Store */
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../store/actions';
import { AppState } from './../../../store/reducers';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
    }

    handleLogin() {
        this.store.dispatch(new RouterActions.Go({
            path: ['/fm']
        }));
    }

}
