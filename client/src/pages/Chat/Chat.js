import React from 'react'; 
import  MessageList  from '../../components/Chat/MessageList'
import "./Chat.css";

    const DUMMY_DATA = [
    {
        senderId: "aboozar",
        text: "Hello, is the food still available?"
    },
    {
        senderId: "aparajita",
        text: "Yes, it is!"
    }, 
    {   
        senderId: "aboozar",
        text: "great I'll pick it up today!"
    }
    ];

class Chat extends React.Component {
    constructor() {
        super(); 

        this.state = { messages: DUMMY_DATA }; 
    } 
  
    render() {
        return (
            <div className='chat'>
                {/* <Title /> */}
                <MessageList
                    messages={this.state.messages} />
                {/* <SendMessageForm /> */}
            </div>
        )
    }
}

export default Chat; 