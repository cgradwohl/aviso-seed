import * as fromDeals from './../actions/deals.actions';

export interface State {
    data: Array<any>;
}

export const initialState: State = {
    data: []
};

export function reducer(state = initialState, action: fromDeals.DealsActions): State {
    switch (action.type) {
        case fromDeals.LOAD_DEALS_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        }

        case fromDeals.LOAD_DEALS_FAILURE: {
            return {
                data: []
            };
        }

        default: {
            return state;
        }
    }
}

export const getData = (state: State) => state.data;
