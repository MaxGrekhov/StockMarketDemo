import * as types from 'services/types';

const initialState = {
    model: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.DASHBOARD_SETPRICE:
            return {
                ...state,
                model: action.model
            };
        default:
            return state;
    }
}