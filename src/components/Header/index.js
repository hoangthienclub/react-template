import React, { Component } from 'react';
import './styles.scss';

class Header extends Component {
    render() {
        return (
            <div className="header-page">
                <div className="header-left">
                    <div>Documentation</div>
                </div>
                <div className="header-right">
                    <ul>
                        <li>Welcome User</li>
                        <li>Link</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
