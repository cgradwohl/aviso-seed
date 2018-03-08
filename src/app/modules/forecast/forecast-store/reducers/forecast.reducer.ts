import * as fromForecast from './../actions/forecast.actions';

export interface State {
    data: object;
}

export const initialState: State = {
    data: {}
};

export function reducer(state = initialState, action: fromForecast.ForecastActions): State {
    switch (action.type) {
        case fromForecast.LOAD_FM_DATA_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        }

        case fromForecast.LOAD_FM_DATA_FAILURE: {
            return {
                data: {}
            };
        }

        default: {
            return state;
        }
    }
}

export const getData = (state: State) => state.data;
