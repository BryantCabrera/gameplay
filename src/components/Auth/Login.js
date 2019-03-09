import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        // if (password === verify_password) {
        //     this.props.mutate({
        //         variables: { input: { username, email, password, img } },
        //         update: (store, { data: { createUser } }) => {
        //             // Reads our data from our cache (store)
        //             const data = store.readQuery({ query: usersListQuery });

        //             // Adds our content from the mutation to the end by pushing it into the getUsers array
        //             data.getUsers.push(createUser);

        //             // Writes our data back to the cache (store)
        //             store.writeQuery({ query: usersListQuery, data });
        //         }
        //     });
        // } else {
        //     // If the password verification does not match, reset password and verify_password input fields and display error message.
        //     this.setState({
        //         password: '',
        //         verify_password: '',
        //         error: 'Your passwords don\'t match'
        //     });
        // }
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

export default withRouter(Login);