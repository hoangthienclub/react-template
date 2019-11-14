import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';
import SignIn from './views/SignIn';
import Home from './views/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authAction from './actions/auth';
import PrivateRoute from './components/PrivateRoute';
import './styles/styles.scss';
import WrappedRoute from './views/WrappedRoute';
import RequiredAuth from './components/Auth';
import { screens, fakeAuth } from './utils/constants';

// import { useTranslation } from 'react-i18next';

const wrapped = (child, screen) => ({ ...props }) => {
    // const {t, i18n} = useTranslation()
    return <WrappedRoute component={child} {...props} screen={screen} />;
};

class AppContainer extends React.Component {
    render() {
        const { user } = this.props.auth;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/sign-in" component={wrapped(SignIn, screens.SIGN_IN)} />
                    <PrivateRoute path="/home" component={wrapped(Home, screens.HOME)} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authAction, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);
