import React, {Fragment} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
const useStyles = makeStyles(theme => ({
    logo: {
        color: "white"
    },
    offset: {
        ...theme.mixins.toolbar
    }
}));

function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = () => {
    const classes = useStyles();
    return <Fragment>
        <ElevationScroll>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton>
                        <GitHubIcon fontSize="large" aria-label="GitHub logo" className={classes.logo}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GitHub Explorer
                    </Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.offset}/>
    </Fragment>
};

export default Header;