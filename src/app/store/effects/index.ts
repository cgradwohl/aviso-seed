import { AuthEffects } from './auth.effects';
import { RouterEffects } from './router.effects';
import { ConfigEffects } from './config.effects';

export const effects: any[] = [AuthEffects, RouterEffects, ConfigEffects];

export * from './router.effects';
export * from './auth.effects';
export * from './config.effects';

