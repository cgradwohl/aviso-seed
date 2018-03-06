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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** Routing */
import { AppRoutingModule } from './app-routing.module';

/** Store */
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, effects, CustomSerializer } from './store';

/** Components */
import { AppComponent } from './components/app/app.component';
import { EffectsModule } from '@ngrx/effects';

/** Services */
import { AuthService, DataService } from './services';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        FormsModule
    ],
    providers: [
        {provide: RouterStateSerializer, useClass: CustomSerializer},
        AuthService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
