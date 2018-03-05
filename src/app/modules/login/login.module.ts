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

/** Routing */
import { LoginRoutingModule } from './login-routing.module';

/** Components */
import { LoginComponent } from './components/login.component';
import { FormsModule } from '@angular/forms';

/** Services */
import { DataService, AuthService } from './services';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    // exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [
        DataService,
        AuthService
    ]
})
export class LoginModule { }
