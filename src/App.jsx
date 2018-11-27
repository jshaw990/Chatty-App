import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './MessageList.jsx';
import SystemMessage from './Message.jsx';

class Loading extends Component {
  constructor(props) {
    super(props); 
      this.state = {loading: true};
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({loading: false});
      }, 3000)
    }
  
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return <App />
    }
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Message />
        <SystemMessage />
        <ChatBar />
      </div>
    );
  }
}
export default Loading;