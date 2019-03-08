import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Chat extends Component {
    render () {
        return (
            <div className="chat">
                This is chat.
            </div>
        )
    }
}

export default withRouter(Chat);