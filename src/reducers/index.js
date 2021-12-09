import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
    coins: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                coins: {},
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            return ({
                ...state,
                coins: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_ERROR):
            return ({
                ...state,
                coins: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};