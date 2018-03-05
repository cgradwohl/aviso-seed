/** Router */
import { Params, RouterStateSnapshot } from '@angular/router';

/** Store */
import { ActionReducerMap } from '@ngrx/store';

/** Router-Store */
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';


// defines Router URL State
export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

// a simple routing serializer, which returns a snapshot of the current routing state.
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      let route = routerState.root;

      while (route.firstChild) {
        route = route.firstChild;
      }

      const { url, root: { queryParams } } = routerState;
      const { params } = route;

      // Only return an object including the URL, params and query params
      // instead of the entire snapshot
      return { url, params, queryParams };
    }
}

// APP STORE - different slices of state
export interface AppState {
    router: RouterReducerState<RouterStateUrl>;
}

// register app reducers
export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
};

