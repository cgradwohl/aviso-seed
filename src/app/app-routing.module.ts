import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';

const APP_ROUTES: Routes = [
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'fm',
        loadChildren: './modules/forecast/forecast.module#ForecastModule'
    },
    {
        path: 'deals',
        loadChildren: './modules/deals/deals.module#DealsModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
