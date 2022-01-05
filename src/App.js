import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatPage from './ChatPageAmy';
import ChatPageJohn from './ChatPageJohn';
import NewText from './NewText';

class App extends Component {

  state = {
    users : [{
      username : 'Moqa' 
    },
    {
      username : 'Lems'
    }],
    messages : [
      {
        username: 'Moqa', text: 'Hi, Lems!'
      },
      {
        username: 'Moqa', text: 'How are you?'
      },
      {
        username: 'Lems', text: 'Hi, Moqa! Good, you?'
      }
    ]

  }

  addNewMessage = (newMessage) =>{
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage]
    }))

  }

  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
              <ChatPage users = {this.state.users} messages = {this.state.messages}/>
            <div>
              <NewText addNewMessage = {this.addNewMessage} username = {'Moqa'}/>
            </div>
          </div>
           
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
           <ChatPageJohn users = {this.state.users} messages = {this.state.messages} />
            <div>
             <NewText addNewMessage = {this.addNewMessage} username ={'Lems'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
