import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { userLoginQuery } from '../../queries/queries';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    componentDidMount = () => {
        console.log(this.props, ' Login props');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        if (this.state.email && this.state.password) {
            this.props.mutate({
                variables: { input: { email, password } },
                update: (store, { data: { loginUser } }) => {
                    // Reads our data from our cache (store)
                    const data = store.readQuery({ query: userLoginQuery });

                    console.log(data);
                }
            });
        } else {
            // If the password verification does not match, reset password and verify_password input fields and display error message.
            this.setState({
                error: 'You left one or more fields blank.  Please make sure you provide an email & a password.'
            });
        }
    }

    render () {
        return (
            <form className="login" onSubmit={this.handleSubmit}>
                {this.state.error ? <div className="error-message">{this.state.error}</div> : ''}
                <div className="register__field">
                    <label className="register__field--label" htmlFor="email">
                        Enter your email.
                    </label>
                    <input
                        className="register__field--input"
                        name="email"
                        type="email"
                        placeholder="Enter your email."
                        value={this.state.email}
                        onChange={this.handleChange}
                    >
                    </input>
                </div>
                <div className="register__field">
                    <label className="register__field--label" htmlFor="password">
                        Enter your password.
                    </label>
                    <input
                        className="register__field--input"
                        name="password"
                        type="password"
                        placeholder="Enter your password."
                        value={this.state.password}
                        onChange={this.handleChange}
                    >
                    </input>
                </div>
                <button className="btn register__btn">Log In</button>
            </form>
        )
    }
}

const LoginUserWithMutation = graphql(userLoginQuery)(Login);
export default withRouter(LoginUserWithMutation);