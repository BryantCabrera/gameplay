import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Launcher } from 'react-chat-window';
import './Chat.css'

class Chat extends Component {
    state = {
        messageList: []
    }

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }

    render () {
        return (
            <div className="chat">
                This is chat.
                <Launcher
                    className="chat__window"
                    agentProfile={{
                        teamName: 'react-chat-window',
                        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji
                />
            </div>
        )
    }
}

export default withRouter(Chat);