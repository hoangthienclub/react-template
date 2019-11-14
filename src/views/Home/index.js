import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from '../../components/Header';
import * as appAction from "../../actions/app";
import * as authAction from "../../actions/auth";
import "./styles.scss";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            modalIsOpen: true
        };
    }

    render() {
        const { email, password } = this.state;
        const { t } = this.props;
        return (
            <div>
                <Header />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.app,
        auth: state.auth,
        firebase: state.firebase
    };
};

const mapDispatchToProps = dispatch => {
    return {
        appActions: bindActionCreators(appAction, dispatch),
        authActions: bindActionCreators(authAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);