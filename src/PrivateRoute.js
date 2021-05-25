import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    const logged = useSelector(state => state.logged)

    useEffect(() => {
        console.log(logged)
    }, [])
    
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