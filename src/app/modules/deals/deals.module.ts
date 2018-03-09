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

/** Routing */
import { DealsRoutingModule } from './deals-routing.module';

/** Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './deals-store';


/** Components */
import { DealsComponent } from './components/deals.component';

/** Services */
import { DataService } from './services/data.service';



@NgModule({
    imports: [
        CommonModule,
        DealsRoutingModule,
        StoreModule.forFeature('deals', reducers),
        EffectsModule.forFeature(effects)
    ],
    // exports: [],
    declarations: [
        // components
        // directives
        // pipes
        DealsComponent,
    ],
    providers: [
        // services
        DataService
    ]
})
export class DealsModule { }
