import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
} from '../types'


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: {text: '', type: ''}
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }


    const getUser = async (queryText) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${queryText}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: GET_USER, payload: res.data});
    };

    const getUserRepos = async (queryText) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/bradtraversy/repos`);
        dispatch({type: GET_REPOS, payload: res.data});
    };

    const searchUsers = async (queryText) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${queryText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: SEARCH_USERS, payload: res.data.items});
    };

    const clearUsers = () => {
        dispatch({type: CLEAR_USERS});
    }



    const value = {
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
    }

    return <GithubContext.Provider
        value={value}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;