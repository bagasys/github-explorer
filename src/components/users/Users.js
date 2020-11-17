import React, {Fragment, useContext} from 'react';
import UserItem from "./UserItem";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import CircularProgress from "@material-ui/core/CircularProgress";
import GithubContext from '../../context/github/githubContext'

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: "2em"
    },
    spinnerContainer: {
        height: "10em"
    }
}))

function Users() {
    const classes = useStyles();

    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext;

        if (loading) {
        return <Grid container justify="center" alignItems="center" className={classes.spinnerContainer}>
            <Grid>
                <CircularProgress/>
            </Grid>
        </Grid>
    } else {
        return (
            <Grid container spacing={3} justify="space-around" alignItems="center" className={classes.root}>
                {users.map((user) => (
                    <Grid item key={user.login}>
                        <UserItem user={user}/>
                    </Grid>
                ))}
            </Grid>
        );
    }


}

export default Users;