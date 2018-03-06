import { AuthEffects } from './auth.effects';
import { RouterEffects } from './router.effects';

export const effects: any[] = [AuthEffects, RouterEffects];

export * from './router.effects';
export * from './auth.effects';
