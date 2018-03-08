import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

/** Store */
import { Store } from '@ngrx/store';
import * as fromStore from '../forecast-store';


@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
    data$: Observable<any>;
    constructor(
        private store: Store<fromStore.ForecastState>
    ) { }

    ngOnInit() {
        this.data$ = this.store.select(fromStore.selectData);
        this.store.dispatch(new fromStore.LoadFmData());
  }

}
