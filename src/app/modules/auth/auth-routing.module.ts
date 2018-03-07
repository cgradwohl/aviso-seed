/**
 * NgModule
 * @author Chris Gradwohl
 *
 * A routing module defines the possible routes available.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES)],
    exports: [RouterModule],
    declarations: []
})
export class AuthRoutingModule { }
