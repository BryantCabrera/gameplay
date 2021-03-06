import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars, faStar, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Users.css';

class UserCard extends Component {
    state = {
        cardClass: 'material-card Teal',
        iconClass: 'mc-btn-action',
        icon: faBars
    }

    toggleIconClass = () => {
        const newCardClass = this.state.cardClass === 'material-card Teal' ? 'material-card Teal mc-active' : 'material-card Teal';

        const newIconClass = this.state.iconClass === 'mc-btn-action' ? 'mc-btn-action fa-spin-fast' : 'mc-btn-action';

        const newIcon = this.state.icon === faBars ? faArrowLeft : faBars;

        this.setState({
            cardClass: newCardClass,
            iconClass: newIconClass,
            icon: newIcon
        });
    }

    render () {
        return (
            <article className={this.state.cardClass}>
                <h2>
                    <span>{this.props.user.username}</span>
                    <strong>
                        <FontAwesomeIcon icon={faStar} />
                        Valued Member
                    </strong>
                </h2>
                <div className="mc-content">
                    <div className="img-container">
                        <img className="mc__img" src={this.props.user.img} alt="User Profile" title="User Profile"></img>
                    </div>
                    <div className="mc-description">
                        He comes from a well-known acting family and began his televised acting in 1958 as a child with his father, Lloyd Bridges, and brother, Beau, on television's Sea Hunt ...
                    </div>
                </div>
                <div className={this.state.iconClass} onClick={this.toggleIconClass}>
                    <FontAwesomeIcon icon={this.state.icon} />
                </div>
                <div className="mc-footer">
                    <h4>
                        Be Social
                    </h4>
                    <Link to="#" onClick={() => console.log('Adding Friend...')}><FontAwesomeIcon icon={faUserPlus} /></Link>
                </div>
            </article>
        )
    }
}

export default withRouter(UserCard);