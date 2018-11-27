import React, {Component} from 'react';

class ChatBar extends React.Component {
    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Username (Optional)" />
                <input className="chatbar-message" placeholder="Press Enter to send your message" />
            </footer>
    )}
}

export default ChatBar;