import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './NavBar.css';

let open = false;

class NavBar extends Component {
    state = {
        open: false,
        buttonText: '+',
        overlayClass: '',
        wrapperClass: ''
    }

    openNav = () => {
        this.setState({
            open: true,
            buttonText: '-',
            overlayClass: ' on-overlay',
            wrapperClass: ' opened-nav'
        });
    }

    closeNav = () => {
        this.setState({
            open: false,
            buttonText: '+',
            overlayClass: '',
            wrapperClass: ''
        });
    }

    handleClick = (e) => {
        // if (!e) {
        //     let e = window.event;
        // }
        //prevents triggering click event on document
        e.stopPropagation();

        if (!this.state.open) {
            this.openNav();
        }
        else {
            this.closeNav();
        }
    }

    render () {
        return (
            <div className="nav">
                <button id="nav__button" className="nav__button" onClick={this.handleClick}>{this.state.buttonText}</button>
                <nav className={`nav__navbar${this.state.wrapperClass}`}>
                    {/* <img src={logo} alt="Game Play Logo" title="Game Play Logo"></img> */}
                    <ul className="nav__navbar__links">
                        <li><NavLink exact to="/">Home</NavLink></li>

                        {this.props.loggedUser ? <li><NavLink exact to="/users/:id">My Profile</NavLink></li> : <li><NavLink exact to="/register">Register</NavLink></li>}

                        {this.props.loggedUser ? <li><NavLink exact to="/">Logout</NavLink></li> : <li><NavLink exact to="/login">Login</NavLink></li>}
                        
                        <li><NavLink exact to="/games">Games</NavLink></li>

                        <li><NavLink exact to="/users">Users</NavLink></li>
                    </ul>
                    <div id="nav__overlay" className={`nav__overlay${this.state.overlayClass}`}></div>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar);