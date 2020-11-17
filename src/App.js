import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from "@material-ui/core/Container";

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

import GithubState from "./context/github/GithubState";

import Header from "./components/layouts/Header";
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alerts from "./components/layouts/Alert";
import AlertState from "./context/alert/AlertState";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GithubState>
                <AlertState>
                    <BrowserRouter>
                        <Header/>
                        <Container>
                            <Alerts text={alert.text} type={alert.type}/>
                            <Switch>
                                <Route exact path="/" render={props => (
                                    <Fragment>
                                        <Search/>
                                        <Users/>
                                    </Fragment>
                                )}/>
                                <Route exact path="/user/:login" render={(props) => (
                                    <User {...props} />
                                )}/>
                            </Switch>
                        </Container>
                    </BrowserRouter>
                </AlertState>
            </GithubState>
        </ThemeProvider>
    );
}

export default App;
