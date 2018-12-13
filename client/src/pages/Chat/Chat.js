import React from 'react';
import MessageList from '../../components/Chat/MessageList'

import API from "../../utils/API";
import "./Chat.css";

const DUMMY_DATA = [
    {
        senderId: "aboozar",
        text: "Hello, is the food still available?"
    },
    {
        senderId: "aparajita",
        text: "Yes, it is!"
    }
];

class Chat extends React.Component {
    constructor() {
        super();

        this.state = { messages: DUMMY_DATA };
    }

    componentDidMount = () => {
        const token = localStorage.getItem("session_token")
        API.auth(token)
            .then(res => {
                if (res.data.status !== "404") {
                    console.log("Auth successful!")
                } else {
                    localStorage.clear()
                    this.props.history.push('/login')
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='chat'>
                <MessageList
                    messages={this.state.messages} />
            </div>
        )
    }
}

export default Chat; 