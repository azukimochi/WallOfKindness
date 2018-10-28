import React from 'react'

class SendMessageForm extends React.Component {

    state = {
        messages: []
    }

    handleChange(e) {
        this.setState({
          messages: e.target.value
        })
      }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            messages: []
        })
    }
  render() {
    return (
      <form 
      onSubmit={this.handleSubmit}
      className="send-message-form">
        <input 
        onChange={this.handleChange}
        value={this.state.message}
        placeholder="Type Your Message Here"
        type="text"/>
        
      </form>   
    )
  }
}
export default SendMessageForm;
