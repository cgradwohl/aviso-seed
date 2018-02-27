/**
 * NgModule
 * @author Chris Gradwohl
 *
 * Identifies the module's own components, directives, and pipes,
 * making some of them public, through the exports property, so
 * that external components can use them. @NgModule can also add
 * service providers to the application dependency injectors.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './modules/login/login.module';
import { HeaderModule } from './modules/header/header.module';
import { ForecastModule } from './modules/forecast/forecast.module';
import { DealsModule } from './modules/deals/deals.module';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ForecastModule,
        DealsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
