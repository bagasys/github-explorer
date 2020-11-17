import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from "@material-ui/core/Container";

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';


import Header from "./components/layouts/Header";
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alerts from "./components/layouts/Alert";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [alert, setAlert] = useState({text: '', type: ''});

    const getUser = async (queryText) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${queryText}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUser(res.data);
        setLoading(false);
    };

    const searchUsers = async (queryText) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/search/users?q=${queryText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUsers(res.data.items);
        setLoading(false);
    };

    const clearUsers = () => {
        setUsers([]);
    }

    const showAlert = (text, type) => {
        setAlert({text, type});
        setTimeout(() => {
            setAlert({text: '', type: ''})
        }, 5000)
    }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Container>
                    <Alerts text={alert.text} type={alert.type}/>
                    <Switch>
                        <Route exact path="/" render={props => (
                            <Fragment>
                                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0}
                                        showAlert={showAlert}/>
                                <Users loading={loading} users={users}/>
                            </Fragment>
                        )}/>
                        <Route exact path="/user/:login" render={(props) => (
                            <User { ...props } getUser={getUser} user={user} loading={loading}/>
                        ) }/>
                    </Switch>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
