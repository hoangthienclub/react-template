import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from '../../utils/constants';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/sign-in',
                state: { from: props.location }
            }} />
    )} />
)

export default PrivateRoute;