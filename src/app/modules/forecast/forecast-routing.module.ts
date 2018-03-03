/**
 * NgModule
 * @author Chris Gradwohl
 *
 * A routing module defines the possible routes available.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './components/forecast.component';

const FM_ROUTES: Routes = [
    {
        path: '',
        component: ForecastComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(FM_ROUTES)],
    exports: [RouterModule],
    declarations: []
})
export class ForecastRoutingModule { }
