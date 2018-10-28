import React from 'react'; 
import "./MessageList.css"

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
            <li key={message.id}>
              <div className="message">
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
  }
export default MessageList; 



