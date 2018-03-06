import * as fromConfig from '../actions/config.actions';

export interface ConfigState {
    tenant_config: object;
}

export const initialState: ConfigState = {
    tenant_config: {}
};

export function reducer(state = initialState, action: fromConfig.ConfigActions): ConfigState {
    switch (action.type) {

        case fromConfig.LOAD_CONFIG_SUCCESS: {
            console.log('succ action', action);
            return {
                ...state,
                tenant_config: action.payload
            };
        }

        case fromConfig.LOAD_CONFIG_FAILURE: {
            return {
                ...state,
                tenant_config: action.err
            };
        }
    }

    return state;
}

export const getTenantConfig = (state: ConfigState) => {
    console.log('burh', state.tenant_config);
    return state.tenant_config;
};
