import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        verify_password: '',
        img: ''
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password, verify_password } = this.state;
    }

    render () {
        return (
            <form className="register" onSubmit={this.handleSubmit}>
                <div className="register__field">
                    <label className="register__field--label" htmlFor="username">
                        Enter your username.
                    </label>
                    <input 
                        className="register__field--input" 
                        name="username"
                        type="text"
                        placeholder="Enter your username."
                        value={this.state.username}
                        onChange={this.handleChange}
                        >
                    </input>
                </div>
                <div className="register__field">
                    <label className="register__field--label" htmlFor="email">
                        Enter your email.
                    </label>
                    <input 
                        className="register__field--input" 
                        name="email"
                        type="text"
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
                        type="text"
                        placeholder="Enter your password."
                        value={this.state.password}
                        onChange={this.handleChange}
                        >
                    </input>
                </div>
                <div className="register__field">
                    <label className="register__field--label" htmlFor="verify_password">
                        Please verify the password you entered.
                    </label>
                    <input 
                        className="register__field--input" 
                        name="verify_password"
                        type="text"
                        placeholder="Verify your password."
                        value={this.state.verify_password}
                        onChange={this.handleChange}
                        >
                    </input>
                </div>
                <button className="btn register__btn">Register</button>
            </form>
        )
    }
}

export default withRouter(Register);