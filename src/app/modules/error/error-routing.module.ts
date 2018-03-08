import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';

const ERROR_ROUTES: Routes = [
    {
        path: '',
        component: ErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(ERROR_ROUTES)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
