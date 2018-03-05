
/** Angular */
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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

    login(f: NgForm) {
        console.log(f.value);
        const validUser = f.value.username === 'abc' && f.value.password === '123';

        if (validUser) {
            this.store.dispatch(new RouterActions.Go({
                path: ['/fm']
            }));
        } else {
            return;
        }
    }

}
