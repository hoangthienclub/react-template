import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './views/SignIn';
import Home from './views/Home';
import setupFirebase from './setupFirebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authAction from './actions/auth';
import * as firebaseAction from './actions/firebase';
import PrivateRoute from './components/PrivateRoute';
import './styles/styles.scss';
import WrappedRoute from './views/WrappedRoute';
import { screens } from './utils/constants';

const wrapped = (child, screen) => ({ ...props }) => {
    return <WrappedRoute component={child} {...props} screen={screen} />;
};

class AppContainer extends React.Component {
    componentWillMount() {
        const {
            firebaseActions
        } = this.props;
        setupFirebase(firebaseActions).then(token => {
            firebaseActions.updateFirebaseToken(token);
        });
    }

    render() {
        const { user } = this.props.auth;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/sign-in" component={wrapped(SignIn)} />
                    <PrivateRoute path="/" component={wrapped(Home)} auth={user}/>
                    <PrivateRoute path="/home" component={wrapped(Home)} auth={user}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        firebase: state.firebase,
        auth: state.auth,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        firebaseActions: bindActionCreators(firebaseAction, dispatch),
        authActions: bindActionCreators(authAction, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);
