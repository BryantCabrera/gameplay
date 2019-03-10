import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// import gql from "graphql-tag";
import { createUser, usersListQuery } from '../../queries/queries';
import { withRouter } from 'react-router-dom';

// import { usersListQuery } from '../Users/Users';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        verify_password: '',
        img: 'https://i.imgur.com/KbicDVh.jpg',
        games: [{
            title: '',
            author: '',
            wins: 0,
            losses: 0,
            draws: 0
        }],
        error: ''
    }

    componentDidMount = () => {
        console.log(this.props, ' Register props');
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
        
        if (e.target.name === 'password' || e.target.name === 'verify_password') {
            this.setState({
                error: ''
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password, verify_password, img } = this.state;

        if (password === verify_password) {
            this.props.mutate({
                variables: {input: {username, email, password, img}},
                update: (store, { data: { createUser } }) => {
                    // Reads our data from our cache (store)
                    const data = store.readQuery({ query: usersListQuery });

                    // Adds our content from the mutation to the end by pushing it into the getUsers array
                    data.getUsers.push(createUser);
    
                    // Writes our data back to the cache (store)
                    store.writeQuery({ query: usersListQuery, data });
                }
            });
        } else {
            // If the password verification does not match, reset password and verify_password input fields and display error message.
            this.setState({
                password: '',
                verify_password: '',
                error: 'Your passwords don\'t match'
            });
        }
    }

    render () {
        console.log(`${this.props.registerDisplay}`, 'displayregister');
        return (
            <div className="overlay" style={{ display: `${this.props.registerDisplay}` }}>
                <form className="register" onSubmit={this.handleSubmit}>
                    <button className="close-modal" type="button" onClick={this.props.toggleRegister}>X</button>
                    {this.state.error ? <div className="error-message">{this.state.error}</div> : ''}
                    <div className="form__field">
                        <input
                            className="form__field--input"
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        >
                        </input>
                        <label className="form__field--label" htmlFor="username">
                            Username
                        </label>
                    </div>
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
                    <div className="form__field">
                        <input
                            className="form__field--input"
                            name="verify_password"
                            type="password"
                            placeholder="Verify password"
                            value={this.state.verify_password}
                            onChange={this.handleChange}
                        >
                        </input>
                        <label className="form__field--label" htmlFor="verify_password">
                            Verify password
                        </label>
                    </div>
                    <button className="btn form__btn">Register</button>
                </form>
            </div>
        )
    }
}

// // 1st line makes sure right value is passed
// //the $ denotes a variable, and we are saying that variable must look like whatever comes after the : (defined in our server schema)
// //this input variable will be called in the createUser mutation
// //the 2nd object is the response we want back from the database
// export const createUser = gql`
//   mutation createUser($input: UserInput){
//     createUser(input: $input){
//       id
//       username
//       email
//       password
//       img
//       games {
//         id
//         title
//         author
//         wins
//         losses
//         draws
//       }
//     }
//   }
// `

const AddUserWithMutation = graphql(createUser)(Register);
export default withRouter(AddUserWithMutation);

// export default withRouter(Register);