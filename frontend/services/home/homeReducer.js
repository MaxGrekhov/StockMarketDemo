import * as types from 'services/types';

const initialState = {
    item: {
        user: '',
        message: ''
    },
    messages: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.HOME_ADDMESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.item]
            };
        case types.HOME_SETITEM:
            return {
                ...state,
                item: action.item
            };
        default:
            return state;
    }
}