import * as types from 'services/types';

const initialState = {
    item: {
        user: '',
        message: ''
    },
    messages: [],
    users: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.HOME_ADDMESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.item]
            };
        case types.HOME_ADDUSER:
            return {
                ...state,
                users: [...state.users, action.item]
            };
        case types.HOME_SETITEM:
            return {
                ...state,
                item: action.item
            };
        case types.HOME_SETUSERS:
            return {
                ...state,
                users: action.users
            };
        case types.HOME_SETMESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
}