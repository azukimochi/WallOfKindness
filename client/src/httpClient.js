import axios from 'axios'
import jwtDecode from 'jwt-decode'


// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	// const decodedToken=jwtDecode(token)
	console.log("token:",token)
	// console.log("decoded user ID:",decodedToken)
	if(token) return jwtDecode(token)
	
	
	return null
	
}

httpClient.getUserInfo = function() {
	const token = this.getToken()
	const decodedToken=jwtDecode(token)
	// console.log(token)
	if(token) 
	return axios.get("/api/user/"+decodedToken._id)
	.then((res) => {
		console.log('res', res)
	})
    .catch(function(error){
      console.log(error);
    }) 
	
	
	return console.log("decoded user ID:",decodedToken._id)
	return null
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}


// httpClient.updateUser = function(userInfo) {
// 	return this({ method: 'post', url: 'api/users/' + userInfo._id, data: userInfo})
// 		.then((response) => {
// 			console.log('updated user', response)
// 			const token = response.data.token;

// 			if(token) {
// 				this.defaults.headers.common.token = this.setToken(token);
// 				return jwtDecode(token)
// 			} else {
// 				return false
// 			}
// 		})
// }

// httpClient.getUserInfo = function(searchParams) {
// 	// return axios.get("/api/user/" + userId)
// 		return axios.get("/api/user/")
// 	.then((res) => {
// 		console.log('res', res)
// 	})
//     .catch(function(error){
//       console.log(error);
//     })
// }

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient