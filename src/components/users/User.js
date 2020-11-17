import React, {useEffect} from 'react';

const User = (props) => {
    useEffect(() => {
        props.getUser(props.match.params.login)
    }, []);

    return 'aa';
};

export default User;