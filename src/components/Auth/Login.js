import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div className="login">
                This is Login.
            </div>
        )
    }
}

export default withRouter(Login);