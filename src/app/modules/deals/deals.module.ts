/**
 * NgModule
 * @author Chris Gradwohl
 *
 * Identifies the module's own components, directives, and pipes,
 * making some of them public, through the exports property, so
 * that external components can use them. @NgModule can also add
 * service providers to the application dependency injectors.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DEALS_ROUTES } from './router/deals.routes';

/** Services */
import { DataService } from './services/data.service';

/** Components */
import { DealsComponent } from './components/deals.component';
import { DealCardComponent } from './components/deal-card/deal-card.component';
import { DealDetailComponent } from './components/deal-detail/deal-detail.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DEALS_ROUTES)
    ],
    // exports: [],
    declarations: [
        // components
        // directives
        // pipes
    DealsComponent,
        DealCardComponent,
        DealDetailComponent],
    providers: [
        // services
        DataService
    ]
})
export class DealsModule { }
