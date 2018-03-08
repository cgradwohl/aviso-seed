/**
 * NgModule
 * @author Chris Gradwohl
 *
 * Identifies the module's own components, directives, and pipes,
 * making some of them public, through the exports property, so
 * that external components can use them. @NgModule can also add
 * service providers to the application dependency injectors.
 */

/** Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing  */
import { ForecastRoutingModule } from './forecast-routing.module';

/** Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects} from './forecast-store';

/** Components */
import { ForecastComponent } from './components/forecast.component';

/** Services */
import { DataService } from './services/data.service';

@NgModule({
    imports: [
        CommonModule,
        ForecastRoutingModule,
        StoreModule.forFeature('forecast', reducers),
        EffectsModule.forFeature(effects),
    ],
    // exports: [],
    declarations: [
        // components
        // directives
        // pipes
        ForecastComponent
    ],
    providers: [
        // services
        DataService
    ]
})
export class ForecastModule { }
