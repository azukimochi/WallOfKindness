import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {

	componentDidMount = () => {
		localStorage.clear()
		this.props.history.push("/")
	}

	// componentWillMount(){
	// 	this.props.LogOut
	// 	windows.localStorage.clear()
	// }
	
	render() {
		// return <Redirect to="/login" />
		return(
			<div>nothing</div>
		)
	}
}

export default LogOut