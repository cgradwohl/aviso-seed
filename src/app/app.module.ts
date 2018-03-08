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
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, effects, CustomSerializer } from './app-store';

/** Feature Modules */
import { AuthModule } from './modules/auth/auth.module';

/** Components */
import { AppComponent } from './components/app/app.component';


/** Services */
import { DataService } from './services';
import { AuthService } from '../app/modules/auth/services';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        FormsModule,
        AuthModule
    ],
    providers: [
        {provide: RouterStateSerializer, useClass: CustomSerializer},
        DataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
