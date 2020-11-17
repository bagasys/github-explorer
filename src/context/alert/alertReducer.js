import {SET_ALERT} from "../types";

export default (state, action) => {
    if(action.type === SET_ALERT) {
        return {
            ...state,
            alert: action.payload
        }
    }

    return state;
}