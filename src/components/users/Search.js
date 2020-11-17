import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    searchBar: {
        marginTop: "2em",
        border: "solid 1px black",
        maxWidth: "50em"
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%"

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    container: {
        marginTop: theme.spacing(3),
    },
    iconButton: {
        padding: 10,
        ["&:hover"]: {
            background: "transparent"
        }
    },
}));

function Search(props) {
    const classes = useStyles();
    const [query, setQuery] = useState('');

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query === '') {
            props.showAlert('Please enter something', 'warning')
        } else {
            props.searchUsers(query);
            setQuery('');
        }

    }

    return (
        <Grid container justify="center" className={classes.container}>
            <Grid xs={12} md={8} item>
                <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Github Profile"
                        inputProps={{'aria-label': 'search github profile'}}
                        value={query}
                        onChange={handleQueryChange}
                    />
                    {props.showClear && <IconButton className={classes.iconButton} aria-label="clear search results"
                                                    onClick={props.clearUsers}>
                        <ClearIcon/>
                    </IconButton>}

                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </Grid>
        </Grid>

    );
}

export default Search