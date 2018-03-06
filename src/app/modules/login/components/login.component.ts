/** Angular */
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

/** Router */
import { Router } from '@angular/router';

/** Store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private store: Store<fromStore.AppState>
    ) { }

    ngOnInit() {
        this.store.select(fromStore.selectAuthState).subscribe(bool => console.log('test', bool));
    }

    login(f: NgForm) {
        console.log(f.value);
        this.store.dispatch(new fromStore.AuthenticateUser(f.value));
    }

}
