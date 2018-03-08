/** Angular */
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

/** Router */
import { Router } from '@angular/router';

/** Store */
import { Store } from '@ngrx/store';
import * as fromAuthStore from '../../auth-store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private store: Store<fromAuthStore.AuthState>
    ) { }

    ngOnInit() { }

    login(f: NgForm) {
        this.store.dispatch(new fromAuthStore.Login(f.value));
    }

}
