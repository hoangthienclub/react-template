import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => {
        return (
            auth && auth.AccessToken 
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/sign-in',
                    state: { from: props.location }
                }} />
        )
    }} />
)

export default PrivateRoute;