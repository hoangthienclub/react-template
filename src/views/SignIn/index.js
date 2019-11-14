import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Modal from "react-modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/CheckboxButton";
import * as appAction from "../../actions/app";
import * as authAction from "../../actions/auth";
import "./styles.scss";
import { fakeAuth } from '../../utils/constants';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        padding: 0,
        border: 'none'
    },
    overlay: {
        backgroundColor: 'none'
    },
    forgot: {
        background: 'red'
    }
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            forgotPasswordForm: false,
            resetPasswordForm: false,
            loginForm: true
        };
    }

    state = {
        redirectToReferrer: false
    }
    
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    }

    render() {
        const { email, password, forgotPasswordForm, resetPasswordForm, loginForm, redirectToReferrer } = this.state;
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { t } = this.props;

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
      
        return (
            <div className="sign-in-page">
                { loginForm && 
                    <div>
                        <div className="logo">
                            <img src={require("../../images/logo-auth.png")} />
                        </div>
                        <form className="login-form">
                            <div className="item">
                                <Input title="Email" />
                            </div>
                            <div className="item">
                                <Input title="Password" type="password" />
                            </div>
                            <div className="item row">
                                <div className="checkbox">
                                    <Checkbox size={20} checked={false} />
                                    <span className="title">Remember me</span>
                                </div>
                                <div className="forgot-password">
                                    <a>Forgot Password</a>
                                </div>
                            </div>
                            <div className="item">
                                <Button title="Login" />
                            </div>
                        </form>
                    </div>
                }
                <Modal
                    isOpen={forgotPasswordForm}
                    style={customStyles}
                    overlayClassName="modal-popup"
                >
                    <div className='header'>
                        <div className='cancel'>
                            <img src={require("../../images/exit.png")} />
                        </div>
                        <div>Forgot Password</div>
                    </div>
                    <form className='forgot-password'>
                        <div className="item">
                            <Input title="Email" />
                        </div>
                        <div className="item">
                            <Button title="Send" />
                        </div>
                    </form>
                </Modal>
                <Modal
                    isOpen={resetPasswordForm}
                    style={customStyles}
                    overlayClassName="modal-popup"
                >
                    <div className='header'>
                        <div className='cancel'>
                            <img src={require("../../images/exit.png")} />
                        </div>
                        <div>Reset Password</div>
                    </div>
                    <form className='forgot-password'>
                        <div className="item">
                            <Input title="Verify Code" />
                        </div>
                        <div className="item">
                            <Input title="New Password" type='password' />
                        </div>
                        <div className="item">
                            <Input title="Rest Password" type='password' />
                        </div>
                        <div className="item">
                            <Button title="Confirm New Password" />
                        </div>
                    </form>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);