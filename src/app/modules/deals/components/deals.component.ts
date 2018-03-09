import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../deals-store';

@Component({
    selector: 'app-deals',
    templateUrl: './deals.component.html',
    styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
    data$: Observable<any>;
    constructor(
        private store: Store<fromStore.DealsState>
    ) { }

    ngOnInit() {
        this.data$ = this.store.select(fromStore.selectData);
        this.store.dispatch(new fromStore.LoadDeals());

    }

}
