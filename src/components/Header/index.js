import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authAction from "../../actions/auth";
import './styles.scss';

class Header extends Component {
    
    logout = () => {
        const {
            authActions: { signOut }
        } = this.props;
        signOut();
    }

    render() {
        const { auth } = this.props;
        return (
            <div className="header-page">
                <div className="header-left">
                    <div>Documentation</div>
                </div>
                <div className="header-right">
                    <ul>
                        <li>Welcome User</li>
                        <li>Link</li>
                        {
                            auth.user && auth.user.AccessToken ? 
                                <li
                                    onClick={this.logout}
                                >Logout</li>
                            :
                                <li
                                    onClick={this.logout}
                                >Login</li>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);