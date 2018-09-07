import * as types from 'services/types'

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.COMMON_LOADER_WAIT:
        case types.COMMON_LOADER_ERROR:
        case types.COMMON_LOADER_OK:
            const item = state[action.id];
            if (item && item.number > action.number)
                return state;
            const newItem = {
                id: action.id,
                number: action.number,
                state: action.type,
                error: action.error
            };
            return { ...state, [action.id]: newItem };
        default:
            return state;
    }
}