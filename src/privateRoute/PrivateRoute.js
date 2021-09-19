import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// React Router Dom
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    const logged = useSelector(state => state.logged)

    return (
        <>
            <Route {...rest} render= {props => (
                (logged)
                ? <Component {...props} />
                : <Redirect to='/login' />
            )} />
        </>
    );
}

export default PrivateRoute;