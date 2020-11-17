import React, {Fragment} from 'react';
import UserItem from "./UserItem";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
    root: {
      marginTop: "2em"
    },
    spinnerContainer: {
        height: "10em"
    }
}))

function Users({users, loading}) {
    const classes = useStyles();
    if (loading) {
        return <Grid container justify="center" alignItems="center" className={classes.spinnerContainer}>
            <Grid>
                <CircularProgress/>
            </Grid>
        </Grid>
    } else {
        return (

            <Grid container spacing={3} justify="space-around" alignItems="center" className={classes.root}>
                {users.map((user, index) => (
                    <Grid item key={user.login}>
                        <UserItem user={user}/>
                    </Grid>

                ))}
            </Grid>

        );
    }


}

export default Users;