import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Alerts = (props) => {
    if(props.text !== '') {
        return <Alert severity={props.type} style={{marginTop: '1em'}}>{props.text}</Alert>
    } else {
        return null;
    }
};

export default Alerts;