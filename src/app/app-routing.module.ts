import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth-guard.service';


const APP_ROUTES: Routes = [
    {
        path: 'fm',
        loadChildren: './modules/forecast/forecast.module#ForecastModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'deals',
        loadChildren: './modules/deals/deals.module#DealsModule',
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'fm',
        pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
