import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuthStore from '../../modules/auth/auth-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Aviso Seed';
    loggedIn$: boolean;
    constructor(private store: Store<fromAuthStore.AuthState>) {}

    ngOnInit() {
        this.store.select(fromAuthStore.selectLoggedIn).subscribe(bool => {
            this.loggedIn$ = bool;
        });
    }
}
