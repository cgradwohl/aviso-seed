import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Feature Router */
import { AuthRoutingModule } from './auth-routing.module';

/** Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth-store';
import { reducers } from '../auth/auth-store/reducers';

/** Components */
import { LoginComponent } from './components/login/login.component';

/** Services */
import { AuthGuard, AuthService } from './services';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [AuthGuard, AuthService]
})
export class AuthModule { }
