import React from 'react'; 
import MessageList  from '../../components/Chat/MessageList'
import { Title } from "../../components/Chat/Title"
import { Chatkit, ChatManager, TokenProvider } from '@pusher/chatkit'
import "./Chat.css";
import SendMessageForm from './SendMessageForm'


const instanceLocator = 'v1:us1:eb4922a9-2084-4a4f-9ef7-a77080e3c804'
const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/eb4922a9-2084-4a4f-9ef7-a77080e3c804/token'
const username = 'aboozar';
// const roomId = 19371644; 
const roomId = 19371666; 

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
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator, 
            userId: username, 
            tokenProvider: new TokenProvider({
                url: testToken
            })
        })  
    

    chatManager.connect()
    .then(currentUser => {
        this.currentUser = currentUser
        currentUser.subscribeToRoom({
        roomId: roomId, 
        hooks: {
            onNewMessage: message => {
                this.setState({
                    messages: [...this.state.messages, message]
                })
            }
        }

        })
    })}

    sendMessage(text) {
        this.currentUser.sendMessage({
            text: text, 
            roomId: roomId
        })
    }
    


    render() {
        return (
            <div className='chat'>
                {/* <Title /> */}
                <MessageList
                    messages={this.state.messages} />
                <SendMessageForm 
                    sendMessage={this.sendMessage}/>
            </div>
        )
    }
}

export default Chat; 