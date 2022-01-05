import React, { Component } from 'react'

export default class ChatPageJohn extends Component {
    render() {
        return (
            <div>
         <div className="name sender">{this.props.users[1].username}</div>
            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={message.username === this.props.users[1].username ? 'message sender' : 'message recipient'}
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            </div>
        )
    }
}
