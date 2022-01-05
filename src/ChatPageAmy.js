import React, { Component } from 'react'

export default class ChatPage extends Component {
    
    render() {
         console.log(this.props.users[0].username);
        return (
            <div>
        <div className="name sender">{this.props.users[0].username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
            </div>
        )
    }
}
