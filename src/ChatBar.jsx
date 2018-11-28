import React, {Component} from 'react';

class ChatBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: this.props.currentUser,
            content: ''
        };
    }

    onUsername(event) {
        const usernameOld = this.state.username
        const username = event.target.value 
        this.setState({username})
    };

    onContent(event) {
        this.setState({content: event.target.value})
    };

    onEnter(event) {
        if (event.key === "enter") {
            this.props.sendMessage(this.state);
            this.setState({content:''});
        }
    };

    render() {
        return (
            <footer className="chatbar">
                <input 
                    className="chatbar-username" 
                    placeholder={this.props.username} 
                    value={this.state.username} 
                    onChange={this.onUsername.bind(this)}
                />
                <input 
                    className="chatbar-message" 
                    placeholder="Press Enter to send your message"
                    value={this.state.content}
                    onChange={this.onContent.bind(this)}
                    onKeyDown={this.onEnter.bind(this)}
                />
            </footer>
    )}
}

export default ChatBar;