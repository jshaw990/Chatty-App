import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

const messages = [
  {
    id: 1,
    username: 'Bob',
    content: 'Has anyone seen my marbles?'
  },
  {
    id: 2,
    username: 'Anonymous', 
    content: 'Shutup Bob'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        currentUser: 'Anonymous',
        messages: messages
      };
    this.ws = new WebSocket('ws://0.0.0.0:3001');
  }

  handleSendMessage = (newMessage) => {
    newMessage.id = this.state.messages.length +1; 
    const messages = this.state.messages.concat(newMessage);
    this.setState ({
      messages: messages
    });
  }

  componentDidMount() {
    setTimeout(() => {
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <ChatBar
          handleSendMessage={this.handleSendMessage}
          currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;