import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { userLoginMutation } from '../../queries/queries';
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

    openModal = (e) => {

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
                    const data = store.readQuery({ query: userLoginMutation });
                    const user = loginUser;

                    // data.getUsers.push(loginUser);

                    console.log(data, ' data from Login.js');
                    console.log(user, ' user from Login.js');

                    this.props.loginUser(user);
                }
            });
        } else {
            // If the password verification does not match, reset password and verify_password input fields and display error message.
            this.setState({
                error: 'You left one or more fields blank.'
            });
        }
    }

    render () {
        console.log(this.props)
        return (
            <div className="overlay" style={{display: `${this.props.loginDisplay}`}}>
                <form className="login" onSubmit={this.handleSubmit}>
                    <button className="close-modal" type="button" onClick={this.props.toggleLogin}>X</button>
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
            </div>
        )
    }
}

const LoginUserWithMutation = graphql(userLoginMutation)(Login);
export default withRouter(LoginUserWithMutation);