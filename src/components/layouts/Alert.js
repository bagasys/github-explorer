import React, {useContext} from 'react';
import Alert from '@material-ui/lab/Alert';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {

    const alertContext = useContext(AlertContext);
    const {alert} = alertContext;

    if(alert.text !== '') {
        return <Alert severity={alert.type} style={{marginTop: '1em'}}>{alert.text}</Alert>
    } else {
        return null;
    }
};

export default Alerts;