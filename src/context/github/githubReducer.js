import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_ALERT
} from '../types'

export default (state, action) => {
    if(action.type === SET_LOADING) {
        return {
            ...state,
            loading: true
        }
    }

    if(action.type === SEARCH_USERS) {
        return {
            ...state,
            users: action.payload,
            loading: false
        }
    }

    if(action.type === GET_USER) {
        return {
            ...state,
            user: action.payload,
            loading: false
        }
    }

    if(action.type === CLEAR_USERS) {
        return {
            ...state,
            user: [],
        }
    }

    if(action.type === GET_REPOS) {
        return {
            ...state,
            repos: action.payload
        }
    }

    return state;
};