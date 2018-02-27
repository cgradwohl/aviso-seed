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

/** Service */
import { DataService } from './services/data.service';
import { FmSummaryComponent } from './components/fm-summary/fm-summary.component';
import { FmRowComponent } from './components/fm-row/fm-row.component';
import { ForecastComponent } from './components/forecast.component';

@NgModule({
    imports: [
        CommonModule
    ],
    // exports: [],
    declarations: [
        // components
        // directives
        // pipes
        FmSummaryComponent,
        FmRowComponent,
        ForecastComponent
    ],
    providers: [
        // services
        DataService
    ]
})
export class ForecastModule { }
