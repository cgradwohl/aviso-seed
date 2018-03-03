/**
 * NgModule
 * @author Chris Gradwohl
 *
 * A routing module defines the possible routes available.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsComponent } from './components/deals.component';

const DEALS_ROUTES: Routes = [
    {
        path: '',
        component: DealsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(DEALS_ROUTES)],
    exports: [RouterModule],
    declarations: []
})
export class DealsRoutingModule { }
