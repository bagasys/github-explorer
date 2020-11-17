import React, {useReducer} from 'react'
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import {SET_ALERT} from "../types";

const AlertState = (props) => {
    const initialState = {alert: {text: '', type: ''}};

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const showAlert = (text, type) => {
        dispatch({type: SET_ALERT, payload: {text, type}});
        setTimeout(() => {
            dispatch({type: SET_ALERT, payload: {text: '', type: ''}});
        }, 5000)
    }

    const value = {
        alert: state.alert,
        showAlert
    }

    return <AlertContext.Provider value={value}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;