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
                number: action.number,
                isOk: action.type === types.COMMON_LOADER_OK,
                isWait: action.type === types.COMMON_LOADER_WAIT,
                isError: action.type === types.COMMON_LOADER_ERROR,
                error: action.error
            };
            return { ...state, [action.id]: newItem };
        default:
            return state;
    }
}