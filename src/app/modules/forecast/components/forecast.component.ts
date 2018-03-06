import { Component, OnInit } from '@angular/core';

/** Store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';


@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

    constructor(private store: Store<fromStore.AppState>) { }

    ngOnInit() {
        this.store.select(fromStore.selectTenantConfig).subscribe(data => {
            console.log(data);
        });
  }

}
