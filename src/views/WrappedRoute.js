import React, { Component } from 'react';
// const log = require("debug-logdown")("util");
// import PropTypes from "prop-types";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Notification from '../components/PopupNotification';
import Spinner from '../components/Spinner';
import * as authAction from '../actions/auth';
import * as appAction from '../actions/app';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';

class WrappedRoute extends Component {
    componentWillMount() {
        const {
            auth: {
                settings: { language },
            },
            i18n,
        } = this.props;
        i18n.changeLanguage(language);
    }

    logout = () => {
        const { authActions } = this.props;
        authActions.signOut();
    };

    goBack = () => {
        this.props.history.goBack();
    };

    go = number => {
        this.props.history.go(number);
    };

    closePopup = () => {
        this.props.appActions.closePopup();
    };

    redirect = path => {
        this.props.history.push(path);
    };
    getPhoneCodeList = () => () => {
        this.props.commonActions.getPhoneCodeList();
    };
    setPhoneCode = () => data => {
        this.props.commonActions.setPhoneCode(data);
    };

    render() {
        const {
            component: C,
            auth: { user },
            order,
            app,
            screen,
            phoneCodeList,
            ...rest
        } = this.props;
        return (
            <div className="home-page">
                <C {...rest} />
                <Notification
                    {...rest}
                    title={app.notification.title}
                    message={app.notification.message}
                    onClose={this.closePopup}
                    isOpen={app.notification.open}
                    onOk={app.notification.okAction}
                />
                <Spinner loading={app.loading} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        order: state.order,
        app: state.app
    };
}

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authAction, dispatch),
        appActions: bindActionCreators(appAction, dispatch)
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withTranslation()(WrappedRoute));
