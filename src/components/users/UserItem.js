import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    avatar: {
        height: "5em",
        width: "5em",
        [theme.breakpoints.down("sm")]: {
            height: "3em",
            width: "3em",
        },

    },
    card: {
        width: "15em",
        padding: "1em",
        [theme.breakpoints.down("sm")]: {
            width: "10em",
        },
    },
    moreButton: {
        marginBottom: "1em"
    }
}));

function UserItem({user}) {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <Grid container justify="center" alignItems="center" direction="column" spacing={1}>
                <Grid item>
                    <Avatar src={user.avatar_url} className={classes.avatar}/>
                </Grid>
                <Grid item>
                    <Typography variant="h6">{user.login}</Typography>
                </Grid>
                <Grid item>
                    <Button color="secondary" variant="contained" component={Link} to={`/user/${user.login}`} className={classes.moreButton}>More</Button>
                </Grid>
            </Grid>
        </Card>

    );
}

export default UserItem;