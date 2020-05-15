import { FETCH_CULFILLED, SET_STATUS } from "./beearsActions";

const initialState = {
    data: [],
    //loading: true
    status: 'idle' //idle | pending | success | failure
}

export function beersReducers(state = initialState, action) {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        } 
        case FETCH_CULFILLED: {
            return { ...state,
                    status: 'success',
                    data: action.payload}
        }
        default: return state;
    }

}