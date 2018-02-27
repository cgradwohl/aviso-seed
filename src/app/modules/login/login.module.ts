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
import { LoginComponent } from './components/login.component';

@NgModule({
    imports: [
        CommonModule
    ],
    // exports: [],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
