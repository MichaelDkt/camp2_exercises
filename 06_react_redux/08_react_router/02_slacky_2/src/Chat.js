import React, { Component } from "react";
import Channel from "./root";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: "",
      channel : ""
    };
  }

  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    });
  };

  handleChannel = channel => {
    this.setState({
      channel: this.props.location.state
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state.newMessage);
    this.setState({
      newMessage: ""
     });
  };

  componentDidUpdate() {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // This will make the list of messages scroll to the bottom each time
    // the component update, that way, the last message will always be visible
    this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Channel></Channel>
        </div>
        <div className="col-8">
        <div className="Chat">
          <div
            className="Chat-messages"
            ref={(node) => {
              this.messageListDiv = node;
            }}
          >
            {this.props.messages.map((message, index) =>
              (
                <div className="message-container" key={index}>
                  <span className="author">{message.userName}</span>
                  <span className="message">{message.message}</span>
                </div>
              )
            )}
          </div>
          <div className="Chat-form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.newMessage}
                onChange={this.handleChange}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Chat;
