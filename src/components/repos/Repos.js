import React, {useContext, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GithubContext from "../../context/github/githubContext";

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const {repos} = githubContext;

    return <Grid container direction="column" spacing={2}>
        {repos.map(repo => (
            <Grid item key={repo.id}>
                <Paper style={{padding: "1em"}}>
                    <Typography variant="h6">
                        <a href={repo.html_url} style={{textDecoration: "none"}}>{repo.name}</a>
                    </Typography>

                </Paper>
            </Grid>
        ))}
    </Grid>
};

export default Repos;