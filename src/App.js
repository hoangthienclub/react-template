import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';
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
import RequiredAuth from './components/Auth';
import { screens } from './utils/constants';

// import { useTranslation } from 'react-i18next';

const wrapped = (child, screen) => ({ ...props }) => {
    // const {t, i18n} = useTranslation()
    return <WrappedRoute component={child} {...props} screen={screen} />;
};

class AppContainer extends React.Component {
    componentWillMount() {
        const {
            firebaseActions,
            authActions,
            auth: { anonymousUser, user },
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
                    <Route path="/sign-in" component={wrapped(SignIn, screens.SIGN_IN)} />
                    <PrivateRoute path="/" component={wrapped(Home, screens.HOME)} />
                    <PrivateRoute path="/home" component={wrapped(Home, screens.HOME)} />
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
