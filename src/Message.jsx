import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';

class Message extends Component {
    render() {
        return (
        <div className="message">
            <span className="message-username">{this.props.username}</span>
            <span className="message-content">{this.props.content}</span>
        </div>
        );
    }
}

 export default Message;