import React, {useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "0.5em"
    },
    followingCountContainer: {
        background: "red",
        color: "white",
        borderRadius: 6,
        padding: "0.4em"
    },
    followerCountContainer: {
        background: "red",
        color: "white",
        borderRadius: 6,
        padding: "0.4em"
    },
    publicReposCountContainer: {
        background: "red",
        color: "white",
        borderRadius: 6,
        padding: "0.4em"
    },
    publicGistsCountContainer: {
        background: "red",
        color: "white",
        borderRadius: 6,
        padding: "0.4em"
    },
}));

const User = ({match}) => {
    const classes = useStyles();

    const githubContext = useContext(GithubContext);
    const {getUser, getUserRepos, loading, user, userRepos} = githubContext;

    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)

    }, []);
    if (loading) {
        return 'loading';
    } else {
        return (
            <Grid container direction="column" className={classes.root} spacing={3}>
                <Grid item container direction="row" alignItems="center" spacing={1}>
                    <Grid item>
                        <Button variant="contained">Back to Search</Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            Hireable:
                        </Typography>
                    </Grid>
                    <Grid item>
                        {user.hireable ? (<CheckIcon fontSize="large" style={{color: "green"}}/>) : (
                            <CloseIcon fontSize="large" style={{color: "red"}}/>)}
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justify={"space-around"} style={{padding: "1em"}}
                          component={Paper}>
                        <Grid xs={12} md={5} item container direction="column" alignItems="center" spacing={1}>
                            <Grid item>
                                <Avatar style={{width: "7em", height: "7em"}} src={user.avatar_url}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">
                                    {user.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                Location: {user.location}
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={5} item container direction="column" spacing={3}>
                            <Grid item>
                                Bio <br/>
                                {user.bio}
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">Visit GitHub Profile</Button>
                            </Grid>
                            <Grid item>
                                <Typography>Username: {user.login}</Typography>
                                <Typography>Company: {user.company}</Typography>
                                <Typography>Website: {user.blog}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Paper style={{padding: "1em"}}>
                        <Grid container justify="center" alignItems="center" spacing={5}>
                            <Grid item>
                                <div className={classes.followerCountContainer}>
                                    Followers: {user.followers}
                                </div>
                            </Grid>
                            <Grid item>
                                <div className={classes.followingCountContainer}>Following: {user.following}</div>
                            </Grid>
                            <Grid item>
                                <div className={classes.publicReposCountContainer}>Public
                                    Repos: {user.public_repos}</div>
                            </Grid>
                            <Grid item>
                                <div className={classes.publicGistsCountContainer}>Public
                                    Gists: {user.public_gists}</div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Repos repos={userRepos}/>
                </Grid>
            </Grid>
        )
    }

};

export default User;