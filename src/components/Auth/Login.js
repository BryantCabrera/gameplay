import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { userLoginQuery } from '../../queries/queries';
import { withRouter } from 'react-router-dom';
import './Auth.css';

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
                <div className="form__field">
                    <input
                        className="form__field--input"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    >
                    </input>
                    <label className="form__field--label" htmlFor="email">
                        Email
                    </label>
                </div>
                <div className="form__field">
                    <input
                        className="form__field--input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    >
                    </input>
                    <label className="form__field--label" htmlFor="password">
                        Password
                    </label> 
                </div>
                <button className="btn form__btn">Log In</button>
            </form>
        )
    }
}

const LoginUserWithMutation = graphql(userLoginQuery)(Login);
export default withRouter(LoginUserWithMutation);